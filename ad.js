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
