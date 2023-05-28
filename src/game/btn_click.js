import btn from "./btn_click_upgrade.js";
const handleBtnClicker = (gameState) => {
  // кнопка и Событие по нажатию, стили

  const block = document.createElement('div');
    block.classList.add('clik');
    const clik = document.querySelector('body');
    clik.appendChild(block);
    
    const clickCounter = document.createElement('span');
    clickCounter.innerText = '0';  //Первоначальное значение счетчика
    block.appendChild(clickCounter);

  const imgTan = document.createElement("div");
  imgTan.classList.add("clik");
  const clik2 = document.querySelector("body");
  clik2.appendChild(imgTan);

  const imgButton = document.createElement("img");
  imgButton.src = "/src/assets/image/Tanos.png";
  imgButton.style.width = "18%"; //высота блока, кнопка
  imgButton.style.height = "auto"; //ширина блока, кнопка
  imgButton.style.transition = "transform 0.2s";
  imgButton.addEventListener("mousedown", function () {
    imgButton.style.transform = "scale(0.9)";
  });
  imgButton.addEventListener("mouseup", function () {
    imgButton.style.transform = "scale(1)";
  });
  imgButton.addEventListener("click", function () {
    
    gameState.count = gameState.count + gameState.upgrade; // плюс один к счетчику
    
    clickCounter.innerText = gameState.count; //присваение нового значение счетчика
  });

  imgTan.appendChild(imgButton);
  btn(gameState, clickCounter);
};
export default handleBtnClicker;
