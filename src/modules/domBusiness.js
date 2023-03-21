//get elements
const location = document.querySelector('.city');
const weatherCondition = document.getElementById('weatherCondition');
const temperature = document.getElementById('temp');
const feel = document.getElementById('feels');
const wind = document.getElementById('wind');
const humidity = document.getElementById('humid');
const bodyElement = document.body;

let prevWeather = '';

function capitalize(myStr) {
    const words = myStr.split(" ");

    for (let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].substr(1);
    }

    return words.join(" ");
}

function displayLocation(locationStr) {
    location.textContent = locationStr;
}

function displayMainWeather(desc, tempInt) {
    desc = capitalize(desc);
    weatherCondition.textContent = desc;
    temperature.innerHTML = tempInt + '\u2103';
}

function displayOtherStats(feelInt, windInt, humidInt) {
    feel.textContent = feelInt + '\u2103';
    wind.textContent = windInt + ' m/s';
    humidity.textContent = humidInt + '%';
}

function bgStyles(bg) {
    bodyElement.style.backgroundImage = `url(./images/weatherBg/${bg}.svg)`;
}

function changeBg(currWeather) {
    if (prevWeather == currWeather) return; //prevent changing bg to similar bg
    prevWeather = currWeather;

    switch (currWeather) {
        case 'Clear':
            bgStyles('clear');
            break;
        case 'Rain':
            bgStyles('rainy');
            break;
        case 'Clouds':
            bgStyles('Cloudy');
            break;
        case 'Snow':
            bgStyles('snow');
            break;
        case 'Sunny':
            bgStyles('sunny');
            break;
        default:
            bgStyles('clear');
            break;
    }
}

export default function displayWeather(myWeatherObj) {
    if (myWeatherObj == null) return; //prevent trying display of invalid locations
    displayLocation(myWeatherObj.location);
    displayMainWeather(myWeatherObj.weatherDesc, myWeatherObj.cityTemp);
    displayOtherStats(myWeatherObj.tempFeel, myWeatherObj.windSpeed, myWeatherObj.humidity);

    changeBg(myWeatherObj.mainWeather);
}