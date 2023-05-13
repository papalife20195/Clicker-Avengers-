const clikButton = document.createElement('button');
clikButton.innerText = 'Щелк';

button.addEventListener('click', function() {
    alert('Вы нажали на кнопку!');
  });

const parent = document.querySelector('#parent-element');
parent.appendChild(button);

