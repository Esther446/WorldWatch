document.getElementById('weatherForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const city = document.getElementById('cityInput').value;
  const resultDiv = document.getElementById('result');

  try {
    const res = await fetch(`/weather?city=${city}`);
    const data = await res.json();

    if (data.error) {
      resultDiv.textContent = data.error;
    } else {
      resultDiv.innerHTML = `
        <h2>${data.name}, ${data.country}</h2>
        <p>🌡️ Temp: ${data.temp}°C</p>
        <p>🌥️ Description: ${data.description}</p>
        <p>💨 Wind Speed: ${data.wind} m/s</p>
      `;
    }
  } catch (err) {
    resultDiv.textContent = "Error fetching weather data.";
  }
});
