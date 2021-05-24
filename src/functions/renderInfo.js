function renderInfo(info) {
    const cityName = document.querySelector('.city-name');
    const weather = document.querySelector('.weather');
    const temp = document.querySelector('.temp');
    const tempMin = document.querySelector('.temp-min');
    const tempMax = document.querySelector('.temp-max');
    const icon = document.querySelector('.icon');

    cityName.textContent = info.cityName;
    weather.textContent = info.weather;
    temp.textContent = info.temp;
    tempMin.textContent = info.tempMin;
    tempMax.textContent = info.tempMax;
    icon.src = `http://openweathermap.org/img/wn/${info.icon}@2x.png`
}

export { renderInfo }