const buttonsContainer = document.createElement('div');
buttonsContainer.classList.add('buttons-container');

// массив данных для кнопок
const buttonData = [
  {
    src: 'https://www.pngarts.com/files/2/Star-Ruby-Stone-Free-PNG-Image.png',
    caption: 'Фиолетовый камень',
  },
  {
    src: 'https://www.pngarts.com/files/2/Topaz-Stone-PNG-Image.png',
    caption: 'Синий камень'
  },
  {
    src: 'https://www.pngarts.com/files/2/Star-Ruby-Stone-PNG-Download-Image.png',
    caption: 'Красный камень'
  },
  {
    src: 'https://www.pngarts.com/files/2/Topaz-Stone-PNG-Photo.png',
    caption: 'Желтый камень'
  },
  {
    src: 'https://www.pngarts.com/files/2/Peridot-Stone-PNG-Free-Download.png',
    caption: 'Зеленый камень'
  },
  {
    src: 'https://www.pngarts.com/files/2/Yellow-Topaz-Free-PNG-Image.png',
    caption: 'Оранжевый камень'
  }
];

// цикл, который создает кнопки и добавляет обработчики событий для каждой кнопки
for (let i = 0; i < buttonData.length; i++) {
  const button = document.createElement('input');
  button.type = 'image';
  button.src = buttonData[i].src;

  const caption = document.createElement('div');
  caption.innerText = buttonData[i].caption;
  button.appendChild(caption);

  // добавляем обработчики событий для каждой кнопки
  button.style.height = 'auto';
  button.style.transition = 'transform 0.2s'; 
  button.addEventListener('mousedown', function() {
    button.style.transform = 'scale(0.9)'; 
  });
  button.addEventListener('mouseup', function() {
    button.style.transform = 'scale(1)'; 
  });

  buttonsContainer.appendChild(button);
}

document.body.appendChild(buttonsContainer);






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