// Приветствие
// const greeting = [
//   'Добрый день, пользователь',
//   'Здравствуйте, пользователь',
//   'Привет, пользователь'
// ]
// const randomGr = Math.floor(Math.random()*3);
// alert(greeting[randomGr]);

import button_stones from "./button_stones.js";
import background from "./background.js";
import handleBtnClicker from "./btn.js";
// import music from "./music";

console.log(button_stones());
// console.log(music());
console.log(background());
console.log(handleBtnClicker());

// фоновая музыка

const audio = document.createElement("audio");
audio.src = "/music/Thanos_theme.mp3";
audio.autoplay = true;
audio.loop = true;
document.body.appendChild(audio);

// кнопка выключения музыки

const toggleButton = document.createElement("button");
toggleButton.classList.add("toggleButton");
const image = document.createElement("img");

image.src = "/image/Off_music.png";
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

// Блок с текстом
const signCounter = document.createElement("div");
signCounter.classList.add("sign");
signCounter.innerText = "WORLDS ANNIHILATED";
const parentElement = document.querySelector("body");
const firstChild = parentElement.firstChild;
parentElement.insertBefore(signCounter, firstChild);
