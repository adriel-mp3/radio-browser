import { test, expect } from "@playwright/test";

test("Usuário pode ver a lista de rádios adicionadas", async ({ page }) => {
  await page.goto("/");

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

  await page.evaluate((radios) => {
    localStorage.setItem("favoriteRadios", JSON.stringify(radios));
  }, favoriteRadios);

  await page.reload();

  const favoriteRadio = page.locator(
    "section:has-text('Favorite Radios') ul li",
  );
  await expect(favoriteRadio).toHaveCount(2);
});
