// greeting();
// function greeting(){
//     console.log("hello and i am very energetic***********")
// }

// greeting();

function add(...arr){
    let sum=0;
    for (let i of arr){
        sum += i;
    }
    return sum;
}

console.log(add(10,20,43243,23432,456,54,654,654,5654,56,44,6546));