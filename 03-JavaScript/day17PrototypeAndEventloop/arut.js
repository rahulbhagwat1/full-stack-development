obj1 = {
    name:'RAHUL',
    age:19,
    greet:function(){
        console.log("Worlds Best Coder");
    }
}


obj1.greet();
obj2={
    address:"pune"
};

obj2.__proto__=obj1;

console.log(obj2.name);
