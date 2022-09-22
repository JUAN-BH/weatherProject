//*Utils
const api = axios.create({
  baseURL: "https://weatherapi-com.p.rapidapi.com/",
  // params: {
  //   key: "57be9319ebmsh663cc9b4c17c821p1f1099jsneea5309eaf01",
  // },
  headers: {
    "X-RapidAPI-Key": "57be9319ebmsh663cc9b4c17c821p1f1099jsneea5309eaf01",
    "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
  },
});
//pk.b438038ca0eeaeead4ee265d6a2c006c
const apiLocation = axios.create({
  baseURL: "https://us1.locationiq.com/v1/",
  params: {
    key: "pk.b438038ca0eeaeead4ee265d6a2c006c",
  },
});

function showPosition(position) {
  lat = position.coords.latitude;
  lon = position.coords.longitude;
  displayLocation(lat, lon);
}

function showError(error) {
  switch (error.code) {
    case error.PERMISSION_DENIED:
      alert("User denied the request for Geolocation.");
      break;
    case error.POSITION_UNAVAILABLE:
      alert("Location information is unavailable.");
      break;
    case error.TIMEOUT:
      alert("The request to get user location timed out.");
      break;
    case error.UNKNOWN_ERROR:
      alert("An unknown error occurred.");
      break;
  }
}

async function displayLocation(latitude, longitude) {
  modalFirstLoading.classList.remove("hidden");
  const { data, status } = await apiLocation(
    `reverse?format=json&lat=${latitude}&lon=${longitude}`
  );
  const city = data.address.city;
  searchUserCity(city);
  modalFirstLoading.classList.add("hidden");

  console.log(data);
}

function saveCities(city) {
  let savedCities;
  savedCities = JSON.parse(localStorage.getItem("cities"));
  if (Array.isArray(savedCities)) {
    !savedCities.includes(city) && savedCities.push(city);
  } else {
    savedCities = [city];
  }
  localStorage.setItem("cities", JSON.stringify(savedCities));
}

function deleteCity(city) {
  const savedCities = JSON.parse(localStorage.getItem("cities"));
  const newCities = savedCities.filter((e) => e !== city);

  localStorage.setItem("cities", JSON.stringify(newCities));
}

function verifyIfSaved(cityName) {
  const savedCities = JSON.parse(localStorage.getItem("cities"));
  if (Array.isArray(savedCities)) {
    savedCities.includes(cityName)
      ? (saveCityBtn.checked = true)
      : (saveCityBtn.checked = false);
  }
}

function convert(input) {
  return moment(input, ["hh:mm A"]).format("HH:mm");
}

//*Queries
async function searchCity(cityName) {
  try {
    modalLoading.classList.remove("hidden");
    const { data, status } = await api(`forecast.json?q=${cityName}&days=3`);
    renderSearchCity(data);
    renderDataCity(data);
    // renderSearchCityDesktop(data);
    modalLoading.classList.add("hidden");
    console.log("metodo search", data);
    return data;
  } catch (e) {
    console.error(e);
    searchedCityModal.innerText = cityName;
    modalFail.classList.remove("hidden");
    closeModalFailed.addEventListener("click", (e) => {
      modalFail.classList.add("hidden");
    });
    modalLoading.classList.add("hidden");
  }
}

async function searchUserCity(cityName) {
  // modalFirstLoading.classList.remove("hidden");
  const { data, status } = await api(`forecast.json?q=${cityName}&days=3`);
  console.log("userCity", data);
  renderDataCity(data);
  // modalFirstLoading.classList.add("hidden");
}

function getUserCity() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition, showError);
  } else {
    console.log("Geolocation is not supported by this browser.");
  }
}

