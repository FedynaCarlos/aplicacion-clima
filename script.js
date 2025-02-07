const urlBase = `https://api.openweathermap.org/data/2.5/weather`
const API_KEY = "945f7fd6ed54a5c5b1fc3b5a42698764"
const diffkelvin = 273.15;

document.getElementById("searchButton").addEventListener("click", () => {
    const city = document.getElementById("cityInput").value;
    if (city) {
        fetchweather(city)
    } else {
        alert("Please enter a city valida");
    }

})

function fetchweather(city) {
    fetch(`${urlBase}?q=${city}&appid=${API_KEY}&lang=es`)
        .then(data => data.json())
        .then(data => showWeatherData(data))
}

function showWeatherData(data) {
    const divResponseData = document.getElementById("responseData")
    divResponseData.innnerHTML = ""

    const cityName = data.name
    const countryName = data.sys.country
    const temp = data.main.temp
    const humidity = data.main.humidity
    const description = data.weather[0].description
    const icon = data.weather[0].icon

    const cityInfo = document.createElement("h2")
    cityInfo.textContent = `${cityName}, ${countryName}`

    const tempInfo = document.createElement("p")
    tempInfo.textContent = `La temperatura es: ${Math.floor(temp-diffkelvin)}°C`

    const humidityInfo = document.createElement("p")
    humidityInfo.textContent = `La Humedad es del ${humidity}%`

    const icoInfo = document.createElement("img")
    icoInfo.src = `https://openweathermap.org/img/wn/${icon}@2x.png`

    const descriptionInfo = document.createElement("p")
    descriptionInfo.textContent = `La descripción meteorológica es ${description}`

    divResponseData.appendChild(cityInfo)
    divResponseData.appendChild(tempInfo)
    divResponseData.appendChild(humidityInfo)
    divResponseData.appendChild(icoInfo)
    divResponseData.appendChild(descriptionInfo)
}