const apiKey = 'b021c750b3c3805b9fba49146db3d53c'; //API key
const city = 'Seattle'; // Ciudad
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=es`;

async function getWeather() {
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        displayWeather(data);
    } catch (error) {
        console.error("Error fetching weather data:", error);
        document.getElementById('weather-info').innerHTML = '<p>Error al obtener los datos del clima.</p>';
    }
}

function displayWeather(data) {
    const weatherInfo = document.getElementById('weather-info');
    weatherInfo.innerHTML = `
        <h2>Clima en ${data.name}</h2>
        <p>Temperatura: ${data.main.temp} °C</p>
        <p>Humedad: ${data.main.humidity}%</p>
        <p>Condición: ${data.weather[0].description}</p>
    `;
}

getWeather();