//*Renders
function renderSearchCity(data) {
  const cityItem = document.createElement("article");
  cityItem.style.background = `url('/src/assets/img/customCityF.png') center/cover no-repeat`;
  cityItem.setAttribute("id", data.location.name);
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

  let citiesSearched = [];
  for (const city of mainSearchMobile.childNodes.entries()) {
    citiesSearched.push(city);
  }
  citiesSearched = citiesSearched
    .flat()
    .filter((e) => isNaN(e))
    .map((e) => e.id);

  // console.log(citiesSearched);

  if (!citiesSearched.includes(cityItem.getAttribute("id"))) {
    mainSearchMobile.appendChild(cityItem);
  }

  cityItem.addEventListener("click", async (event) => {
    const { data, status } = await api(
      `forecast.json?q=${cityNameFound}&days=3`
    );
    console.log("forescast", data);
    renderDataCity(data);
  });
}
function renderDataCity(data) {
  const sunriseTime24h = convert(
    data.forecast.forecastday[0].astro.sunrise
  ).replace(/:/g, "");
  console.log("sunriseTime24h", sunriseTime24h);
  const sunsetTime24h = convert(
    data.forecast.forecastday[0].astro.sunset
  ).replace(/:/g, "");
  console.log("sunsetTime24h", sunsetTime24h);
  const currentTime = data.location.localtime.split(" ")[1].replace(/:/g, "");
  console.log(
    "compare time",
    sunriseTime24h < currentTime && sunsetTime24h > currentTime
  );

  if (sunriseTime24h < currentTime && sunsetTime24h > currentTime) {
    if (data.current.condition.text.toLowerCase().includes("cloudy")) {
      mainWeather.style.background = `url('/src/assets/img/cloudy_light.png') center/cover no-repeat`;
    } else if (data.current.condition.text.toLowerCase().includes("sunny")) {
      mainWeather.style.background = `url('/src/assets/img/sunny_light.png') center/cover no-repeat`;
    } else if (
      data.current.condition.text.toLowerCase().includes("rain") ||
      data.current.condition.text.toLowerCase().includes("drizzle")
    ) {
      mainWeather.style.background = `url('/src/assets/img/rain_light.png') center/cover no-repeat`;
    } else if (data.current.condition.text.toLowerCase().includes("clear")) {
      mainWeather.style.background = `url('/src/assets/img/clear__light.png') center/cover no-repeat`;
    } else {
      mainWeather.style.background = `url('/src/assets/img/cloudy_light.png') center/cover no-repeat`;
    }
  } else {
    if (data.current.condition.text.toLowerCase().includes("cloudy")) {
      mainWeather.style.background = `url('/src/assets/img/cloudy__night.png') center/cover no-repeat`;
    } else if (
      data.current.condition.text.toLowerCase().includes("rain") ||
      data.current.condition.text.toLowerCase().includes("drizzle")
    ) {
      mainWeather.style.background = `url('/src/assets/img/rain__night.png') center/cover no-repeat`;
    } else if (data.current.condition.text.toLowerCase().includes("clear")) {
      mainWeather.style.background = `url('/src/assets/img/clear__night.png') center/cover no-repeat`;
    } else {
      mainWeather.style.background = `url('/src/assets/img/cloudy__night.png') center/cover no-repeat`;
    }
  }

  titleCityDesktop.innerText = data.location.name;
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
            <img src="${e.condition.icon}" alt="" class="weatherHour__icon">
            <h3 class="weatherHour__temp">${e.temp_c}°C</h3>
        </div>
    `;
    })
    .join(" ");
  weatherPerHoursSlider.innerHTML = byHours;
  renderNextDays(data.forecast.forecastday);
  location.hash = `#dataCity=${data.location.name}`;
  verifyIfSaved(titleCityDesktop.innerText);

  // mobileNav.classList.add("mobileNav_Hidden");
}
function renderNextDays(data, responsive = "mobile") {
  // if (responsive === "mobile") {
  //   mainNext2DaysMobile.innerHTML = "";
  //   data.forEach((e) => {
  //     const dayCityItem = document.createElement("article");
  //     // dayCityItem.setAttribute("id", data.location.name);
  //     dayCityItem.classList.add("mainNext2DaysMobile__city");
  //     const date = document.createElement("p");
  //     date.classList.add("city__dayDate");
  //     date.innerText = e.date;

  //     const cityInfo = document.createElement("div");
  //     cityInfo.classList.add("city__info");
  //     const cityTemp = document.createElement("h2"); //°C
  //     cityTemp.classList.add("info__temp");
  //     cityTemp.innerText = e.day.maxtemp_c + "°C";
  //     const cityCondition = document.createElement("p");
  //     cityCondition.classList.add("info__cityCondition");
  //     cityCondition.innerText = e.day.condition.text;
  //     cityInfo.appendChild(cityTemp);
  //     cityInfo.appendChild(cityCondition);

  //     dayCityItem.appendChild(date);
  //     dayCityItem.appendChild(cityInfo);
  //     mainNext2DaysMobile.appendChild(dayCityItem);
  //   });

  //   // cityItem.addEventListener("click",  (event) => {
  //   //   renderDataCity(data);
  //   // });
  // } else if (responsive === "desktop") {
  console.log("dataDesktoNextDays", data);
  mainNext2DaysContent.innerHTML = "";
  data.forEach((e) => {
    const dayCityItem = document.createElement("div");
    // dayCityItem.setAttribute("id", data.location.name);
    dayCityItem.classList.add("content__city");
    const date = document.createElement("p");
    date.classList.add("city__dayDate");
    date.innerText = e.date;

    const cityInfo = document.createElement("div");
    cityInfo.classList.add("city__info");
    const cityTemp = document.createElement("h2"); //°C
    cityTemp.classList.add("info__temp");
    cityTemp.innerText = e.day.maxtemp_c + "°C";
    const cityCondition = document.createElement("p");
    cityCondition.classList.add("info__cityCondition");
    cityCondition.innerText = e.day.condition.text;
    cityInfo.appendChild(cityTemp);
    cityInfo.appendChild(cityCondition);

    dayCityItem.appendChild(date);
    dayCityItem.appendChild(cityInfo);
    mainNext2DaysContent.appendChild(dayCityItem);
  });
  // }
}
function renderSavedCities() {
  // console.log(savedCities);
  const savedCities = JSON.parse(localStorage.getItem("cities"));

  const savedCitiesContainer = document.querySelector(".savedCities");
  savedCitiesContainer.innerHTML = "";
  if (Array.isArray(savedCities)) {
    savedCities.map((e) => {
      savedCities.innerHTML = "";
      const cityItem = document.createElement("article");
      cityItem.style.background = `url('/src/assets/img/customCityF.png') center/cover no-repeat`;
      cityItem.classList.add("savedCities__city");
      cityItem.setAttribute("id", e);
      const cityName = document.createElement("h2");
      cityName.classList.add("cityName");
      cityName.innerText = e;
      cityItem.appendChild(cityName);
      savedCitiesContainer.appendChild(cityItem);

      cityItem.addEventListener("click", async (e) => {
        modalLoading.classList.remove("hidden");
        const { data, status } = await api(
          `forecast.json?q=${e.target.id}&days=3`
        );
        location.hash = `#dataCity=${e.target.id}`;
        modalLoading.classList.add("hidden");
        renderDataCity(data);
      });
    });
  } else {
    const noCities = document.createElement("h2");
    noCities.innerText = "It seems that you haven't saved anything yet";
    savedCities.appendChild(noCities);
  }
}

