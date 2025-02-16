import { test, expect } from "@playwright/test";

test("Usuário pode ouvir uma rádio ao clicar no play", async ({ page }) => {
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

  await page.getByTestId("play-button").first().click();
  
  const playingIndicator = page.locator("span:text('🔥 Tocando agora')");
  await expect(playingIndicator).toBeVisible();
});
