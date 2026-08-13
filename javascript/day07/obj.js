// let arr=[{name:'rahul', roll:10 },{name:'rahul', roll:10 },{name:'rahul', roll:10 },{name:'rahul', roll:10 },{name:'rahul', roll:10 },{name:'rahul', roll:10 } ];

// function display(data){
//     console.log("name=",data.name)
//     console.log("roll=",data.roll)
// }

// for ( let data of arr){
//     display(data);
// }

// let user={
//     name:'rahul',
//     roll:20
// }

// user.class='te';

// console.log(user);

// delete user.roll;

// console.log(user);

let obj={
    name:'rahul',
    mark:20,
    arr:[20,10,30,40,50],
    msg : function(){
        console.log("hello i am rahul");
    },
    address:{
        lane:"first lane",
        distric:'pune',
        pincode:412307
    }
}

// console.log(obj);

// console.log(Object.entries(obj))

// const objkey= Object.keys(obj);

// for (key of objkey){
//     console.log(key+ ":" +obj[key])
// }


// console.log(obj["name"])

// for (let value of Object.entries(obj)){
//     console.log(value)
// }

for (let [key,value]  of Object.entries(obj)){
    console.log(key,value)
}