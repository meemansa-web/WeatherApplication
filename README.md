# 🌦️ Weather Application with API Integration

A modern, responsive **Weather Web Application** that fetches real-time weather data from a public API and displays it in a clean and user-friendly interface.  
Built using **HTML, CSS, and JavaScript** with full API integration, caching, and responsive design.

---

## 🚀 Project Overview

This project allows users to:
- Search any city worldwide 🌍
- View real-time weather conditions 🌤️
- See weather forecast 📊
- Switch between Celsius and Fahrenheit 🌡️
- Experience a responsive and modern UI 📱

It uses the :contentReference[oaicite:0]{index=0} API for weather data.

---

## ✨ Features

### 🌤️ Core Features
- Real-time current weather data
- 5-day weather forecast
- City search functionality
- Autocomplete suggestions (planned/optional)
- Location-based weather detection

### 🌡️ Temperature Features
- Celsius / Fahrenheit conversion
- Instant unit switching

### 🎨 UI / UX Features
- Fully responsive design (mobile, tablet, desktop)
- Modern clean interface
- Weather cards with icons
- Loading states for better UX
- Error messages for invalid input or API failure

### 💾 Performance Features
- LocalStorage caching (last searched city)
- Favorites system (save cities)
- Reduced API calls using caching

---

## 🛠️ Technical Requirements Covered

✔ Fetch data from OpenWeatherMap API  
✔ Display current weather and forecast  
✔ City search functionality  
✔ Temperature unit conversion  
✔ Responsive design  
✔ Error handling for API failures  
✔ LocalStorage caching  
✔ Loading states  

---

## 📁 Project Structure

WeatherApp/

│
├── index.html      # Main UI structure  
├── style.css       # Styling (responsive + animations)  
├── script.js       # API logic + app functionality  
├── config.js       # API configuration (key + endpoints)  
└── README.md       # Project documentation  


---
## ▶️ How to Run the Project

### Step 1: Clone the repository
```bash
git clone https://github.com/your-username/WeatherApp.git
```

Step 2: Go to project folder
```bash
cd WeatherApp
```
Step 3: Open the app

---

## 🔑 API Setup (Important Step)

This project uses the :contentReference[oaicite:1]{index=1} API.

### Step 1: Get API Key
- Go to: https://openweathermap.org/api
- Sign up for a free account
- Generate your API key

### Step 2: Add API Key

Open `config.js` and replace:

```javascript
YOUR_API_KEY_HERE
with your actual key:

const CONFIG = {
    API_KEY: "YOUR_API_KEY_HERE",
    BASE_URL: "https://api.openweathermap.org/data/2.5/weather",
    FORECAST_URL: "https://api.openweathermap.org/data/2.5/forecast"
};
```

## ⚙️ How It Works

- User enters a city name  
- JavaScript sends request to :contentReference[oaicite:0]{index=0} API  
- API returns weather data  
- UI updates dynamically  
- Data is cached in `localStorage`  
- Weather details are displayed in cards  

---

## 🎨 UI Features

- 🌈 Clean modern weather dashboard  
- 🌤️ Weather icons based on conditions  
- 📊 Organized weather details (temperature, humidity, wind)  
- 🔎 Search bar with smooth UX  
- 📱 Mobile-first responsive design  

---

## 🚀 Advanced Features (Planned)

- 📍 Geolocation-based weather detection  
- 🌦️ 5-day detailed forecast  
- 🗺️ Weather map integration  
- 🔔 Weather alerts system  
- ⭐ Favorite cities system  
- 🔎 Autocomplete search bar  
- 📤 Share weather functionality  

---

## ❗ Error Handling

The app handles:

- Invalid city names  
- Network failures  
- API limit issues  
- Empty input validation  

---

## 👨‍💻 Author

**Meemansa Sakhla**  
GitHub: https://github.com/meemansa-web

---


## 📜 License

This project is licensed under the MIT License.

---
