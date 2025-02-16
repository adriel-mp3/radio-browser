import { test, expect } from "@playwright/test";

test("Usuário pode pesquisar uma rádio", async ({ page }) => {
  await page.goto("/");

  await page.getByPlaceholder("Search here").fill("BBC");

  const searchResult = page.locator("ul li");

  await expect(searchResult.first()).toBeVisible(); 

  const count = await searchResult.count();
  expect(count).toBeGreaterThan(0);
});
