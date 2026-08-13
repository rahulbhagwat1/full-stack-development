arr=[22,342,123,53,4123,123,543,123]
const ans = arr.reduce((acc,num)=>{
    return acc+num;
},0)

console.log(ans);