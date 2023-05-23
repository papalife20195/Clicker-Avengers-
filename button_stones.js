const button_stones = () => {
  const buttonLabels = ["Purple", "Blue", "Red", "Yellow", "Green", "Orange"];

  function createButton(label, imagePath) {
    const button = document.createElement("input");
    button.type = "image";
    button.src = imagePath;
    button.addEventListener("mousedown", function () {
      button.style.transform = "scale(0.9)";
    });
    button.addEventListener("mouseup", function () {
      button.style.transform = "scale(1)";
    });
    button.addEventListener("click", function () {
      // Действия при нажатии на кнопку
      console.log("Button clicked:", label);
    });

    const caption = document.createElement("div");
    button.appendChild(caption);

    return button;
  }

  

  const buttonsContainer = document.createElement("div");
  buttonsContainer.classList.add("buttons-container");

  const buttonImages = [
    "/image/Purple_stone.png",
    "/image/Blue_stone.png",
    "/image/Red_stone.png",
    "/image/Yellow_stone.png",
    "/image/Green_stone.png",
    "/image/Orange_stone.png",
  ];

  buttonLabels.forEach(function (label, index) {
    const button = createButton(label, buttonImages[index]);
    buttonsContainer.appendChild(button);
  });

  document.body.appendChild(buttonsContainer);
  console.log("fjhifdj");
};
export default button_stones;
