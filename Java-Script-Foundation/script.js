/**
 * Password Comparing Code
 */

let password = document.getElementById("password");
let confirm = document.getElementById("conf-password");
let compare = document.getElementById("compare");

compare.addEventListener("click", () =>{
    let val1 = String(password.value);
    let val2 = String(confirm.value);
    if(val1 != val2){
        console.log("Password not Matched");
    }else{
        console.log("Password Matched");
    }
})

/**
 * Calculator
 */

let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");
let operator = document.getElementById("operator");
let Calculate = document.getElementById("Calculate");

Calculate.addEventListener("click",()=>{
    switch (operator.value) {
        case "*":
            // let val1 = num1.value;
            // let val2 = num2.value;
            document.getElementById("res").innerText = num1.value*num2.value;
            break;
        case "/":
            // let val1 = num1.value;
            // let val2 = num2.value;
            document.getElementById("res").innerText = num1.value/num2.value;
            break;
        case "-":
            // let val1 = num1.value;
            // let val2 = num2.value;
            document.getElementById("res").innerText = num1.value-num2.value;
            break;
        case "+":
            let val1 = Number(num1.value);
            let val2 = Number(num2.value);
            document.getElementById("res").innerText = val1+val2;
            break;
        default:
            console.log("Invalid Operator");
    }
});

/**
 * Color Mixer
 */

let color1 = document.getElementById("color1");
let color2 = document.getElementById("color2");
let mix = document.getElementById("mix");

mix.addEventListener("click",() => {
    let val1 = color1.value;
    let val2 = color2.value;
    switch (val1+val2) {
        case ("redblue"):
            document.getElementById("print-color").innerText = "purple";
            break;
        
        case ("redyellow"):
            document.getElementById("print-color").innerText = "orange";
            break;

        case ("blueyellow"):
            document.getElementById("print-color").innerText = "green";
            break;
        
        case ("bluered"):
            document.getElementById("print-color").innerText = "purple";
            break;
        
        case ("yellowred"):
            document.getElementById("print-color").innerText = "orange";
            break;

        case ("yellowblue"):
            document.getElementById("print-color").innerText = "green";
            break;
        default:
            document.getElementById("print-color").innerText = "Invalid Color Combination";
            break;
    }
});

/**
 * Highest Marks
 */

let Marks1 = document.getElementById("marks-1");
let Marks2 = document.getElementById("marks-2");
let Marks3 = document.getElementById("marks-3");
let Marks4 = document.getElementById("marks-4");
let Marks5 = document.getElementById("marks-5");
let submitmarks = document.getElementById("marks-submit");
let numbers = [Marks1.value,Marks2.value,Marks3.value,Marks4.value,Marks5.value];
numbers.sort();
submitmarks.addEventListener("click", ()=>{
    document.getElementById("high-marks").innerText = numbers[4];
})

/**
 * Captalize Name
 */

let input = document.getElementById("cap-name");
let button = document.getElementById("five");
button.addEventListener("click",()=>{
    if(input.value.charCodeAt(0) >= 97 && input.value.charCodeAt(0) <=122){
        let cap = input.value[0].toUpperCase();
        document.getElementById("cap-name").value = cap+""+input.value.slice(1,100);
    }
});

/**
 * Vowel Counter
 */

let input2 = document.getElementById("vowel");
let submit = document.getElementById("submit");

submit.addEventListener("click",() => {
    let count = 0;
    for (let i = 0; i < input2.value.length; i++) {
        let word = input2.value[i];
        if(word == "a" || word == "e" || word=="i" || word == "o" || word == "u"){
            count++;
        }
    }
    document.getElementById("vowel-output").innerText = count;
})

/**
 * Remove Duplicates
 */
