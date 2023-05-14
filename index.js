document.body.style.backgroundImage = "url('https://catherineasquithgallery.com/uploads/posts/2021-02/1613542301_52-p-fon-dlya-prezentatsii-powerpoint-minimaliz-68.jpg')";
 

// Создаем блок и добавляем в него счетчик
const block = document.createElement('div');
block.classList.add('clik');
const clik = document.querySelector('body');
clik.appendChild(block);

const clickCounter = document.createElement('span');
clickCounter.innerText = '0';
block.appendChild(clickCounter);

// Блок с текстом
const signCounter = document.createElement('div');
signCounter.classList.add('sign');
signCounter.innerText = 'WORLDS ANNIHILATED';
const parentElement = document.querySelector('body');
const firstChild = parentElement.firstChild;
parentElement.insertBefore(signCounter, firstChild);

let count = 0;

// создание кнопки и Событие по нажатию, стили
const imgButton = document.createElement('img');
imgButton.src = 'https://www.pngarts.com/files/4/Thanos-PNG-Image-Background.png';
imgButton.style.width = '15%';
imgButton.style.height = 'auto';
imgButton.style.transition = 'transform 0.2s'; 
imgButton.addEventListener('mousedown', function() {
  imgButton.style.transform = 'scale(0.9)'; 
});
imgButton.addEventListener('mouseup', function() {
  imgButton.style.transform = 'scale(1)'; 
});
imgButton.addEventListener('click', function() {
  count++;
  clickCounter.innerText = count;
});

block.appendChild(imgButton);

const clickCountere = document.createElement('span');

block.appendChild(clickCountere);

const buttonsContainer = document.createElement('div');
buttonsContainer.classList.add('buttons-container');

// фиолетовый
const button1 = document.createElement('input');
button1.type = 'image';
button1.src = 'https://www.pngarts.com/files/2/Star-Ruby-Stone-Free-PNG-Image.png';

const caption1 = document.createElement('div');
button1.appendChild(caption1);
buttonsContainer.appendChild(button1);

button1.style.height = 'auto';
button1.style.transition = 'transform 0.2s'; 
button1.addEventListener('mousedown', function() {
  button1.style.transform = 'scale(0.9)'; 
});
button1.addEventListener('mouseup', function() {
  button1.style.transform = 'scale(1)'; 
});

// синий
const button2 = document.createElement('input');
button2.type = 'image';
button2.src = 'https://www.pngarts.com/files/2/Topaz-Stone-PNG-Image.png';

const caption2 = document.createElement('div');
button2.appendChild(caption2);
buttonsContainer.appendChild(button2);
button2.style.height = 'auto';
button2.style.transition = 'transform 0.2s'; 
button2.addEventListener('mousedown', function() {
  button2.style.transform = 'scale(0.9)'; 
});
button2.addEventListener('mouseup', function() {
  button2.style.transform = 'scale(1)'; 
});

// крансный
const button3 = document.createElement('input');
button3.type = 'image';
button3.src = 'https://www.pngarts.com/files/2/Star-Ruby-Stone-PNG-Download-Image.png';

const caption3 = document.createElement('div');
button3.appendChild(caption3);
buttonsContainer.appendChild(button3);
button3.style.height = 'auto';
button3.style.transition = 'transform 0.2s'; 
button3.addEventListener('mousedown', function() {
  button3.style.transform = 'scale(0.9)'; 
});
button3.addEventListener('mouseup', function() {
  button3.style.transform = 'scale(1)'; 
});

// желтый
const button4 = document.createElement('input');
button4.type = 'image';
button4.src = 'https://www.pngarts.com/files/2/Topaz-Stone-PNG-Photo.png';

const caption4 = document.createElement('div');
button4.appendChild(caption4);
buttonsContainer.appendChild(button4);
button4.style.height = 'auto';
button4.style.transition = 'transform 0.2s'; 
button4.addEventListener('mousedown', function() {
  button4.style.transform = 'scale(0.9)'; 
});
button4.addEventListener('mouseup', function() {
  button4.style.transform = 'scale(1)'; 
});

// зеленый
const button5 = document.createElement('input');
button5.type = 'image';
button5.src = 'https://www.pngarts.com/files/2/Peridot-Stone-PNG-Free-Download.png';

const caption5 = document.createElement('div');
button5.appendChild(caption5);
buttonsContainer.appendChild(button5);
button5.style.height = 'auto';
button5.style.transition = 'transform 0.2s'; 
button5.addEventListener('mousedown', function() {
  button5.style.transform = 'scale(0.9)'; 
});
button5.addEventListener('mouseup', function() {
  button5.style.transform = 'scale(1)'; 
});

// оранжевый
const button6 = document.createElement('input');
button6.type = 'image';
button6.src = 'https://www.pngarts.com/files/2/Yellow-Topaz-Free-PNG-Image.png';


const caption6 = document.createElement('div');
button6.appendChild(caption6);
buttonsContainer.appendChild(button6);
button6.style.height = 'auto';
button6.style.transition = 'transform 0.2s'; 
button6.addEventListener('mousedown', function() {
  button6.style.transform = 'scale(0.9)'; 
});
button6.addEventListener('mouseup', function() {
  button6.style.transform = 'scale(1)'; 
});

document.body.appendChild(buttonsContainer);










