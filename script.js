const color = document.querySelector("span");
const button = document.querySelector("button");




function generateColor() {
    let generatedColor = "#" + Math.floor(Math.random()*16777215).toString(16);
    console.log(generatedColor)
    color.textContent = generatedColor;
    document.body.style.background = generatedColor;
    button.style.background = generatedColor;
}

button.addEventListener('click' , generateColor)