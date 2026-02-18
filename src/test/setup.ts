import "@testing-library/jest-dom";
import { configureAxe } from "vitest-axe";

// Configure axe for accessibility testing
export const axe = configureAxe({
  rules: {
    // Customize rules as needed
    region: { enabled: false },
  },
});

Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: (query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: () => {},
    removeListener: () => {},
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => {},
  }),
});
