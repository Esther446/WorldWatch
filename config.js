<<<<<<< HEAD
require('dotenv').config();
const express = require('express');
const axios = require('axios');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from /public
app.use(express.static(path.join(__dirname, 'public')));

// Weather route
app.get('/weather', async (req, res) => {
  const city = req.query.city;
  const apiKey = process.env.OPENWEATHER_API_KEY;

  if (!city) {
    return res.json({ error: "City name is required." });
  }

  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    );
    const data = response.data;
    res.json({
      name: data.name,
      country: data.sys.country,
      temp: data.main.temp,
      description: data.weather[0].description,
      wind: data.wind.speed
    });
  } catch (error) {
    res.json({ error: "City not found or API error." });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`🌍 Server running at http://localhost:${PORT}`);
});
=======
// config.js
const config = {
  OPENWEATHER_API_KEY: "cdb21852d8c9a73b88069e4253871d2f"
};
>>>>>>> ec65b54bd39bee3a6b82c622102b837667d768ce
