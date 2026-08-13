let obj ={
    name:'rahul',
    roll:10,
    age:18,
    address:'pune'
}

let {name : nrename , roll: newroll}=obj;

console.log(nrename,newroll);


let obj2={...obj};

obj.name='mohit';

console.log(obj2.name);