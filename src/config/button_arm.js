const button_arm = () => {
    const buttonLabelsArm = ["x2", "x5", "x10", "x15", "x20"];
  
    function createButtonArm(label, imagePath) {
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
  
    const buttonsContainerArm = document.createElement("div");
    buttonsContainerArm.classList.add("buttons-container-arm");
  
    const buttonImagesArm = [
      "/src/assets/image/x2.png",
      "/src/assets/image/x5.png",
      "/src/assets/image/x10.png",
      "/src/assets/image/x15.png",
      "/src/assets/image/x20.png",
    ];
  
    buttonLabelsArm.forEach(function (label, index) {
      const button2 = createButtonArm(label, buttonImagesArm[index]);
      buttonsContainerArm.appendChild(button2);
    });
  
    document.body.appendChild(buttonsContainerArm);
  };
  export default button_arm