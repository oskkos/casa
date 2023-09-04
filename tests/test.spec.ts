import { test, expect } from "@playwright/test";
import "dotenv/config";

test("test", async ({ page }) => {
  await page.goto("http://localhost:3000/");
  await page.getByLabel("Email address").click();
  await page
    .getByLabel("Email address")
    .fill(process.env.PLAYWRIGHT_TESTUSER_EMAIL!);
  await page.getByRole("button", { name: "Continue" }).click();
  await page.getByLabel("Password", { exact: true }).click();
  await page
    .getByLabel("Password", { exact: true })
    .fill(process.env.PLAYWRIGHT_TESTUSER_PASSWORD!);
  await page.getByRole("button", { name: "Continue" }).click();
  await expect(page.getByText("Get started")).toBeVisible();
});
