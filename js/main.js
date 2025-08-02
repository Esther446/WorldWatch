import { fetchWeather } from './api.js';

const searchBtn = document.getElementById('searchBtn');
const cityInput = document.getElementById('cityInput');
const resultDiv = document.getElementById('result');

searchBtn.addEventListener('click', async () => {
  const city = cityInput.value.trim();
  if (!city) {
    resultDiv.textContent = "Please enter a city name.";
    return;
  }

  resultDiv.textContent = "Loading...";

  try {
    const weather = await fetchWeather(city);

    resultDiv.innerHTML = `
      <h2>${weather.name}, ${weather.sys.country}</h2>
      <p>Temperature: ${weather.main.temp}°C</p>
      <p>Weather: ${weather.weather[0].description}</p>
      <p>Humidity: ${weather.main.humidity}%</p>
      <p>Wind Speed: ${weather.wind.speed} m/s</p>
    `;
  } catch (error) {
    resultDiv.textContent = error.message;
  }
});
// js/main.js
import { fetchWeather } from './api.js';

const searchBtn = document.getElementById('searchBtn');
const cityInput = document.getElementById('cityInput');
const resultDiv = document.getElementById('result');

searchBtn.addEventListener('click', async () => {
  const city = cityInput.value.trim();
  if (!city) {
    resultDiv.textContent = "Please enter a city name.";
    return;
  }

  resultDiv.textContent = "Loading...";

  try {
    const weather = await fetchWeather(city);

    resultDiv.innerHTML = `
      <h2>${weather.name}, ${weather.sys.country}</h2>
      <p>Temperature: ${weather.main.temp}°C</p>
      <p>Weather: ${weather.weather[0].description}</p>
      <p>Humidity: ${weather.main.humidity}%</p>
      <p>Wind Speed: ${weather.wind.speed} m/s</p>
    `;
  } catch (error) {
    resultDiv.textContent = error.message;
  }
});
