const button_stones = (gameState) => {
  const buttonLabels = ["Purple", "Blue", "Red", "Yellow", "Green", "Orange"];

  function createButton(label, imagePath,index) {
    const button = document.createElement("input");
    button.type = "image";
    button.src = imagePath;
    button.id = label;
    button.addEventListener("mousedown", function () {
      button.style.transform = "scale(0.9)";
    });
    button.addEventListener("mouseup", function () {
      button.style.transform = "scale(1)";
    });
    button.addEventListener("click", function () {
      // Действия при нажатии на кнопку
      gameState.update +=label.number
      console.log("Button clicked:", label);
    });

    const caption = document.createElement("div");
    button.appendChild(caption);

    return button;
  }

  const buttonsContainer = document.createElement("div");
  buttonsContainer.classList.add("buttons-container");

  const buttonImages = [
    "/src/assets/image/Purple_stone.png",
    "/src/assets/image/Blue_stone.png",
    "/src/assets/image/Red_stone.png",
    "/src/assets/image/Yellow_stone.png",
    "/src/assets/image/Green_stone.png",
    "/src/assets/image/Orange_stone.png",
  ];

  buttonLabels.forEach(function (label, index) {
    const button = createButton(label, buttonImages[index]);
    buttonsContainer.appendChild(button);
  });

  document.body.appendChild(buttonsContainer);
};
export default button_stones;
