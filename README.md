# travel-tip-app
A simple travel app built with vanilla JS that gives useful info about countries.
# 🌍 Travel Tip App

Travel Tip App is a lightweight and responsive web application built with **HTML**, **CSS**, and **vanilla JavaScript**.  
It allows users to search for any country and instantly get relevant information for travelers.

---

## ✨ Features

- 🔎 Search any country by name
- 🏛️ Get capital, region, population, flag, languages, and currency
- ☀️ Live weather data (temperature, feels like, description + icon)
- 📅 Best time to visit (for 50+ countries)
- 🧭 Top tourist info via Wikipedia
- 🧠 Cultural tips per country (50+ entries)
- 📱 Fully responsive UI – styled manually (no frameworks)

---

## ⚙️ How It Works

1. The user enters a **country name** in the input.
2. The app calls the **REST Countries API** to fetch base country data.
3. It then fetches **weather info** from the **OpenWeather API** using the country's capital.
4. Static JSON-like objects (`data.js`) provide:
   - best travel seasons
   - cultural tips
   - cost of living
   - practical info
5. All content is dynamically inserted into a responsive UI styled manually with CSS.

---

## 🔐 API Key & `config.js`

This app uses the **OpenWeather API**, which requires an API key.

To keep your key private:

- The API key is stored in a file named `config.js`, like this:

```js
const API_KEY = "your_openweather_api_key";

This file is excluded from version control using .gitignore.

✅ Important: When cloning or downloading this project, you must create your own config.js file with your personal key.

🧪 How to Use Locally
Clone the repo or download the ZIP

Inside the project folder, create a file named config.js and add:

js
Copier
Modifier
const API_KEY = "your_api_key_here";
Open index.html in your browser. That’s it.

🛣️ Roadmap
✈️ Planned: Flight search integration with Amadeus API

🌐 Add language selector / translations

💾 Save favorite countries for quick access

🧠 Author
Built by Me: Jaï– learning fullstack development and A.I through real projects.

📸 Preview
![image](https://github.com/user-attachments/assets/f41c53c5-9dd8-496b-be96-20b163271767)

📄 License
MIT – free to use, modify and build upon.
