const div= document.getElementById("div");
const result= document.querySelector("h3");
const value1= document.getElementById("input1");
const value2= document.getElementById("input2");

div.addEventListener("click",(event)=>{
    const a=Number(value1.value);
    const b=Number(value2.value);
    event.preventDefault();
    if(event.target.id=="add"){
        result.textContent=`The Result is:${a+b}`;
    }
    else if(event.target.id=="sub"){
        result.textContent=`The Result is:${a-b}`;
    }
    else if(event.target.id=="mul"){
        result.textContent=`The Result is:${a*b}`;
    }
    else if(event.target.id=="divv"){
        result.textContent=`The Result is:${a/b}`;
    }
})