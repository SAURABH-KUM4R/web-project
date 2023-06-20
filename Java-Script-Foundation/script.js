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
        }else if(word == "A" || word == "E" || word=="I" || word == "O" || word == "U"){
            count++;
        }
    }
    document.getElementById("vowel-output").innerText = count;
})

/**
 * Remove Duplicates
 */

let cart = document.getElementById("Cart").value.split(" ");
let cartsubmit = document.getElementById("cart");
let show = document.getElementById("show-cart");
let cartitem = new Set();
cartsubmit.addEventListener("click",() => {
    for (let index = 0; index < cart.length; index++) {
        const element = cart[index];
        cartitem.add(element);
    }
})

show.addEventListener("click", () => {
    document.getElementById("get-cart").innerText = new Array(...cartitem).join(' ');
})

/**
 * Star Pattern
 */

let num = document.getElementById("astrisk");
let submitstar = document.getElementById("submit-star");
let string = "";
submitstar.addEventListener("click",() => {
    let astrisk = num.value;
    for (let i = astrisk; i >=1; i--) {
        for(let j=0;j<i;j++){
            string += "*"
        }
        string += "\n";
    }
    document.getElementById("output-star").innerText = string;
})

/**
 * Divisiblity Check
 */

let divinp = document.getElementById("divarr").value.split(" ");
let divout = [];
let divsub = document.getElementById("divcheck");
divsub.addEventListener("click",() => {
    for (let index = 0; index < divinp.length; index++) {
        const element = divinp[index];
        if(element%3==0 && element%2!=0){
            divout.push(element);
        }
    }
    document.getElementById("divout").innerText = divout
});

/**
 * Correct a Bug
 */

let quant = document.getElementById("quantity").value.split(" ");
let subquant = document.getElementById("subquant");

subquant.addEventListener("click",() => {
    for (let index = 0; index < quant.length; index++) {
        const element = quant[index];
        let num  = element*2;
        quant[index] = num;
    }
    document.getElementById("ten").innerText = quant;
})

/**
 * Unit Converter
 */

let temp = Number(document.getElementById("temp").value);
let subtemp = document.getElementById("subtemp");

subtemp.addEventListener("click",() => {
    let out = temp*1.8+32;
    document.getElementById("tempout").innerText = out;
})

/**
 * Calculate Rental Cost
 */

let cartype = document.getElementById("eco").value;
let days = document.getElementById("carday").value;
let carcost = document.getElementById("carsub");

carcost.addEventListener("click",() =>{
    let out = 0;
    if (cartype == "Economy") {
        out = days*4000
    } else if (cartype == "Midsize") {
        out = days*10000
    }else{
        out = days*20000
    }
    document.getElementById("carout").innerText = out;
})

/**
 * Bill Splitter
 */

let dishcost = document.getElementById("dishcost").value.split(' ');
let numpeople = document.getElementById("numpeople").value;
let getPrice = document.getElementById("getPrice");
getPrice.addEventListener("click",() => {
    let price = 0;
    for (let index = 0; index < dishcost.length; index++) {
        const element = dishcost[index];
        price = price + Number(element);
    }
    let per_head = price/numpeople;
    document.getElementById("out13").innerText ="Total price: "+price+",Cost per Person: "+per_head ;
});

/**
 * Calculate the final order price
 */
cart = [{
    price : 200,
    quantity : 2
},
{
    price : 40,
    quantity : 10
},
{
    price : 40,
    quantity : 5
},
{
    price : 500,
    quantity : 1
},
{
    price : 60,
    quantity : 5
}]

let price = 0;

let getOrderPrice = document.getElementById("getOrderPrice");
getOrderPrice.addEventListener("click",()=>{
    let result = 0;
    for (let index = 0; index < cart.length; index++) {
        const element = cart[index];
        result += element.price * element.quantity;
    }
    document.getElementById("out14").innerText = result
});

/**
 * Calculate the percentage of the discount
 */

let ogPrice = document.getElementById("ogPrice").value;
let disPrice = document.getElementById("disPrice").value;
let sub15 = document.getElementById("getDiscount");

sub15.addEventListener("click",() => {
    let answer = Number((disPrice/ogPrice)*100);
    answer = 100-answer;
    document.getElementById("out15").innerText = answer.toFixed(2);
});

/**
 * Generate a random number
 */
(() => {
    let nuber = Math.floor(Math.random()*100);
    document.getElementById("out16").innerText = nuber;
})();

/**
 * Build a banking application
 */

user = {
    name: "Elon Musk",
    amount: 1000
}

let withdraw = document.getElementById("withdraw");
let deposit = document.getElementById("deposit");
let amount = document.getElementById("money").value;

