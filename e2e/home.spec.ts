import { test, expect } from "@playwright/test";

test.describe("Home Page", () => {
  test("should load the home page successfully", async ({ page }) => {
    await page.goto("/");
    await expect(page).toHaveTitle(/OpenThreads/);
  });

  test("should have navigation menu", async ({ page }) => {
    await page.goto("/");
    const nav = page.locator("nav").first();
    await expect(nav).toBeVisible();
  });

  test("should navigate to blog page", async ({ page }) => {
    await page.goto("/");
    await page.click('a[href="/blog"]');
    await expect(page).toHaveURL(/.*blog/);
  });
});
