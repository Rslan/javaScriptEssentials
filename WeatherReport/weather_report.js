function showWeatherDetails(event) {
    event.preventDefault();
    
    const city = document.getElementById('city').value;
    const apiKey = '953d230e9c5e38590f6ce14fb1fc52eb';
    const geoApiUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${apiKey}`;

    fetch(geoApiUrl)
        .then(response => response.json())
        .then(cityData => {
            const lat = cityData[0].lat;
            const lon = cityData[0].lon;
            const weatherApiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&lat=${lat}&lon=${lon}&appid=${apiKey}`;
            return fetch(weatherApiUrl);
        })
        .then(response => response.json())
        .then(data => {
            const weatherInfo = document.getElementById('weatherInfo');
            weatherInfo.innerHTML = `
            <h2>Weather in ${data.name}</h2>
            <p>Temperature: ${data.main.temp} &#8451</p>
            <p>Weather: ${data.weather[0].description}</p>
            `;
        })
        .catch(error => {
            console.error('Error fetching weather:', error);
            const weatherInfo = document.getElementById('weatherInfo');
            weatherInfo.innerHTML = `<p>Failed to fetch weather. Please try again.</p>`;
        })
}

document.getElementById('weatherForm')
    .addEventListener('submit', showWeatherDetails);
