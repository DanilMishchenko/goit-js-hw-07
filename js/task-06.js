const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('focus', onInputFocus);
inputEl.addEventListener('blur', onInputBlur);

function onInputFocus() {
    inputEl.value.length === Number(inputEl.dataset.length) ? inputEl.classList.add('valid') : inputEl.classList.add('invalid')
};

function onInputBlur() {
    inputEl.classList.remove('valid');
    inputEl.classList.remove('invalid');
 };
