const element = document.getElementById("first")

const div=document.getElementById("div")

div.addEventListener("click",(e)=>{
    element.style.backgroundColor=e.target.id;
})