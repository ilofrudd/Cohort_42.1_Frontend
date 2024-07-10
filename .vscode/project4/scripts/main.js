document.addEventListener('DOMContentLoaded', () => {
    const apiKey = '167aea582efc48099c6165012240107';
    const city = 'London';
    const apiUrl = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=7&aqi=no&alerts=no`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => updateWeatherWidget(data))
        .catch(error => console.error('Error fetching data', error));
});

function updateWeatherWidget(data) {
    const cityElement = document.getElementById('city');
    const dateElement = document.getElementById('date');
    const tempElement = document.getElementById('temp');
    const descElement = document.getElementById('desc');
    const currentIconElement = document.getElementById('current-icon');
    const forecastElement = document.querySelector('.forecast');

    const { location, current, forecast } = data;

    cityElement.textContent = `${location.name}, ${location.country}`;
    dateElement.textContent = new Date(location.localtime).toLocaleDateString();
    tempElement.textContent = `${current.temp_c}°C`;
    descElement.textContent = current.condition.text;
    currentIconElement.src = `https:${current.condition.icon}`;

    forecastElement.innerHTML = '';

    for (let i = 1; i <= 7; i++) {
        const day = forecast.forecastday[i];
        const dayElement = document.createElement('div');
        dayElement.classList.add('forecast-day');

        const dayName = new Date(day.date).toLocaleDateString('en-US', { weekday: 'short' });
        const iconUrl = `https:${day.day.condition.icon}`;
        const temp = `${day.day.avgtemp_c}°C`;
        const desc = day.day.condition.text;

        dayElement.innerHTML = `
            <div class="forecast-date">${dayName}</div>
            <img src="${iconUrl}" alt="${desc}" class="forecast-icon">
            <div class="forecast-temp">${temp}</div>
        `;

        forecastElement.appendChild(dayElement);
    }
}