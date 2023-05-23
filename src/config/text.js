const text = () => {

// Блок с текстом
const signCounter = document.createElement("div");
signCounter.classList.add("sign");
signCounter.innerText = "WORLDS ANNIHILATED";
const parentElement = document.querySelector("body");
const firstChild = parentElement.firstChild;
parentElement.insertBefore(signCounter, firstChild);

};
export default text;