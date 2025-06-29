const searchButton = document.getElementById("searchBtn");

searchButton.addEventListener("click", function () {
  const country = document.getElementById("countryInput").value.trim();
  const resultDiv = document.getElementById("result");

  if (!country) {
    resultDiv.innerHTML = "❌ Please enter a country name.";
    resultDiv.style.display = "block";
    return;
  }

  resultDiv.innerHTML = "⏳ Getting information, please wait...";
  resultDiv.style.display = "block";

  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("❌ Country not found. Please check the spelling.");
      }
      return response.json();
    })
    .then((data) => {
      const countryData = data[0];

      const bestSeason = bestSeasons[countryData.name.common];
      const culture = culturalTips[countryData.name.common];
      const capital = countryData.capital?.[0] || "Unknown";
      const flag = countryData.flags.svg;
      const flagAlt =
        countryData.flags.alt || `Flag of ${countryData.name.common}`;

      const region = countryData.region;
      const population = Intl.NumberFormat("en").format(countryData.population);
      const language = Object.values(countryData.languages || {}).join(", ");
      const currencyObj =
        countryData.currencies?.[Object.keys(countryData.currencies)[0]];
      const currency = currencyObj
        ? `${currencyObj.name} (${currencyObj.symbol})`
        : "Unknown";

      const googleMapsLink = `https://www.google.com/maps/search/?api=1&query=${capital}`;

      // fetch météo + Wikipedia en parallèle
      Promise.all([
        fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${capital}&units=metric&appid=${API_KEY}`
        ).then((res) => res.json()),
        fetch(
          `https://en.wikipedia.org/w/api.php?action=opensearch&search=Tourism in ${countryData.name.common}&limit=1&namespace=0&format=json&origin=*`
        ).then((res) => res.json()),
      ])
        .then(([weatherdata, wikiData]) => {
          const temp = Math.round(weatherdata.main.temp);
          const feels = Math.round(weatherdata.main.feels_like);
          const weatherIcon = weatherdata.weather[0].icon;
          const weatherDesc = weatherdata.weather[0].description;

          const tourismLink = wikiData[3][0];

          const html = `
          <div class="travel-app__card-header">
            <div class="travel-app__country-header">
              <img src="${flag}" alt="${flagAlt}" class="travel-app__flag" />
              <h2 class="travel-app__country-name">${
                countryData.name.common
              }</h2>
            </div>
          </div>
          <div class="travel-app__card-content">
            <div class="travel-app__info-grid">

              <div class="travel-app__info-item">
                <div class="travel-app__info-header">
                  <span class="travel-app__info-label">Capital</span>
                </div>
                <a href="${googleMapsLink}" target="_blank" class="travel-app__capital-link">${capital}</a>
              </div>

              <div class="travel-app__info-item">
                <div class="travel-app__info-header">
                  <span class="travel-app__info-label">Region</span>
                </div>
                <span class="travel-app__region-badge">${region}</span>
              </div>

              <div class="travel-app__info-item">
                <div class="travel-app__info-header">
                  <span class="travel-app__info-label">Population</span>
                </div>
                <span class="travel-app__info-value">${population}</span>
              </div>

              <div class="travel-app__info-item">
                <div class="travel-app__info-header">
                  <span class="travel-app__info-label">Languages</span>
                </div>
                <span class="travel-app__info-value">${language}</span>
              </div>

              <div class="travel-app__info-item">
                <div class="travel-app__info-header">
                  <span class="travel-app__info-label">Currency</span>
                </div>
                <span class="travel-app__info-value">${currency}</span>
              </div>
              
             ${
               bestSeason
                 ? `
  <div class="travel-app__info-item">
    <div class="travel-app__info-header">
      <span class="travel-app__info-label">Best Season</span>
    </div>
    <span class="travel-app__info-value">${bestSeason}</span>
  </div>
`
                 : ""
             }

              <div class="travel-app__info-item travel-app__weather">
                <div class="travel-app__info-header">
                  <span class="travel-app__info-label">Weather in ${capital}</span>
                </div>
                <div class="travel-app__weather-content">
                  <div class="travel-app__weather-temp">
                    ${temp}°C
                    <span class="travel-app__weather-feels">(feels like ${feels}°C)</span>
                  </div>
                  <div class="travel-app__weather-desc">
                    <img src="https://openweathermap.org/img/wn/${weatherIcon}@2x.png"
                         alt="${weatherDesc}" class="travel-app__weather-icon" />
                    <span class="travel-app__weather-description">${weatherDesc}</span>
                  </div>
                </div>
              </div>

              ${
                tourismLink
                  ? `
              <div class="travel-app__info-item">
                <div class="travel-app__info-header">
                  <span class="travel-app__info-label">Top Sights</span>
                </div>
                <a href="${tourismLink}" target="_blank" class="travel-app__capital-link">See on Wikipedia</a>
              </div>
              `
                  : ""
              }
  <div class="travel-app__info-item">
      <div class="travel-app__info-header">
        <span class="travel-app__info-label">Culture Tips</span>
      </div>
      <span class="travel-app__info-value">${culture}</span>
    </div>


            </div>
          </div>
        `;

          resultDiv.innerHTML = html;
        })
        .catch((error) => {
          resultDiv.innerHTML = `❌ Error fetching weather or tourism data: ${error.message}`;
        });
    })
    .catch((error) => {
      resultDiv.innerHTML = error.message;
    });
});