//*Actions
searchCityInput.addEventListener("keypress", (e) => {
  if (e.keyCode === 13) {
    const inputValue =
      searchCityInput.value.charAt(0).toUpperCase() +
      searchCityInput.value.slice(1);
    searchCity(inputValue);
  }
});

searchCityDesktop.addEventListener("keypress", (e) => {
  if (e.keyCode === 13) {
    const inputValue =
      searchCityDesktop.value.charAt(0).toUpperCase() +
      searchCityDesktop.value.slice(1);
    searchCity(inputValue);
  }
});

for (let i = 0; i < darkModeBtn.length; i++) {
  darkModeBtn[i].addEventListener("change", () => {
    document.body.classList.toggle("dark");
    if (darkModeBtn[i].checked) {
      darkModeBtn[1].checked = true;
    } else {
      darkModeBtn[1].checked = false;
    }
  });
  darkModeBtn[1].addEventListener("change", () => {
    document.body.classList.toggle("dark");
    if (darkModeBtn[1].checked) {
      darkModeBtn[0].checked = true;
    } else {
      darkModeBtn[0].checked = false;
    }
  });
}

saveCityBtn.addEventListener("change", (e) => {
  const city = titleCityDesktop.innerText;
  console.log(e.target.checked);

  if (!e.target.checked) {
    deleteCity(city);
    // renderSavedCities();
  } else {
    saveCities(city);
    // renderSavedCities();
  }
  renderSavedCities();
});

renderSavedCities();
getUserCity();
