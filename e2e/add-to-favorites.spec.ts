import { test, expect } from "@playwright/test";

test("Usuário pode adicionar uma rádio aos favoritos", async ({ page }) => {
  await page.goto("/");

  const searchInput = page.getByPlaceholder("Search here");
  await searchInput.fill("Jazz");

  await page.waitForResponse((response) => 
    response.url().includes("api") && response.status() === 200
  );

  const firstRadio = page.getByRole("button", { name: "➕" }).first();
  await firstRadio.click();

  const favoriteRadioSection = page.locator("section:has-text('Favorite Radios')");
  const favoriteRadio = favoriteRadioSection.locator("ul li");

  await expect(favoriteRadio).toHaveCount(1);
});

