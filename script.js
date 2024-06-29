const counterResult = document.getElementById("counter-result");
const decrement = document.getElementById("decrement-btn");
const increment = document.getElementById("increment-btn");
const inputControl = document.getElementById("user-input");
const reset = document.getElementById("reset-btn");

let incrementValue = 0;

increment.addEventListener("click", () => {
    incrementValue = incrementValue + parseInt(inputControl.value);
    counterResult.innerText = incrementValue;
});

decrement.addEventListener("click", () => {
    incrementValue = incrementValue - parseInt(inputControl.value);
    counterResult.innerText = incrementValue;
});

reset.addEventListener("click", () => {
    counterResult.innerText = "0";
});