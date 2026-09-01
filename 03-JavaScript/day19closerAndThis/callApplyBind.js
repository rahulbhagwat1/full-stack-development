// user1={
//     name:"rahul",
//     marks:80
// }

// user2={
//     name:"mohul",
//     marks:90
// }


// function inc(){
//     this.marks++;
//     console.log(this);
// }

// inc.call(user1);

"use strict"

let user1={
    name:"rahul",
    marks:80,
    amount:100
}

const user2={
    name:"mohul",
    marks:90,
    amount:100
}


function change(gun,paisa){
    this.marks=gun;
    this.amount+=paisa;
    console.log(this);
}


// call
// change.call(user1,95,500000); 

//apply
// change.apply(user1,[95,500000]);


//bind
const ref=  change.bind(user1,95,500000);
ref();

