import { test, expect } from "@playwright/test";

const favoriteRadios = [
  {
    stationuuid: "1234",
    name: "Rádio Teste 1",
    country: "Brasil",
    url_resolved: "http://streamer.psyradio.org:8010/;listen.mp3",
    favicon: "https://via.placeholder.com/50",
    tags: "rock,pop",
  },
  {
    stationuuid: "5678",
    name: "Rádio Teste 2",
    country: "EUA",
    url_resolved: "http://streamer.psyradio.org:8010/;listen.mp3",
    favicon: "https://via.placeholder.com/50",
    tags: "jazz,blues",
  },
];

test("Usuário pode editar uma rádio da lista de favoritos", async ({ page }) => {
  await page.goto("/");

  await page.evaluate((radios) => {
    localStorage.setItem("favoriteRadios", JSON.stringify(radios));
  }, favoriteRadios);

  await page.reload();

  const firstFavoriteRadio = page.locator("ul li").first();
  const editButton = firstFavoriteRadio.getByTestId("edit-button");
  
  await expect(editButton).toBeVisible();
  await editButton.click();

  const newName = "Nova Rádio Editada";
  const newCountry = "Portugal";

  await page.locator("input[id='name']").fill(newName);
  await page.locator("input[id='country']").fill(newCountry);

  const confirmButton = page.getByTestId("confirm-button");
  await expect(confirmButton).toBeEnabled();
  await confirmButton.click();

  const editedRadio = page.locator("ul li").first();

  await expect(editedRadio).toContainText(newName);
  await expect(editedRadio).toContainText(newCountry);
});
