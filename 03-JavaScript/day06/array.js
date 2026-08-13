arrayy=[10,20,30.30,'rahul','akam'];
// console.log(arrayy);

// for(let i=0;i<=arrayy.length;i++){
//     console.log(arrayy[i])
// }

// arrayy.push(10);
// console.log(arrayy);

// arrayy.pop();
// console.log(arrayy);

// arrayy.unshift(20);
// console.log(arrayy);

// arrayy.shift();
// console.log(arrayy);

// console.log(typeof(arrayy));

// for(let i of arrayy){
//     console.log(i);
// }

// console.log(arrayy.splice(2,4));
// console.log(arrayy);

// arr=[10,20,30,40,50,60];

// const a = arr.splice(1,1);

// arr.splice(1,0,20)

// console.log(arr)

arr=[[1,2,3],[4,5,6,6.5],[7,8,9]];

// console.log(arr);

// for(let i=0; i<arr.length;i++){
//     console.log(arr[i]);
// }

// for(let j=0; j<arr.length;j++){
//     for(let i=0; i<arr[j].length; i++){
//         console.log(arr[j][i]);
//     }
// }

// for(let a of arr){
//     for(let b of a){
//         console.log(b); 
//     }
// }

arr1=[10,20,30,34,3112,234,21,45,45];
// arr2=[40,50,60];
// arr3=[70,80,90];

// console.log(arr1.concat(arr2));

// console.log([...arr1,...arr2,...arr3])
 let [no1,no2,...remain]=arr1;
console.log(remain);

