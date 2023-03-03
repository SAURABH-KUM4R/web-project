const increment = document.getElementById("Increment");
const decrement = document.getElementById("Decrement");
const reset = document.getElementById("Reset");
const display = document.getElementById("displayValue");

decrement.addEventListener("click", () => {
    const value = Number(display.innerText);
    if(value > 0){
        display.innerText = value - 1;
    }else{
        alert("Negative Value");
    }
});

increment.addEventListener("click", () => {
    let value = Number(display.innerText);
    display.innerText = value + 1;
});

reset.addEventListener("click",() => {
    display.innerText = 0;
})