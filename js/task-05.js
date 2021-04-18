const inpurName = document.querySelector('#name-input');
const outputName = document.querySelector('#name-output');

inpurName.addEventListener('input', onInputChange)

function onInputChange(event) {
    console.log(event.currentTarget.value)
    if (inpurName.value !== '') {
        outputName.textContent = event.currentTarget.value;
    }
    else outputName.textContent = 'незнакомец';
}