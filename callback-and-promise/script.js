/**
 * Double Using Callback
 */
let sub1 = document.getElementById("button1");

function makeDouble(arr){
    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];
        arr[index] = element*2
    }
    return arr;
}

function takeArray(makeDouble) {
    let arr = document.getElementById("input1").value.split(" ");
    return makeDouble(arr)
}

sub1.addEventListener("click",() => {
    let result = takeArray(makeDouble);
    document.getElementById("output1").innerText =  [...result];
 });

 /**
  * String Manipulation.
  */

function logString(text) {
    document.getElementById("output2").innerText = "The manipulated string is: "+text;
}

 function manipulateString(text,logString) {
    logString(text.toUpperCase());
 }

 let sub2 = document.getElementById("button2")

 sub2.addEventListener("click",() => {
    let givenText = document.getElementById("input2").value;
    manipulateString(givenText,logString);
 })

 /**
  * Age in Days
  */

 let sub3 = document.getElementById("button3");

 const person = {
    firstName:"asdasd",
    secondName:"sfgdg",
    Age: 0
 }

function logResult(days,person){
    return "The person's full name is "+person.firstName+" "+person.secondName+" and their age in days is "+days
}

function ageInDays(person,logResult) {
    let days = person.Age * 365;
    return logResult(days,person);
}

 sub3.addEventListener("click", () =>{
    person.firstName = document.getElementById("firstname").value;
    person.secondName = document.getElementById("lastname").value;
    person.Age = document.getElementById("age").value;
    console.log(ageInDays(person,logResult));
    document.getElementById("output3").innerText = ageInDays(person,logResult)
 });

/**
 * Arrange in alphabetical order
 */

let submit = document.getElementById("book");

const objList = [
    {title:"Your Name",author:"japanese",year:2022},
    {title:"Attack on Tital",author:"Eren eager",year:2014},
    {title:"Death Note",author:"Light Yagami",year:2018}
]

function arrangeTitle(params) {
    console.log(params.sort());
}

function takeList(args,arrangeTitle) {
    let title = [];
    for (let index = 0; index < args.length; index++) {
        const element = args[index];
        title.push(element.title);
    }
    arrangeTitle(title);
}

submit.addEventListener("click", ()=> {
    takeList(objList,arrangeTitle);
});

/**
 * Greeting Promise
 */

let sub5 = document.getElementById("sub5");

function takeName(name) {
    return new Promise(function exec(resolve,reject){
        document.getElementById("output5").innerText = "Hello,"+name+"!"
    })
}

sub5.addEventListener("click",()=>{
    let name = document.getElementById("input5").value;
    let greeting = takeName(name);
})

/**
 * Fetch results asynchronously.
 */

//https://jsonplaceholder.typicode.com/todos/1

async function get_Data(){
    let response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    let result = await response.json();
    console.log(result);
}

let sub6 = document.getElementById("sub6");

sub6.addEventListener("click",()=>{
    get_Data();
});

/**
 * Multiple Requests
 */

const responseAPI = {
    todo:"",
    post:""
}

async function retrive_data() {
    let response_1 = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    let todo = await response_1.json();
    let response_2 = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    let post = await response_2.json();
    responseAPI.todo = todo
    responseAPI.post = post
    console.log(responseAPI.todo,responseAPI.post);
}

let sub7 = document.getElementById("sub7");

sub7.addEventListener("click",() => {
    retrive_data();
});

/**
* Get Data from API and Display it on the browser console.
*/

// https://jsonplaceholder.typicode.com/posts

async function get_posts() {
    let response = await fetch("https://jsonplaceholder.typicode.com/posts");
    let result = await response.json();
    return result;
}

let sub8 = document.getElementById("sub8");

sub8.addEventListener("click",() => {
    let result = get_posts();
    result.then(function(result){
        console.log(...result);
    });
})

/**
 * Error Handling
 */

async function get_response() {
    try {
        let response = await fetch("https://jsonplaceholder.typicode.com/posts/123456789");
        // let result = await response.json();
        // return result
        return response
    } catch (error) {
        return error;
    }
}

// https://jsonplaceholder.typicode.com/posts/123456789

let sub9 = document.getElementById("sub9");

sub9.addEventListener("click",() => {
    let result = get_response();
    result.then(function(result){
        document.getElementById("output9").innerText = result.status +" "+ result.statusText
    })
})