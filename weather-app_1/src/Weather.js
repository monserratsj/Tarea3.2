import React from 'react';

function Weather({ data }) {
  return (
    <div className="weather-info">
      <h2>Clima en {data.name}</h2>
      <p>Temperatura: {data.main.temp} °C</p>
      <p>Humedad: {data.main.humidity}%</p>
      <p>Condición: {data.weather[0].description}</p>
    </div>
  );
}

export default Weather;
