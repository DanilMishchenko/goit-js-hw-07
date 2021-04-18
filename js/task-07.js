const inputEl = document.querySelector('#font-size-control');
const spanEL = document.querySelector('#text');

inputEl.addEventListener('input', onInputRange);

function onInputRange(event) {
    spanEL.style.fontSize = event.currentTarget.value + "px"
 };