const btn = document.getElementById("btn");
const boy = document.getElementById("boy");
const girl = document.getElementById("girl");
const result = document.querySelector("h5");

btn.addEventListener("click",()=>{
    resultt= boy.value.length*boy.value.length*girl.value.length*girl.value.length;
    console.log(resultt)
    result.textContent=`The Result is:${resultt % 101}%`;
})