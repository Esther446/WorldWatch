// js/api.js

export async function fetchWeather(city) {
  const apiKey = config.OPENWEATHER_API_KEY;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&units=metric&appid=${apiKey}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("City not found or API error");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
}
