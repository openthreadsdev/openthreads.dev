import { test, expect } from "@playwright/test";

test.describe("Home Page", () => {
  test("should load the home page successfully", async ({ page }) => {
    await page.goto("/");
    await expect(page).toHaveTitle(/OpenThreads/);
  });

  test("should have navigation menu", async ({ page }) => {
    await page.goto("/");
    const header = page.locator("header");
    await expect(header).toBeVisible();
  });

  test("should navigate to blog page", async ({ page }) => {
    await page.goto("/");

    // On mobile, open the menu first if the toggle button is visible
    const menuButton = page.locator('button[aria-label="Toggle menu"]');
    const blogLink = page.locator('a[href="/blog"]');

    if (await menuButton.isVisible()) {
      await menuButton.click();
      // Wait for the mobile menu to open and link to be visible
      await blogLink.first().waitFor({ state: "visible" });
    }

    await blogLink.first().click();
    await expect(page).toHaveURL(/.*blog/);
  });
});
