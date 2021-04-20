const refs = {
    input: document.querySelector('#controls input'),
    buttonRender: document.querySelector('[data-action="render"]'),
    buttonDestoy: document.querySelector('[data-action="destroy"]'),
    boxes: document.querySelector('#boxes'),
};

refs.buttonRender.addEventListener('click', () => onButtonRenderClick(refs.input.value));
refs.buttonDestoy.addEventListener('click', onButtonDestroyClick);

//рандомное число
function getRandomInt() {
   return Math.floor(Math.random() * 255);
}

function onButtonRenderClick(amount) {
    let createBoxes = [];
    for (let i = 0; i < amount; i++) {
        const newBox = document.createElement('div');
        newBox.style.width = `${i * 10 + 30}px`;
        newBox.style.height = `${i * 10 + 30}px`;
        newBox.style.backgroundColor = `rgb(${getRandomInt()}, ${getRandomInt()}, ${getRandomInt()})`;
        createBoxes.push(newBox);
    };
    refs.boxes.append(...createBoxes);
};

function onButtonDestroyClick() {
    refs.boxes.innerHTML = '';
 };

































// const refs = {
//     inputNumber: document.querySelector('.js-input'),
//     renderBtn: document.querySelector('[data-action="render"]'),
//     destroyBtn: document.querySelector('[data-action="destroy"]'),
//     boxes: document.querySelector('#boxes')
// }

// const createBoxes = (amount) => {
//   refs.inputNumber.value = 0;

//   const createdBoxes = [];
//   for (let i = 0; i < amount; i += 1) {
//     createdBoxes[i] = document.createElement('div');
//     createdBoxes[i].style.backgroundColor = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
//     createdBoxes[i].style.width = `${30 + 10 * i}px`;
//     createdBoxes[i].style.height = `${30 + 10 * i}px`;
//   };
//   refs.boxes.append(...createdBoxes);
// };

// const destroyBoxes = () => {
//   refs.boxes.innerHTML = '';
// };

// refs.renderBtn.addEventListener('click', () => {
//   createBoxes(refs.inputNumber.value)
// });

// refs.destroyBtn.addEventListener('click', () => {
//   destroyBoxes()
// });