import { test, expect, Page } from "@playwright/test";
import "dotenv/config";

const login = async ({ page }: { page: Page }) => {
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
};

test.beforeEach(login);

test("test", async ({ page }) => {
  await page.goto("http://localhost:3000/");
  await expect(page.getByText("¡Hola casa!")).toBeVisible();
});
