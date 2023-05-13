const block = document.createElement('div');
block.classList.add('my-block', 'red');
const parent1 = document.querySelector('body');
parent.appendChild(block);

const clikButton = document.createElement('button');
clikButton.innerText = 'Щелк';

clikButton.addEventListener('click', function() {
    alert('Вы нажали на кнопку!');
  });

const parent = document.querySelector('.my-block');
parent.appendChild(clikButton);

