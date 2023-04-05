/**
 * Type Conversion
 */

let convnum = document.getElementById("convnum");
let subnum = document.getElementById("subnum");

function convertToNumber(num) {
  try {
    let temp = 0;
    for (let index = 0; index < num.length; index++) {
      const element = Number(num[index]);
      temp += element;
      temp = temp * 10;
    }
    if (isNaN(temp)) {
      throw Error;
    }
    document.getElementById("strtonum").innerText = temp * 0.1;
  } catch (e) {
    document.getElementById("strtonum").innerText = "Invalid Number";
  }
}

subnum.addEventListener("click", () => {
  convertToNumber(convnum.value);
});

/**
 * Robust Function
 */

let prname = document.getElementById("name");
let prage = document.getElementById("age");
let subperson = document.getElementById("subperson");

function getPerson(person) {
  try {
    if (!person.age || !person.name) {
      throw Error;
    }
    document.getElementById("personout").innerText =
      "Name:" + " " + person.name + ", Age: " + person.age;
  } catch (e) {
    document.getElementById("personout").innerText = "Invalid Parameter";
  }
}

subperson.addEventListener("click", () => {
  getPerson({ name: prname.value, age: prage.value });
});

/**
 * Car Description Class
 */

class myCar {
  company;
  model;
  year;
  constructor() {
    this.company = "Skoda";
    this.model = "Rapid";
    this.year = 2022;
  }
  getDescription() {
    return "This is a " + this.year + " " + this.model + " " + this.company;
  }
}
let getCar = document.getElementById("getCar");
getCar.addEventListener("click", () => {
  const mycar = new myCar();
  document.getElementById("cardes").innerText = mycar.getDescription();
});

/**
 * Employee Class Challenge
 */

class Employee {
  name;
  position;
  salary = 80000;
  getSalary() {
    return this.salary;
  }
}

let getSalary = document.getElementById("getSalary");

getSalary.addEventListener("click", () => {
  const employee1 = new Employee();
  document.getElementById("empsal").innerText = employee1.getSalary();
});

/**
 * Person Class with Default Values
 */

class Person {
  name = "Unknown";
  age = 0;
  getDetails() {
    return "Name: " + this.name + ", Age: " + this.age;
  }
}
const person1 = new Person();
let getDetails = document.getElementById("getDetails");

getDetails.addEventListener("click", () => {
  person1.name = document.getElementById("pName").value;
  person1.age = document.getElementById("pAge").value;
  document.getElementById("persondetail").innerText = person1.getDetails();
});

/**
 * Six static method
 */

class Calculator {
    num1;
    num2;
    static getSum(num1,num2){
        return num1 + num2
    }
}

let getSum = document.getElementById("submitsix");

getSum.addEventListener("click",()=>{
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
    let calc = Calculator.getSum(num1,num2);
    document.getElementById("sum").innerText = calc
})

/**
 * Password Checker
 */

class User{
  username;
  password;
  get cred_conv(){
    return this.password.replace(/./g,"*");
  }

  set cred_conv(p){
    let pattern = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,100}$/gi
    if(pattern.test(p) == true){
      document.getElementById("passcheck").innerText = this.cred_conv
    }else{
      document.getElementById("passcheck").innerText = "Error: Password must contain 8 charecter Capital letter and small letter both"
    }
  }

  getPassword(pass){
    this.password = pass;
    this.cred_conv = this.password;
    this.cred_conv
  }
}

let login = document.getElementById("login");

login.addEventListener("click",() => {
  const user1 = new User();
  user1.username = document.getElementById("username").value
  let password = document.getElementById("password").value
  user1.getPassword(password)
})

/**
 * Add Method to Prototype
 */

const Student = {
  name:"",
}

Object.prototype.printDetails = function () {
  console.log(this.name);
}

let prosub = document.getElementById("prosub");

prosub.addEventListener("click", () =>{
  Student.name = document.getElementById("proname").value;
  Student.printDetails();
})

/**
 * Check the presence using closures.
 */

function numberChecker(arr) {
  const inarr = [...arr];
  function isPresent(comp){
    let falg = false;
    for (let index = 0; index < arr.length; index++) {
      const element = inarr[index];
      if (element == comp) {
        falg = true;
      }
    }
    return falg;
  }

  return isPresent;
}


let subarray = document.getElementById("subarray");

subarray.addEventListener("click", ()=>{
  let arr = document.getElementById("inparray").value.split(",");
  let comp = document.getElementById("compnum").value
  const result = numberChecker(arr);
  document.getElementById("outarray").innerText = result(comp);
});

/**
 * Filter by Category.
 */

const products = [
  {name:"Shirt", category:"Clothing"},
  {name:"Pants", category:"Clothing"},
  {name:"Hat", category:"Accessories"},
  {name:"Sunglasses", category:"Accessories"},
];

function product(prodarray) {

  function filterProduct(cat){
    return [...prodarray.filter(el => el.category == cat)];
  }
  return filterProduct;
}

let category = document.getElementById("prodcat").value;
let prodsub = document.getElementById("prodsub");

prodsub.addEventListener("click", ()=>{
  let filterProd = product(products)(category);
  console.log(...filterProd);
})