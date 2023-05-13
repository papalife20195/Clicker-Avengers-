document.body.style.backgroundImage = "url('https://catherineasquithgallery.com/uploads/posts/2021-02/1613542301_52-p-fon-dlya-prezentatsii-powerpoint-minimaliz-68.jpg')";

const block = document.createElement('div');
block.classList.add('clik', 'red');
const parent1 = document.querySelector('body');
parent1.appendChild(block);

const clickCounter = document.createElement('span');
clickCounter.innerText = '0';
block.appendChild(clickCounter);

const imgButton = document.createElement('img');
imgButton.src = 'https://www.epicgames.com/fortnite/en-US/home';
imgButton.addEventListener('click', function() {
  count++;
  clickCounter.innerText = count;
});

block.appendChild(imgButton);

let count = 0;

