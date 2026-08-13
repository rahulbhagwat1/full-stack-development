//let arr=[235,45,3645,645,6,35463,345,3443,66,34636];

// let newarr= arr.filter((num)=>num>200);

// console.log(newarr);

let arr=[235,45,3645,645,6,35463,345,3443,66,34636];
let newarray=[324,12,31,657,234,256,4567]
 
Array.prototype.filtered = function (callback){
    const newar=[]
    for (let num of this){
        if(callback(num))
            newar.push(num);
    }
    return newar;
}

let a =newarray.filtered((num)=>num>1000);

console.log(a);
