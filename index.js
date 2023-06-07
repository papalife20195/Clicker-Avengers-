// Приветствие
// const greeting = [
//   'Добрый день, пользователь',
//   'Здравствуйте, пользователь',
//   'Привет, пользователь'
// ]
// const randomGr = Math.floor(Math.random()*3);
// alert(greeting[randomGr]);
const gameState = {
    count:0,
    upgrade: 1,
}

 

import button_stones from "./src/config/button_stones.js";
import background from "./src/config/background.js";
import handleBtnClicker from "./src/game/btn_click.js";
import music from "./src/config/music.js";
import text from "./src/config/text.js";
import btn from "./src/game/btn_click_upgrade.js"
import button_arm from "./src/config/button_arm.js"


button_stones(gameState);
music();
background();
handleBtnClicker(gameState);
text();
button_arm()
btn(gameState,clickCounter);




 