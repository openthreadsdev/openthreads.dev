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
    if (await menuButton.isVisible()) {
      await menuButton.click();
    }

    await page.click('a[href="/blog"]');
    await expect(page).toHaveURL(/.*blog/);
  });
});
