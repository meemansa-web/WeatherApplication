let unit = "metric"; // default Celsius

// Theme management
function toggleTheme() {
    const body = document.body;
    const toggleBtn = document.getElementById('themeToggle');

    if (body.classList.contains('dark')) {
        body.classList.remove('dark');
        toggleBtn.textContent = '🌙';
        localStorage.setItem('theme', 'light');
    } else {
        body.classList.add('dark');
        toggleBtn.textContent = '☀️';
        localStorage.setItem('theme', 'dark');
    }
}

function loadTheme() {
    const savedTheme = localStorage.getItem('theme');
    const toggleBtn = document.getElementById('themeToggle');

    if (savedTheme === 'dark') {
        document.body.classList.add('dark');
        toggleBtn.textContent = '☀️';
    } else {
        document.body.classList.remove('dark');
        toggleBtn.textContent = '🌙';
    }
}

// Load theme on page load
document.addEventListener('DOMContentLoaded', loadTheme);

function setUnit(selectedUnit) {
    unit = selectedUnit;
    getWeather();
}

async function getWeather() {
    const city = document.getElementById("cityInput").value;

    if (!city) {
        showError("Please enter a city name");
        return;
    }

    showLoading(true);
    hideError();

    try {
        const url = `${CONFIG.BASE_URL}?q=${city}&appid=${CONFIG.API_KEY}&units=${unit}`;

        const response = await fetch(url);
        const data = await response.json();

        if (data.cod !== 200) {
            throw new Error(data.message);
        }

        displayWeather(data);

    } catch (error) {
        showError(error.message);
    }

    showLoading(false);
}

function displayWeather(data) {
    document.getElementById("weatherCard").classList.remove("hidden");

    // Remove previous weather classes
    document.body.className = document.body.className.replace(/weather-\w+/g, '').trim();

    // Add weather-based class for background
    const weatherMain = data.weather[0].main.toLowerCase();
    document.body.classList.add(`weather-${weatherMain}`);

    document.getElementById("cityName").innerText = data.name;
    document.getElementById("temp").innerText = `${Math.round(data.main.temp)}°`;
    document.getElementById("condition").innerText = data.weather[0].description;
    document.getElementById("humidity").innerText = `${data.main.humidity}%`;
    document.getElementById("wind").innerText = `${data.wind.speed} m/s`;
}

function showLoading(state) {
    document.getElementById("loading").classList.toggle("hidden", !state);
}

function showError(message) {
    const errorBox = document.getElementById("error");
    errorBox.innerText = message;
    errorBox.classList.remove("hidden");
}

function hideError() {
    document.getElementById("error").classList.add("hidden");
}