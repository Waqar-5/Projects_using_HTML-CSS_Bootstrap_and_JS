# Weather App 🌤️

A **modern, responsive, and animated weather app** built with **HTML, CSS, and JavaScript**, using the **OpenWeather API** and **SweetAlert2** for notifications. The app allows users to search for any city and view the current weather, including temperature, humidity, wind speed, and a dynamic weather icon.

---

## Features ✨

- Search weather by city name.
- Displays:
  - Temperature (°C)
  - City name
  - Humidity (%)
  - Wind speed (km/h)
- Dynamic weather icons for:
  - Clouds ☁️
  - Clear 🌞
  - Rain 🌧️
  - Drizzle 🌦️
  - Mist 🌫️
  - Snow ❄️
  - Default fallback icon
- SweetAlert2 animated **toasts** for:
  - Invalid city
  - Empty input
  - Errors
- Smooth UI animations using **Animate.css**.
- Fully **responsive** design.
- Background gradient changes dynamically (optional to enhance).

---

## Demo

![Weather App Screenshot](assets/screenshot.png)  
*(Add a screenshot of your app in the `assets` folder)*

---

## Installation 🔧

1. **Clone the repository**:

```bash
git clone <your-repo-link>
```

2. **Open `index.html`** in your browser:

```bash
cd weather-app
open index.html
```

3. **Add your OpenWeather API key**:

- Open `script.js`.
- Replace:

```javascript
const apikey = "add your api here";
const apiUrl = "weather api here";
```

with your own API key.

---

## Usage 🛠️

1. Enter a city name in the search box.
2. Press **Enter** or click the **search button**.
3. View the weather info and icon.
4. If the city name is invalid, a **toast notification** will appear.

---

## Folder Structure 📂

```
weather-app/
│
├── assets/
│   ├── clouds.png
│   ├── clear.png
│   ├── rain.png
│   ├── drizzle.png
│   ├── mist.png
│   ├── snow.png
│   ├── default.png
│   └── search.png
│
├── index.html
├── style.css
├── script.js
└── README.md
```

---

## Technologies Used 🖥️

- **HTML5** – Structure
- **CSS3** – Styling & animations
- **JavaScript (ES6)** – Logic & API calls
- **SweetAlert2** – Toast notifications
- **OpenWeather API** – Weather data
- **Animate.css** – Animations

---

## Notes ⚠️

- Ensure your **API key** is valid.
- Use **modern browsers** for full animation support.
- For **security**, avoid exposing your API key publicly. Consider using a backend or `.env` file for production.

---

## License 📄

This project is open-source. Feel free to use and customize it.

