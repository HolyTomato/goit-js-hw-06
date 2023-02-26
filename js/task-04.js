const increment = document.querySelector(`[data-action = "increment"]`);
const decrement = document.querySelector(`[data-action = "decrement"]`);
const shownValue = document.getElementById("value");

let counterValue = 0;

increment.addEventListener("click", btnIncrementHandler);
decrement.addEventListener("click", btnDecrementHandler);

function btnIncrementHandler(event) {
  counterValue += 1;
  shownValue.textContent = counterValue;
}

function btnDecrementHandler(event) {
  counterValue -= 1;
  shownValue.textContent = counterValue;
}

/*let counterValue = 0;

const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const valueRef = document.querySelector('#value')

const onClickDecBtn = (event) => {
    counterValue -= 1;
    valueRef.textContent = counterValue;
};

const onClickIncBtn = (event) => {
    counterValue += 1;
    valueRef.textContent = counterValue;
};

decrementBtn.addEventListener('click', onClickDecBtn);
incrementBtn.addEventListener('click', onClickIncBtn);
*/
