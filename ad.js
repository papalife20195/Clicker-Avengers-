const buttonsContainer = document.createElement('div');
buttonsContainer.classList.add('buttons-container');

// массив данных для кнопок
const buttonData = [
  {
    src: 'https://www.pngarts.com/files/2/Star-Ruby-Stone-Free-PNG-Image.png',
    caption: 'Фиолетовый камень'
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
button1.type = 'image';
button1.src = 'https://www.pngarts.com/files/2/Star-Ruby-Stone-Free-PNG-Image.png';

// Создаем элемент span для подписи
const caption1 = document.createElement('div');
caption1.innerText = 'Фиолетовый камень';
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

// Создаем элемент span для подписи
const caption2 = document.createElement('div');
caption2.innerText = 'Синий камень';
button2.appendChild(caption2);
buttonsContainer.appendChild(button2);

// крансный
const button3 = document.createElement('input');
button3.type = 'image';
button3.src = 'https://www.pngarts.com/files/2/Star-Ruby-Stone-PNG-Download-Image.png';


// Создаем элемент span для подписи
const caption3 = document.createElement('div');
caption3.innerText = 'Красный камень';
button3.appendChild(caption3);
buttonsContainer.appendChild(button3);

// желтый
const button4 = document.createElement('input');
button4.type = 'image';
button4.src = 'https://www.pngarts.com/files/2/Topaz-Stone-PNG-Photo.png';

// Создаем элемент span для подписи
const caption4 = document.createElement('div');
caption4.innerText = 'Желтый камень';
button4.appendChild(caption4);
buttonsContainer.appendChild(button4);

// зеленый
const button5 = document.createElement('input');
button5.type = 'image';
button5.src = 'https://www.pngarts.com/files/2/Peridot-Stone-PNG-Free-Download.png';

// Создаем элемент span для подписи
const caption5 = document.createElement('div');
caption5.innerText = 'Зеленый камень';
button5.appendChild(caption5);
buttonsContainer.appendChild(button5);

// оранжевый
const button6 = document.createElement('input');
button6.type = 'image';
button6.src = 'https://www.pngarts.com/files/2/Yellow-Topaz-Free-PNG-Image.png';


// Создаем элемент span для подписи
const caption6 = document.createElement('div');
caption6.innerText = 'Оранжевый камень';
button6.appendChild(caption6);
buttonsContainer.appendChild(button6);



document.body.appendChild(buttonsContainer);