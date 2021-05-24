function getInfoFromData(data) {
    return { 
    cityName: data.name,
    weather: data.weather[0].main,
    temp: data.main.temp,
    tempMin: data.main.temp_min,
    tempMax: data.main.temp_max,
    icon: data.weather[0].icon,
    }
}

export { getInfoFromData }