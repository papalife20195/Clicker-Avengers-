const btn = (gameState, clickCounter) => {
  const upgradePurple = document.getElementById("Purple");
  upgradePurple.addEventListener("click", function () {
      if (gameState.count >= 10) {
          gameState.upgrade += 1;
      gameState.count -= 10;
      clickCounter.innerText = gameState.count;
    }
  });

  const upgradeBlue = document.getElementById("Blue");
  upgradeBlue.addEventListener("click", function () {
    if (gameState.count >= 200) {
      gameState.upgrade += 10;
      gameState.count -= 200;
      clickCounter.innerText = gameState.count;
    }
  });

  const upgradeRed = document.getElementById("Red");
  upgradeRed.addEventListener("click", function () {
    if (gameState.count >= 500) {
      gameState.upgrade += 50;
      gameState.count -= 500;
      clickCounter.innerText = gameState.count;
    }
  });
  const upgradeYellow = document.getElementById("Yellow");
  upgradeYellow.addEventListener("click", function () {
    if (gameState.count >= 1000) {
      gameState.upgrade += 100;
      gameState.count -= 1000;
      clickCounter.innerText = gameState.count;
    }
  });
  const upgradeGreen = document.getElementById("Green");
  upgradeGreen.addEventListener("click", function () {
    if (gameState.count >= 2000) {
      gameState.upgrade += 300;
      gameState.count -= 2000;
      clickCounter.innerText = gameState.count;
    }
  });
  const upgradeOrange = document.getElementById("Orange");
  upgradeOrange.addEventListener("click", function () {
    if (gameState.count >= 5000) {
      gameState.upgrade += 600;
      gameState.count -= 5000;
      clickCounter.innerText = gameState.count;
    }
});
}

export default btn;
