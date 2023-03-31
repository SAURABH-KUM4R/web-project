/**
 * Count Occurance
 */

let sentence = document.getElementById("inpstr");
let substr = document.getElementById("outoccur");
let arr = sentence.value.split(" ");
let comp = arr;
let result = new Map();
substr.addEventListener("click", () => {
    for (let index = 0; index < arr.length; index++) {
        let count = 0;
        const element = arr[index];
        for (let j = 0; j < comp.length; j++) {
            if (element == comp[j]) {
                count++;
            }
        }
        result.set(element,count);
    }
    document.getElementById("numoccur").innerText = [...result];
});

/**
 * Only Unique Items
 */

let numarr = document.getElementById("inparray").value.split(",");
let subnum = document.getElementById("subarray");
let outnum = new Set();
subnum.addEventListener("click", () => {
    for (let index = 0; index < numarr.length; index++) {
        const element = numarr[index];
        outnum.add(element);
    }
    document.getElementById("outarray").innerText = [...outnum];
});

/**
 * Swap the Values
 */

let varx = document.getElementById("varx");
let vary = document.getElementById("vary");
let subvar = document.getElementById("subvar");

function swap(...args) {
    let temp = args[0];
    args[0] = args[1]
    args[1] = temp
    console.log(...args);
    document.getElementById("varout").innerText = [...args]
}

subvar.addEventListener("click",() => {
    swap(varx.value,vary.value)
});

/**
 * Access Random element
 */

let random_arr = document.getElementById("inparr").value.split(",");
let subarray = document.getElementById("subarr");

function give_random_element([...args]) {
    let result = []
    result.push(args[0]);
    result.push(args[1]);
    result.push(args[args.length-1]);
    document.getElementById("arrout").innerText = result
}

subarray.addEventListener("click",() => {
    give_random_element(random_arr)
})

/**
 * Min and Max Value
 */

let arr5 = document.getElementById("5tharray").value.split(",");
let sub5 = document.getElementById("sub5tharray");

function min_max (...args) {
    let max = Math.max(...args)
    let min = Math.min(...args)
    let result = new Map()
    result.set("Max",max)
    result.set("Min",min)
    document.getElementById("out5tharray").innerText = [...result];
}

sub5.addEventListener("click", () => {
    min_max(...arr5)
})

/**
 * Nested Objects
 */

const person = {
    name:"",
    age:"",
    address: {
        street:"",
        city:"",
        state:"",
    }
}
person.address.street = document.getElementById("street").value
person.address.state = document.getElementById("state").value
person.address.city = document.getElementById("city").value
person.name = document.getElementById("inpname").value
person.age = document.getElementById("inpage").value
let subinfo = document.getElementById("subinfo");

function get_name_street(args){
    const result = {
        name:"",
        street:"",
    }

    result.name = args.name
    result.street = args.address.street
    document.getElementById("outinfo").innerText = result.name+" "+result.street;
}

subinfo.addEventListener("click", () => {
    get_name_street(person);
})