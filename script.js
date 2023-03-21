async function getWeatherData(city) {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=3cdd9a839ee1a7573b2f830649b4f7af&units=metric`);
        if (!response.ok) throw new Error(`No city named ${city}.`);

        const responseObject = await response.json();
        return responseObject;
    } catch (error) {
        alert(error.message);
        return null;
    }
}

async function processData(dataObj) {

    let location = dataObj.name + ", " + dataObj.sys.country;
    let mainWeather = dataObj.weather[0].main;
    let weatherDesc = dataObj.weather[0].description;
    let cityTemp = dataObj.main.temp;
    let tempFeel = dataObj.main.feels_like;
    let windSpeed = dataObj.wind.speed;
    let humidity = dataObj.main.humidity;

    return {location, mainWeather, weatherDesc, cityTemp, tempFeel, windSpeed, humidity};
}

export default async function getCityWeather(city) {
    let FullWeatherObj = await getWeatherData(city);
    let filteredWeatherObj = processData(FullWeatherObj);
    
    return filteredWeatherObj;
}
