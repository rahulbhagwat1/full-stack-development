const button = document.querySelector("button");

const handle=()=>{
    button.textContent="clicked";
    button.removeEventListener("click",handle)
    console.log("hello");
}

button.addEventListener("click",handle)

