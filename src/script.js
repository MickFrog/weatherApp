import getCityWeather from "./modules/weather";

const searchBar = document.getElementById('searchTarget');
const searchForm = document.getElementById('searchForm');

searchForm.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log(searchBar.value);

    searchForm.reset();
})
