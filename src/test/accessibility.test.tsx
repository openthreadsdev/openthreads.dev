import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { axe } from "./setup";
import ContactPage from "@/pages/ContactPage";

describe("Accessibility Tests", () => {
  it("ContactPage should not have any accessibility violations", async () => {
    const { container } = render(
      <BrowserRouter>
        <ContactPage />
      </BrowserRouter>
    );

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
