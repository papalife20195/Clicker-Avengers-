// Приветствие
// const greeting = [
//   'Добрый день, пользователь',
//   'Здравствуйте, пользователь',
//   'Привет, пользователь'
// ]
// const randomGr = Math.floor(Math.random()*3);
// alert(greeting[randomGr]);

import button_stones from "./src/config/button_stones.js";
import background from "./src/config/background.js";
import handleBtnClicker from "./src/game/btn_click.js";
import music from "./src/config/music.js";
import text from "./src/config/text.js";

button_stones();
background();
handleBtnClicker();
music();
text();