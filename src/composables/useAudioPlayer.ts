export function useAudioPlayer() {
  const audio = new Audio();

  const play = (url: string) => {
    if (!url) return;

    audio.src = url;
    audio.load();
    audio.play();
  };

  const pause = () => {
    audio.pause();
    audio.src = "";
  };

  return { play, pause };
}
