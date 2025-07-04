
const apiKey ="13545e49986d0d963d3cafa5df33853f";
const apiUrl ="https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatheIcon = document.querySelector(".weather-icon");

async function checkWeather(city){
    const response = await fetch(apiUrl + city +`&appid=${apiKey}`);
    let data = await response.json();
    
    if(data.cod == "404") {
        alert("City not found");
        document.querySelector(".weather").style.display = "none";
    }

    document.querySelector(".city").innerText = data.name;
    document.querySelector(".humidity").innerText = data.main.humidity + "%";
    document.querySelector(".temp").innerText =Math.round(data.main.temp) + "°C";
    document.querySelector(".wind").innerText = data.wind.speed + " km/h";


    if(data.weather[0].main == "Haze") {
        weatheIcon.src = "images/drizzle.png";
    } else if(data.weather[0].main == "Clouds") {
        weatheIcon.src = "images/clouds.png";
    } else if(data.weather[0].main == "Rain") {
        weatheIcon.src = "images/rain.png";
    } else if(data.weather[0].main == "Clear") {
        weatheIcon.src = "images/clear.png";
    } else if(data.weather[0].main == "Snow") {
        weatheIcon.src = "images/snow.png";
    } else if(data.weather[0].main == "Mist") {
        weatheIcon.src = "images/mist.png";
    }

    document.querySelector(".weather").style.display = "block";
}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
});



searchBox.addEventListener("keydown", (e) => {
    if(e.key === "Enter"){
        checkWeather(searchBox.value);
    }
});
