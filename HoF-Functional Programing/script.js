/**
 * Reverse String
 */
let text = document.getElementById("revstring").value;
let substr = document.getElementById("str");
let arr = text.split("")
substr.addEventListener("click", () => {
    let new_string = "";
    for (let index = (arr.length-1); index>=0; index--) {
        const element = arr[index];
        new_string += element;
    }
    setTimeout(() => {
        document.getElementById("strout").innerText = new_string;
    },2000);
})

/**
 * Random Number Generator
 */

let output = document.getElementById("randnum");
let getnum = document.getElementById("getnum");
let t = 1
getnum.addEventListener("click", () =>{
    setTimeout(() => {
        output.innerText = Math.ceil(100*Math.random());
    },4000);
    for(let i=1;i<=3;i++){
        setTimeout(() =>{
            output.innerText = i;
        },i*1000);
    }
});

/**
 * Store Inventory
 */
let price = document.getElementById("price").value.split(" ");
let subprod = document.getElementById("subprod");
subprod.addEventListener("click", () =>{
    let map1 = price.map(x => x*80);
    document.getElementById("priceout").innerText = map1;
});

/**
 * Filter & Cap
 */

let books = document.getElementById("books").value.split(" ");
let author = document.getElementById("author").value.split(" ");
let publish = document.getElementById("publish").value.split(" ");
let subbook = document.getElementById("subbook");
let outarr = [];
subbook.addEventListener("click",() => {
    for (let index = 0; index < publish.length; index++) {
        const element = publish[index];
        if(element<2010){
            outarr.push(author[index].toUpperCase());
        }
    }
    document.getElementById("filtercap").innerText = outarr;
});

/**
 * URL Validator
 */

let pattern = /http:\/\/[a-zA-Z0-9.a-zA-Z]{1,1000}$/gi
let url = document.getElementById("url");
let suburl = document.getElementById("suburl");

suburl.addEventListener("click", () => {
    let res = pattern.test(url.value);
    document.getElementById("urlout").innerText = res;
});

/**
 * LinkedIn Profile URL Validator
 */
let lurl = document.getElementById("lurl");
let sublurl = document.getElementById("sublurl");
let lpattern = /https:\/\/www.linkedin.com\/in\/[a-zA-Z0-9-_]{5,30}\/$/gi;
// https://www.linkedin.com/in/saurabh-kumar-1512a4246/ 
sublurl.addEventListener("click", () => {
    let res = lpattern.test(lurl.value);
    if(res===true){
        document.getElementById("lurlout").innerText = "Valid Profile";
    }else{
        document.getElementById("lurlout").innerText = "InValid Profile";
    }
})