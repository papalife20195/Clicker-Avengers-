

// Приветствие
// const greeting = [
//   'Добрый день, пользователь',
//   'Здравствуйте, пользователь',
//   'Привет, пользователь'
// ]
// const randomGr = Math.floor(Math.random()*3);
// alert(greeting[randomGr]);

// фоновая музыка

const audio = document.createElement('audio');
audio.src = '/music/Thanos_theme.mp3';
audio.autoplay = true;
audio.loop = true;
document.body.appendChild(audio);

// кнопка выключения музыки

const toggleButton = document.createElement('button');
toggleButton.classList.add('toggleButton');
const image = document.createElement('img');

image.src = '/image/Off_music.png';
image.classList.add('imgAudio')
toggleButton.appendChild(image);
document.body.appendChild(toggleButton);

toggleButton.addEventListener('click', function() {
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
});

// фон

const videoContainer = document.createElement('div');
videoContainer.classList.add('background')
const background = document.querySelector('body');


const videoElement = document.createElement('video');
videoContainer.classList.add('backgroundVideo')
const backgroundVideo = document.querySelector('body');
videoElement.src = '/image/thanosIinfinity.mp4';
videoElement.autoplay = true;
videoElement.loop = true;
videoElement.muted = true;
videoElement.style.width = '100%';
videoElement.style.height = '100%';
videoElement.style.objectFit = 'cover';
videoElement.style.opacity = '0.8';

videoContainer.appendChild(videoElement);
document.body.appendChild(videoContainer);


 
// счетчик
const block = document.createElement('div');
block.classList.add('clik');
const clik = document.querySelector('body');
clik.appendChild(block);

const clickCounter = document.createElement('span');
clickCounter.innerText = '0';  //Первоначальное значение счетчика
block.appendChild(clickCounter);

let count = 0;

// Блок с текстом
const signCounter = document.createElement('div');
signCounter.classList.add('sign');
signCounter.innerText = 'WORLDS ANNIHILATED';
const parentElement = document.querySelector('body');
const firstChild = parentElement.firstChild;
parentElement.insertBefore(signCounter, firstChild);


// кнопка и Событие по нажатию, стили
const imgButton = document.createElement('img');
imgButton.src = '/image/Tanos.png';
imgButton.style.width = '19%'; //высота блока, кнопка
imgButton.style.height = 'auto'; //ширина блока, кнопка
imgButton.style.transition = 'transform 0.2s'; 
imgButton.addEventListener('mousedown', function() {
  imgButton.style.transform = 'scale(0.9)'; 
});
imgButton.addEventListener('mouseup', function() {
  imgButton.style.transform = 'scale(1)'; 
});
imgButton.addEventListener('click', function() {
  count++; // плюс один к счетчику
  clickCounter.innerText = count; //присваение нового значение счетчика
});

block.appendChild(imgButton);

const clickCountere = document.createElement('span');

block.appendChild(clickCountere);



// function createStone({img, handler}) {

// }













