// Приветствие
// const greeting = [
//   'Добрый день, пользователь',
//   'Здравствуйте, пользователь',
//   'Привет, пользователь'
// ]
// const randomGr = Math.floor(Math.random()*3);
// alert(greeting[randomGr]);

// фон
// document.body.style.backgroundImage = "";

const audio = document.createElement('audio');
audio.src = '/music/Thanos_theme.mp3';
audio.autoplay = true;
audio.loop = true;
document.body.appendChild(audio);

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
    image.alt = 'Выключить музыку';
  } else {
    audio.pause();
    image.alt = 'Включить музыку';
  }
});




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

const buttonsContainer = document.createElement('div');
buttonsContainer.classList.add('buttons-container');

// фиолетовый
const button1 = document.createElement('input');
button1.type = 'image'; //указывает, что тип кнопки картинка
button1.src = '/image/Purple_stone.png';

const caption1 = document.createElement('div');
button1.appendChild(caption1);
buttonsContainer.appendChild(button1);
button1.addEventListener('mousedown', function() {
  button1.style.transform = 'scale(0.9)'; 
});
button1.addEventListener('mouseup', function() {
  button1.style.transform = 'scale(1)'; 
});

// синий
const button2 = document.createElement('input');
button2.type = 'image';
button2.src = '/image/Blue_stone.png';

const caption2 = document.createElement('div');
button2.appendChild(caption2);
buttonsContainer.appendChild(button2);
button2.addEventListener('mousedown', function() {
  button2.style.transform = 'scale(0.9)'; 
});
button2.addEventListener('mouseup', function() {
  button2.style.transform = 'scale(1)'; 
});

// крансный
const button3 = document.createElement('input');
button3.type = 'image';
button3.src = '/image/Red_stone.png';

const caption3 = document.createElement('div');
button3.appendChild(caption3);
buttonsContainer.appendChild(button3);
button3.addEventListener('mousedown', function() {
  button3.style.transform = 'scale(0.9)'; 
});
button3.addEventListener('mouseup', function() {
  button3.style.transform = 'scale(1)'; 
});

// желтый
const button4 = document.createElement('input');
button4.type = 'image';
button4.src = '/image/Yellow_stone.png';

const caption4 = document.createElement('div');
button4.appendChild(caption4);
buttonsContainer.appendChild(button4);
button4.addEventListener('mousedown', function() {
  button4.style.transform = 'scale(0.9)'; 
});
button4.addEventListener('mouseup', function() {
  button4.style.transform = 'scale(1)'; 
});

// зеленый
const button5 = document.createElement('input');
button5.type = 'image';
button5.src = '/image/Green_stone.png';

const caption5 = document.createElement('div');
button5.appendChild(caption5);
buttonsContainer.appendChild(button5);
button5.style.width = 'auto';
button5.addEventListener('mousedown', function() {
  button5.style.transform = 'scale(0.9)'; 
});
button5.addEventListener('mouseup', function() {
  button5.style.transform = 'scale(1)'; 
});

// оранжевый
const button6 = document.createElement('input');
button6.type = 'image';
button6.src = '/image/Orange_stone.png';


const caption6 = document.createElement('div');
button6.appendChild(caption6);
buttonsContainer.appendChild(button6);
button6.addEventListener('mousedown', function() {
  button6.style.transform = 'scale(0.9)'; 
});
button6.addEventListener('mouseup', function() {
  button6.style.transform = 'scale(1)'; 
});

document.body.appendChild(buttonsContainer);

// function createStone({img, handler}) {
//   // оранжевый
// const button6 = document.createElement('input');
// button6.type = 'image';
// button6.src = 'https://www.pngarts.com/files/2/Yellow-Topaz-Free-PNG-Image.png';


//   const caption6 = document.createElement('div');
//   button6.appendChild(caption6);
//   buttonsContainer.appendChild(button6);
//   button6.style.height = 'auto';
//   button6.style.transition = 'transform 0.2s'; 
//   button6.addEventListener('mousedown', function() {
//     button6.style.transform = 'scale(0.9)'; 
//   });
//   button6.addEventListener('mouseup', function() {
//     button6.style.transform = 'scale(1)'; 
//   });
//   button6.addEventListener('click', handler)
// }