withdraw.addEventListener("click",()=>{
    if (user.amount >= amount) {
        user.amount = user.amount - amount
        document.getElementById("out17").innerText = user.name+" "+user.amount;
    } else {
        document.getElementById("out17").innerText = "Insufficient Balance";
    }
});

deposit.addEventListener("click",() => {
    user.amount = user.amount + Number(amount);
    document.getElementById("out17").innerText = user.name+" "+user.amount;
});

/**
 * Change Text on Button click.
 */

let change = document.getElementById("change");

change.addEventListener("click",()=>{
    if (document.getElementById("text18").innerText == "The most affordable learning platform") {
        document.getElementById("text18").innerText = "PW Skills"
    } else if (document.getElementById("text18").innerText == "PW Skills") {
        document.getElementById("text18").innerText = "The most affordable learning platform"
    }
});

/**
 * Validate Password
 */

let mail = document.getElementById("mail").value;
let pass = document.getElementById("pass").value;
let sub19 = document.getElementById("sub19");

sub19.addEventListener("click",()=>{
    let flag = 0;
    for (let index = 0; index < mail.length; index++) {
        const element = mail[index];
        if(element=="@"){
            flag = 1;
            break;
        }
    }
    if(pass.length>=8){
        flag = 1;
    }else{
        flag = 0;
    }
    if (flag == 1) {
        document.getElementById("out19").style.color = "green";
        document.getElementById("out19").innerText = "Valid Email and Password";
    } else {
        document.getElementById("out19").style.color = "red";
        document.getElementById("out19").innerText = "Invalid Email or Password";
    }
    // console.log(mail.includes("@"));
});

/**
 * Dynamically Adding List Items to an Ordered List
 */
let ulist = document.getElementById("list");
let getList = document.getElementById("getList");
let list_array = ["Item1","Item2","Item3","Item4","Item5","Item6","Item7","Item8","Item9"];
let index = 0;

function addItem() {
    if (index < list_array.length) {
    let element = list_array[index];
    let list = document.createElement("li")
    list.textContent = element
    ulist.appendChild(list)
    index++;
    }else{
        alert("End");
    }
};

getList.addEventListener("click",()=>{
    addItem();
});

/**
 * TODO App
 */
let button21 = document.getElementById("sub21");

button21.addEventListener("click", () => {
    let task = document.getElementById("task21").value;
    document.getElementById("out21").innerText += task+"\n";
    document.getElementById("task21").value = "";
});

/**
 * Scroll Indicator
 */

window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}

/**
 * Change the color on click
 */

let changeBGC = document.getElementById("changebgc");
let hexCODE = [1,2,3,4,5,6,7,8,9,0,'a','b','c','d','e','f'];
changeBGC.addEventListener("click", () => {
    let hex_color = "#"
    for (let index = 0; index < 6; index++) {
        hex_color += hexCODE[changecolor()];        
    }
    document.body.style.backgroundColor = hex_color;
});
function changecolor() {
    return Math.floor(Math.random() * hexCODE.length);
}

// let genetare_color = () => {
//     let changecolor = Math.floor(Math.random() * hexCODE.length)
//     let hex_color = "#"
//     for (let index = 0; index < 6; index++) {
//         hex_color += hexCODE[changecolor];        
//     }
//     document.body.style.backgroundColor = hex_color;
// }
// setInterval(() => {
//     genetare_color();

// },2000);

/**
 * Text Highlighting
 */

let paragraph = document.getElementById("textHigh");

    let words = paragraph.innerText.split(" ");

    for (let index = 0; index < words.length; index++) {
        const word = words[index];
        if (word.length > 8) {
            let span = '<span style="color: yellow;">' + word + '</span>';
            paragraph.innerHTML = paragraph.innerHTML.replace(word, span);
        }
    }

/**
 * Move the Image
 */

function getKeyAndMove(e) {
    var key_code = e.which || e.keyCode;
    switch (key_code) {
        case 37: //left arrow key
            moveLeft();
            break;
        case 38: //Up arrow key
            moveUp();
            break;
        case 39: //right arrow key
            moveRight();
            break;
        case 40: //down arrow key
            moveDown();
            break;
    }
}
function moveLeft() {
    objImage.style.left = parseInt(objImage.style.left) - 5 + "px";
}
function moveUp() {
    objImage.style.top = parseInt(objImage.style.top) - 5 + "px";
}
function moveRight() {
    objImage.style.left = parseInt(objImage.style.left) + 5 + "px";
}
function moveDown() {
    objImage.style.top = parseInt(objImage.style.top) + 5 + "px";
}