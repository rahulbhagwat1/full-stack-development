const input = document.getElementById("input");

const word = document.getElementById("word");
const letter= document.getElementById("letter");

input.addEventListener('input',()=>{
    const text = input.value;
    console.log(text);
    const fulltext=text.trim();
    letter.textContent=`letter count : ${fulltext.length}`;

    const arr = fulltext.split(" ");

    if(fulltext=="")
        word.textContent = `WordCount: 0`
    else
        word.textContent = `WordCount: ${arr.length}`


})


