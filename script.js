let randombtn = document.querySelector('.random-btn');
let applybtn = document.querySelector('.apply-btn');
let colorInput = document.querySelector('#colorInput');
let color = document.querySelector('.color');
let container = document.querySelector('.container');
const colorarray = ['red', 'blue', 'green', 'yellow', 'purple', 'orange','pink', 'brown', 'cyan', 'magenta'];
const randomColor = () => {
    const randomIndex = Math.floor(Math.random() * colorarray.length);
    return colorarray[randomIndex];
}

const colorChanger = (givencolor) => {
    container.style.backgroundColor = givencolor;
    color.innerText = givencolor;
}
const rondombtnclick = () => {
    const randomColorValue = randomColor();
    colorChanger(randomColorValue);
}
const applybtnclick = () => {
    const givencolor = colorInput.value;
    colorChanger(givencolor);
}

randombtn.addEventListener('click', rondombtnclick);
applybtn.addEventListener('click', applybtnclick);
