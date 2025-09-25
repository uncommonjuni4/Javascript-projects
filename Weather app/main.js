// ==================Api key==================
  const apikey ="d36bfc6afa00393955c0a198a405e35c";

// ========================Api Url===============

const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";



// console.log(apiUrl + `&appid=${apikey}`);

const searchBox =document.querySelector(".search input");
const searchBtn =document.querySelector(".search button");
const weather_icon =document.querySelector(".weather-icon")

async function checkWeather(city){
    const response = await fetch(apiUrl + city +  `&appid=${apikey}`)
    const data = await response.json();

    if(response.status ==404){
        document.querySelector(".error").style.display= "Block";
        document.querySelector(".weather").style.display = "none";
    }else{
      document.querySelector('.City').innerHTML =data.name;
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp)  + "°C";
    document.querySelector('.humanity').innerHTML =data.main.humidity + "%";
    document.querySelector('.wind').innerHTML =data.wind.speed + "Km/h";

    if(data.weather[0].main == "Clouds"){
      weather_icon.src ="images/clouds.png"
    }else if(data.weather[0].main == "Clear"){
      weather_icon.src ="images/clear.png"
    }
    else if(data.weather[0].main == "Rain"){
      weather_icon.src ="images/rain.png"
    }
    else if(data.weather[0].main == "Drizzle"){
      weather_icon.src ="images/drizzle.png"
    }
    document.querySelector(".weather").style.display = "Block";
    document.querySelector(".error").style.display= "none";
    
    }

   
}

searchBtn.addEventListener("click", ()=>{
checkWeather(searchBox.value)
})





