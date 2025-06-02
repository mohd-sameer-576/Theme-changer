let randombtn = document.querySelector('.random-btn');
let applybtn = document.querySelector('.apply-btn');
let colorInput = document.querySelector('#colorInput');
let color = document.querySelector('.color');

const rondombtnclick = () => {
    console.log("Random button clicked");
}
const applybtnclick = () => {
    console.log("apply button clicked");
}

randombtn.addEventListener('click', rondombtnclick);
applybtn.addEventListener('click', applybtnclick);