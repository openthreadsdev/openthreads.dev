// Polyfills for browser environment
// This file must be loaded before main.tsx to ensure global objects are available

import { Buffer } from "buffer";

// Make Buffer available globally for libraries that expect Node.js environment
// @ts-expect-error - Buffer is not defined in browser globals
window.Buffer = Buffer;

// Set global to globalThis for libraries expecting Node environment
// @ts-expect-error - global is not defined in browser
window.global = globalThis;
