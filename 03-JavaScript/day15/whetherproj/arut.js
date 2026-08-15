//https://api.weatherapi.com/v1/current.json?key=1104199dfe5f4caf90335841261508&q=mumbai&aqi=no

const button = document.getElementById("searchBtn");
const input = document.getElementById("cityInput");

const locationn = document.getElementById("locationnn");
const temperature = document.getElementById("temperaturee");

console.log(locationn);
console.log(temperature);

button.addEventListener("click",async()=>{
    const cityName=input.value;

    const responce  = await fetch(`http://api.weatherapi.com/v1/current.json?key=ce96731018a84e1e83044111261508&q=${cityName}&aqi=no`);
    const data = await responce.json();
    console.log(data.location.name);
    console.log(data.current.temp_c);
    locationn.textContent= data.location.name;
    temperature.textContent=data.current.temp_c+'°C';


})