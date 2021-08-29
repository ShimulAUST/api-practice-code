const weather = () => {
    const searchInput = document.getElementById('search-input');
    const searchInputValue = searchInput.value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchInputValue}&appid=54c7f3c39dba75f7fcda6917ecefc3c8`;

    fetch(url)
        .then(res => res.json())
        .then(data => displayData(data));
}

const displayData = data => {
    console.log(data);
    const cityWeather = document.getElementById('city-weather');
    cityWeather.innerText = data.name;
    const tempWeather = document.getElementById('temp-weather');
    tempWeather.innerText = (parseFloat(data.main.temp) - 32) / 1.80;
}