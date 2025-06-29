# 🌍 Travel Tip App

**Travel Tip App** is a lightweight and responsive web application built with **HTML**, **CSS**, and **vanilla JavaScript**.
It allows users to search for any country and instantly get useful information for travelers.

---

## ✨ Features

* 🔎 Search any country by name
* 🏩 Get capital, region, population, flag, languages, and currency
* ☀️ Live weather data (temperature, feels like, description + icon)
* 🗕️ Best time to visit (for 50+ countries)
* 🛍️ Top tourist info via Wikipedia
* 🧠 Cultural tips per country (50+ entries)
* 📱 Fully responsive UI – styled manually (no frameworks)

---

## ⚙️ How It Works

1. The user enters a **country name** in the input.
2. The app calls the **REST Countries API** to fetch base country data.
3. It then calls the **OpenWeather API** to fetch live weather info for the capital.
4. Static JSON-like data in `data.js` adds:

   * Best travel seasons
   * Cultural tips
   * Practical travel info
5. The result is styled and displayed dynamically using vanilla JavaScript.

---

## 🔐 API Key & `config.js`

This app uses the **OpenWeather API**, which requires an API key.

To keep your key private:

* The key is stored in a file called `config.js`, like this:

```js
const API_KEY = "your_openweather_api_key";
```

* This file is excluded from Git versioning using `.gitignore`.

> ✅ When cloning or downloading this project, you must create your own `config.js` file with your personal key.

---

## 🧪 How to Use Locally

1. Clone the repo or download the ZIP.
2. Inside the project folder, create a file named `config.js` and add:

```js
const API_KEY = "your_openweather_api_key_here";
```

3. Open `index.html` in your browser. That’s it. No build process required.

---

## 🚳️ Roadmap

* ✈️ Planned: Flight search integration with **Amadeus API**
* 🌐 Add language selector / translations
* 📂 Save favorite countries

---

## 🧠 Author

Built by \[Your GitHub Username] – learning fullstack development through real-world projects.

---

## 📸 Preview

![image](https://github.com/user-attachments/assets/4e72b772-80e0-4bdb-b8dd-45a114071e53)


---

## 📄 License

MIT – Free to use, modify, and build upon.
