const background = () => {
  const videoContainer = document.createElement("div");
  videoContainer.classList.add("background");
  const background = document.querySelector("body");

  const videoElement = document.createElement("video");
  videoContainer.classList.add("backgroundVideo");
  const backgroundVideo = document.querySelector("body");
  videoElement.src = "/src/assets/image/thanosIinfinity.mp4";
  videoElement.autoplay = true;
  videoElement.loop = true;
  videoElement.muted = true;
  videoElement.style.width = "100%";
  videoElement.style.height = "100%";
  videoElement.style.objectFit = "cover";
  videoElement.style.opacity = "0.8";

  videoContainer.appendChild(videoElement);
  document.body.appendChild(videoContainer);
};

export default background;
