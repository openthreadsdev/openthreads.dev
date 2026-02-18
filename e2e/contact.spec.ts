import { test, expect } from "@playwright/test";

test.describe("Contact Page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/contact");
  });

  test("should load the contact page", async ({ page }) => {
    await expect(page.locator("h1")).toContainText("Get in touch");
  });

  test("should display contact form", async ({ page }) => {
    await expect(page.locator('form[name="contact"]')).toBeVisible();
  });

  test("should have required form fields", async ({ page }) => {
    await expect(page.locator('input[name="name"]')).toBeVisible();
    await expect(page.locator('input[name="email"]')).toBeVisible();
    await expect(page.locator('textarea[name="message"]')).toBeVisible();
  });

  test("should show validation for required fields", async ({ page }) => {
    await page.click('button[type="submit"]');
    // HTML5 validation should prevent empty form submission
    const nameInput = page.locator('input[name="name"]');
    await expect(nameInput).toBeFocused();
  });
});
