const api = axios.create({
  baseURL: "http://api.weatherapi.com/v1/",
  params: {
    key: "2f008c5109bb4b9898b123449222908",
  },
});

function renderSearchCity(data) {
  const cityItem = document.createElement("article");
  cityItem.classList.add("mainSearchMobile__city");
  const cityName = document.createElement("h2");
  cityName.classList.add("cityName");
  const cityNameFound = data.location.name;
  cityName.innerText = cityNameFound;
  const cityTemp = document.createElement("h2");
  cityTemp.classList.add("cityTemp");
  cityTemp.innerText = data.current.temp_c + "°C";
  cityItem.appendChild(cityName);
  cityItem.appendChild(cityTemp);
  mainSearchMobile.appendChild(cityItem);

  cityItem.addEventListener("click", async (event) => {
    const { data, status } = await api(
      `forecast.json?q=${cityNameFound}&aqi=no`
    );
    renderDataCity(data);
  });
}
function renderDataCity(data) {
  cityNameHeader.innerText = data.location.name;
  sunriseInfo.innerText = data.forecast.forecastday[0].astro.sunrise;
  sunsetInfo.innerText = data.forecast.forecastday[0].astro.sunset;
  dateInfo.innerText = data.forecast.forecastday[0].date;
  hourInfo.innerText = data.location.localtime.split(" ")[1];
  temperature.innerText = data.current.temp_c + "°C";
  typeWeatherInfo.innerText = data.current.condition.text;
  pressure.innerText = data.current.pressure_mb + "mb";
  humadity.innerText = data.current.humidity + "%";
  windSpeed.innerText = data.current.wind_kph + "km/h";

  const byHours = data.forecast.forecastday[0].hour
    .map((e) => {
      return `
        <div class="sliderWeatherHours__weatherHour">
            <h3 class="weatherHour__hour">${e.time.split(" ")[1]}</h3>
            <span class="weatherHour__icon">icon</span>
            <h3 class="weatherHour__temp">${e.temp_c}°C</h3>
        </div>
    `;
    })
    .join(",");
  weatherPerHoursSlider.innerHTML = byHours;

  location.hash = `#dataCity=${data.location.name}`;
  mobileNav.classList.toggle("mobileNav_Hidden");
}
async function searchCity(cityName) {
  const { data, status } = await api(`current.json?q=${cityName}&aqi=no`);
  console.log(data);
  renderSearchCity(data);
}

searchCityInput.addEventListener("keypress", (e) => {
  if (e.keyCode === 13) {
    const inputValue =
      searchCityInput.value.charAt(0).toUpperCase() +
      searchCityInput.value.slice(1);
    searchCity(inputValue);
  }
});
