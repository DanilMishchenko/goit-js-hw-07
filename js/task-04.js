const counter = {
    value: 0,
    decrement() {
        this.value -= 1;
    },
    increment() {
        this.value += 1;
    },
};

const decrementBtn = document.querySelector(`#counter button[data-action="decrement"]`);
const incrementBtn = document.querySelector(`#counter button[data-action="increment"]`);
const valueEl = document.querySelector(`#value`);

decrementBtn.addEventListener(`click`, function () {
    counter.decrement();
    valueEl.textContent = counter.value;
});
incrementBtn.addEventListener(`click`, function () {
    counter.increment();
    valueEl.textContent = counter.value;
});