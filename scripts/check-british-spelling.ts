/**
 * Checks for American English spellings that should be British English.
 *
 * Usage:
 *   npx tsx scripts/check-british-spelling.ts              # Check all src/ files
 *   npx tsx scripts/check-british-spelling.ts file1 file2  # Check specific files (lint-staged)
 *
 * Add "// spelling:disable" on a line to suppress warnings for that line.
 */

import { readFileSync, readdirSync, type Dirent } from "node:fs";
import { join, relative } from "node:path";

const IGNORE_COMMENT = "spelling:disable";

const SKIP_DIRS = new Set(["node_modules", "dist", ".git", ".husky", "public"]);
const SKIP_PATHS = ["src/components/ui"];
const EXTENSIONS = [".ts", ".tsx", ".js", ".jsx", ".md", ".mdx"];

// Stems before "ize" — editorial words unlikely to appear as code identifiers.
// Words like "size", "prize", "seize" are excluded (correct with -ize in all English).
const IZE_STEMS = [
  "author",
  "brutal",
  "capital",
  "categor",
  "central",
  "character",
  "commercial",
  "crystal",
  "digit",
  "emphas",
  "equal",
  "final",
  "formal",
  "general",
  "global",
  "harmon",
  "hospital",
  "ideal",
  "incentiv",
  "industrial",
  "legal",
  "liberal",
  "marginal",
  "material",
  "memorial",
  "modern",
  "monet",
  "moral",
  "national",
  "natural",
  "neutral",
  "organ",
  "patron",
  "penal",
  "personal",
  "priorit",
  "privat",
  "radical",
  "rational",
  "real",
  "recogn",
  "revolution",
  "revital",
  "social",
  "special",
  "stabil",
  "standard",
  "summar",
  "trivial",
  "vandal",
  "visual",
  "vocal",
];

// -yze stems (before "yze")
const YZE_STEMS = ["anal", "paral", "catal"];

// Other American → British patterns
const OTHER_PATTERNS: [RegExp, string][] = [
  [/\bbehaviors?\b/gi, "behaviour(s)"],
  [/\bfavorable\b/gi, "favourable"],
  [/\bfavorites?\b/gi, "favourite(s)"],
  [/\bfavors?\b/gi, "favour(s)"],
  [/\bhonors?\b/gi, "honour(s)"],
  [/\bhonorable\b/gi, "honourable"],
  [/\bhumors?\b/gi, "humour(s)"],
  [/\blabors?\b/gi, "labour(s)"],
  [/\bneighbors?\b/gi, "neighbour(s)"],
  [/\bneighborhoods?\b/gi, "neighbourhood(s)"],
  [/\bdefenses?\b/gi, "defence(s)"],
  [/\boffenses?\b/gi, "offence(s)"],
  [/\btheaters?\b/gi, "theatre(s)"],
  [/\bfibers?\b/gi, "fibre(s)"],
  [/\bgray\b/gi, "grey"],
];

interface SpellingPattern {
  regex: RegExp;
  getSuggestion: (match: string) => string;
}

interface Violation {
  line: number;
  column: number;
  word: string;
  suggestion: string;
}

function buildPatterns(): SpellingPattern[] {
  const patterns: SpellingPattern[] = [];

  for (const stem of IZE_STEMS) {
    // \w* before the stem catches prefixed forms (e.g. "unauthorised", "demoralising")
    patterns.push({
      regex: new RegExp(`\\b\\w*${stem}iz(e[ds]?|ing|ations?)\\b`, "gi"),
      getSuggestion: (match: string) =>
        match.replace(/iz(e[ds]?|ing|ations?)/gi, "is$1"),
    });
  }

  for (const stem of YZE_STEMS) {
    patterns.push({
      regex: new RegExp(`\\b\\w*${stem}yz(e[ds]?|ing)\\b`, "gi"),
      getSuggestion: (match: string) =>
        match.replace(/yz(e[ds]?|ing)/gi, "ys$1"),
    });
  }

  for (const [regex, suggestion] of OTHER_PATTERNS) {
    patterns.push({
      regex,
      getSuggestion: () => suggestion,
    });
  }

  return patterns;
}

function findFiles(dir: string, rootDir: string): string[] {
  const results: string[] = [];
  let entries: Dirent[];
  try {
    entries = readdirSync(dir, { withFileTypes: true });
  } catch {
    return results;
  }

  for (const entry of entries) {
    const fullPath = join(dir, entry.name);
    if (entry.isDirectory()) {
      if (SKIP_DIRS.has(entry.name)) continue;
      const relPath = relative(rootDir, fullPath);
      if (SKIP_PATHS.some((skip) => relPath.startsWith(skip))) continue;
      results.push(...findFiles(fullPath, rootDir));
    } else if (EXTENSIONS.some((ext) => entry.name.endsWith(ext))) {
      const relPath = relative(rootDir, fullPath);
      if (!SKIP_PATHS.some((skip) => relPath.startsWith(skip))) {
        results.push(fullPath);
      }
    }
  }

  return results;
}

function checkFile(filePath: string, patterns: SpellingPattern[]): Violation[] {
  const content = readFileSync(filePath, "utf-8");
  const lines = content.split("\n");
  const violations: Violation[] = [];

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (line.includes(IGNORE_COMMENT)) continue;

    for (const { regex, getSuggestion } of patterns) {
      regex.lastIndex = 0;
      let match: RegExpExecArray | null;
      while ((match = regex.exec(line)) !== null) {
        violations.push({
          line: i + 1,
          column: match.index + 1,
          word: match[0],
          suggestion: getSuggestion(match[0]),
        });
      }
    }
  }

  return violations;
}

const patterns = buildPatterns();
const args = process.argv.slice(2);

let files: string[];
if (args.length > 0) {
  files = args.filter((f) => EXTENSIONS.some((ext) => f.endsWith(ext)));
} else {
  const rootDir = process.cwd();
  files = findFiles(join(rootDir, "src"), rootDir);
}

let totalViolations = 0;
for (const file of files) {
  if (file.includes("components/ui/")) continue;

  const violations = checkFile(file, patterns);
  if (violations.length > 0) {
    totalViolations += violations.length;
    const relPath = relative(process.cwd(), file);
    for (const v of violations) {
      console.error(
        `${relPath}:${v.line}:${v.column} - Use British English: "${v.word}" → "${v.suggestion}"`
      );
    }
  }
}

if (totalViolations > 0) {
  console.error(
    `\nFound ${totalViolations} American English spelling(s). Please use British English.`
  );
  console.error(
    `Add "// ${IGNORE_COMMENT}" to a line to suppress a specific warning.`
  );
  process.exit(1);
}
