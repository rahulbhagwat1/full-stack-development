const h1 = document.querySelector("h1");
const div = document.getElementById("div");
let count = 0;
div.addEventListener("click",(e)=>{
    if(e.target.id=="btn1"){
        count++;
    }
    else if(e.target.id=="btn2"){
        if(count==0)
          return
        else{
            count--;
        }
    }
    h1.textContent=`the count : ${count}`;
})

