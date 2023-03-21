import getCityWeather from "./modules/weather";
import displayWeather from "./modules/domBusiness";

const searchBar = document.getElementById('searchTarget');
const searchForm = document.getElementById('searchForm');

searchForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    if (searchBar.value == "") return;

    let weatherObj = await getCityWeather(searchBar.value);
    displayWeather(weatherObj);

    searchForm.reset();
})

function initPage() {
    searchBar.value = 'London';
    searchForm.dispatchEvent(new Event('submit'));
}

initPage();