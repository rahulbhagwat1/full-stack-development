const mainDiv = document.getElementById("mainDiv");

async function github(no) {
    mainDiv.textContent='';
    const responce = await fetch(`https://api.github.com/users?per_page=${no}`);
    const data = await responce.json();

    console.log(data);

    for (const people of data) {
        const img = people.avatar_url;
        const name = people.login;


        const div = document.createElement("div");

        const imgg = document.createElement("img");
        imgg.src = img;

        div.append(imgg);

        const namee = document.createElement("p");
        namee.textContent = name;

        div.append(namee);

        mainDiv.append(div);
    }
}

const input = document.getElementById("input");
const search = document.getElementById("search");

input.addEventListener("input",()=>{
    let no=input.value;
    github(no);
})

