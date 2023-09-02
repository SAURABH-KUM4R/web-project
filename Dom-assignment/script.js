const increment = document.getElementById("Increment");
const decrement = document.getElementById("Decrement");
const reset = document.getElementById("Reset");
const display = document.getElementById("displayValue");

function changeValue(params) {
    if (params == 1) {
        let value = Number(display.innerText);
        display.innerText = value + 1;
    }else if(params == 0) {
        const value = Number(display.innerText);
        if(value > 0){
            display.innerText = value - 1;
        }else{
            alert("Negative Value");
        }
    }else{
        display.innerText = 0;
    }
}
increment.onclick(() => {changeValue(1)})
decrement.onclick(() => {changeValue(0)})