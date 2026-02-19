import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { axe } from "./setup";
import ContactPage from "@/pages/ContactPage";

describe("Accessibility Tests", () => {
  it("ContactPage should not have any accessibility violations", async () => {
    const { container } = render(
      <HelmetProvider>
        <BrowserRouter future={{ v7_startTransition: true }}>
          <ContactPage />
        </BrowserRouter>
      </HelmetProvider>
    );

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
