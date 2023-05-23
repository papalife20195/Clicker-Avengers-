const music = () => {

// фоновая музыка

const audio = document.createElement("audio");
audio.src = "/src/assets/music/Thanos_theme.mp3";
audio.autoplay = true;
audio.loop = true;
document.body.appendChild(audio);

// кнопка выключения музыки

const toggleButton = document.createElement("button");
toggleButton.classList.add("toggleButton");
const image = document.createElement("img");

image.src = "/src/assets/image/Off_music.png";
image.classList.add("imgAudio");
toggleButton.appendChild(image);
document.body.appendChild(toggleButton);

toggleButton.addEventListener("click", function () {
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
});

}

export default music;