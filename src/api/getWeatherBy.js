const apiKey = '4a4ff7c13ec91a3f0ca053fc70383aa9';

async function getWeatherBy(cityName, units = 'metric') {
  try {
    const api = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=${units}&appid=${apiKey}`;
    const response = await fetch(api, { mode: 'cors' });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

export { getWeatherBy };
