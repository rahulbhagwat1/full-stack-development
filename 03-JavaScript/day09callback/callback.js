// function greet(){
//     console.log("i am rahul");
// }

// function main(callback){
//     console.log("hello");
//     callback();
//     console.log("i am very energetic today");
// }

// main(greet);

function calculator(a,b,callback){
    console.log("performing task");
    console.log("result=",callback(a,b));
}

let add = (a,b) => a+b;
let sub = (a,b) => a-b;
let mul = (a,b) => a*b;
let div = (a,b) => a/b;

calculator(12,5,(a,b)=>a%b);

