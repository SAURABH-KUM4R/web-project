/**
 * Program-1
 */

let sub1 = document.getElementById("sub1")

sub1.addEventListener("click",()=>{
    console.log(addNumber(5,10));
    function addNumber(a,b) {
        return a+b;
    }
})

let sub2 = document.getElementById("sub2")

sub2.addEventListener("click",()=>{
    console.log(multiplyNumber(5,10));
    function multiplyNumber(a,b) {
        return a*b;
    }
})

let sub3 = document.getElementById("sub3")

sub3.addEventListener("click",()=>{
    function returnSum(a,b) {
        console.log(sum);
        let sum;
        sum = a + b;
        return sum;
    }
    console.log(returnSum(5,10));
})

let sub4 = document.getElementById("sub4")

sub4.addEventListener("click",()=>{
    {
        try {
            console.log(a);
        } catch (error) {
            console.log(error);
        }
        try {
            console.log(b);
        } catch (error) {
            console.log(error);
        }
        try {
            console.log(c);
        } catch (error) {
            console.log(error);
        }
        var c = "Your Name"
        let a = "Attack on Titan"
        const b = "Death Note"
        console.log(a);
        console.log(b);
        console.log(c);
    }
})

let sub5 = document.getElementById("sub5")

sub5.addEventListener("click",()=>{
    {
        console.log(a);
        let a = "saurabh Kumar"
        console.log(a);
    }
})
