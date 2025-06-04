let randombtn = document.querySelector('.random-btn');
let applybtn = document.querySelector('.apply-btn');
let colorInput = document.querySelector('#colorInput');
let color = document.querySelector('.color');
let container = document.querySelector('.container');
const colorChanger = (color) => {
    container.style.backgroundColor = color;
}
const rondombtnclick = () => {
    console.log("Random button clicked");
}
const applybtnclick = () => {
    const color = colorInput.value;
    colorChanger(color);
}

randombtn.addEventListener('click', rondombtnclick);
applybtn.addEventListener('click', applybtnclick);
