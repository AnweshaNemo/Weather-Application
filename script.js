const inputbox = document.querySelector('.input-box');
const searchbtn =document.getElementById('searchbtn');
const weather_img = document.querySelector('.weather-img');
const temperature = document.querySelector('.temperature');
const description = document.querySelector('.description');
const humidity = document.getElementById('humidity');
const wind_speed = document.getElementById('wind-speed');

 async function checkWeather(city){
    const api_key ="a3033c2add8fd5b9585064732cb3b824";
    const url = ' https//api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}' ;

    const weather_data = await  fetch('${url}').then(response => response.json());

    temperature.innerHTML = '${weather_data.main.temp'};
    console.log(weather_data);
    

searchbtn.addEventListener('click',()=>{
    checkWeather(inputbox.value);
});
