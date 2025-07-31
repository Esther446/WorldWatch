# Weather App

## Overview

This is a simple Weather App that fetches real-time weather data for any city using the OpenWeatherMap API. The app is built with HTML, CSS, and JavaScript and is containerized with Docker. It is deployed on two web servers with a load balancer distributing traffic between them.

---

## Features

- Search for current weather by city name.
- Displays temperature, weather conditions, humidity, and wind speed.
- Handles errors gracefully (e.g., invalid city).
- Responsive and user-friendly interface.
- Dockerized for easy deployment and scalability.
- Load balancer setup with HAProxy for efficient traffic distribution.

---

## API Used

- [OpenWeatherMap API](https://openweathermap.org/api)  
Credit to OpenWeatherMap for providing weather data.

---

## Local Setup

### Prerequisites

- Node.js (optional, not required since it's static)
- Docker installed (for testing container locally)
- An OpenWeatherMap API key (get one [here](https://openweathermap.org/))

### Configuration

1. Create a `config.js` file in the root directory (this file is ignored by git):

```js
const config = {
  OPENWEATHER_API_KEY: "YOUR_API_KEY_HERE"
};
