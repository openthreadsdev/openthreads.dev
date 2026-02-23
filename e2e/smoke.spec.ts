import { test, expect } from "@playwright/test";

/**
 * Smoke tests for production build
 * These tests check for critical runtime errors that would break the application
 */

test.describe("Production Smoke Tests", () => {
  test("should load without console errors", async ({ page }) => {
    const consoleErrors: string[] = [];
    const consoleWarnings: string[] = [];

    // Capture console errors and warnings
    page.on("console", (msg) => {
      if (msg.type() === "error") {
        consoleErrors.push(msg.text());
      } else if (msg.type() === "warning") {
        consoleWarnings.push(msg.text());
      }
    });

    // Capture uncaught exceptions
    page.on("pageerror", (error) => {
      consoleErrors.push(`Uncaught exception: ${error.message}`);
    });

    // Navigate to home page
    await page.goto("/", { waitUntil: "networkidle" });

    // Verify page loaded
    await expect(page).toHaveTitle(/OpenThreads/);

    // Check for console errors
    expect(
      consoleErrors,
      `Console errors detected:\n${consoleErrors.join("\n")}`
    ).toHaveLength(0);

    // Log warnings but don't fail (for visibility)
    if (consoleWarnings.length > 0) {
      console.log(
        `⚠️  Console warnings detected:\n${consoleWarnings.join("\n")}`
      );
    }
  });

  test("should load blog page without errors", async ({ page }) => {
    const consoleErrors: string[] = [];

    page.on("console", (msg) => {
      if (msg.type() === "error") {
        consoleErrors.push(msg.text());
      }
    });

    page.on("pageerror", (error) => {
      consoleErrors.push(`Uncaught exception: ${error.message}`);
    });

    await page.goto("/blog", { waitUntil: "networkidle" });

    // Verify page loaded (h1 should be visible)
    await expect(page.locator("h1")).toBeVisible();

    expect(
      consoleErrors,
      `Console errors on blog page:\n${consoleErrors.join("\n")}`
    ).toHaveLength(0);
  });

  test("should load individual blog post without errors", async ({ page }) => {
    const consoleErrors: string[] = [];

    page.on("console", (msg) => {
      if (msg.type() === "error") {
        consoleErrors.push(msg.text());
      }
    });

    page.on("pageerror", (error) => {
      consoleErrors.push(`Uncaught exception: ${error.message}`);
    });

    // Navigate to blog and click first post
    await page.goto("/blog", { waitUntil: "networkidle" });
    const firstPostLink = page
      .locator('a[href^="/blog/"]')
      .filter({ hasNotText: "Blog" })
      .first();
    await firstPostLink.click();

    // Wait for post to load
    await page.waitForLoadState("networkidle");

    expect(
      consoleErrors,
      `Console errors on blog post:\n${consoleErrors.join("\n")}`
    ).toHaveLength(0);
  });
});
