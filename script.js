let randombtn = document.querySelector('.random-btn');
let applybtn = document.querySelector('.apply-btn');
let colorInput = document.querySelector('#colorInput');
let color = document.querySelector('.color');
let container = document.querySelector('.container');
const colorChanger = (givencolor) => {
    container.style.backgroundColor = givencolor;
    color.innerText = givencolor;
}
const rondombtnclick = () => {
    console.log("Random button clicked");
}
const applybtnclick = () => {
    const givencolor = colorInput.value;
    colorChanger(givencolor);
}

randombtn.addEventListener('click', rondombtnclick);
applybtn.addEventListener('click', applybtnclick);
