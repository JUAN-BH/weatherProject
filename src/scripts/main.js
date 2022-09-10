//*Utils
const api = axios.create({
  baseURL: "http://api.weatherapi.com/v1/",
  params: {
    key: "2f008c5109bb4b9898b123449222908",
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
      x.innerHTML = "User denied the request for Geolocation.";
      break;
    case error.POSITION_UNAVAILABLE:
      x.innerHTML = "Location information is unavailable.";
      break;
    case error.TIMEOUT:
      x.innerHTML = "The request to get user location timed out.";
      break;
    case error.UNKNOWN_ERROR:
      x.innerHTML = "An unknown error occurred.";
      break;
  }
}

function displayLocation(latitude, longitude) {
  const geocoder = new google.maps.Geocoder();
  const latlng = new google.maps.LatLng(latitude, longitude);

  geocoder.geocode({ latLng: latlng }, function (results, status) {
    if (status == google.maps.GeocoderStatus.OK) {
      if (results[0]) {
        const location = results[0].formatted_address.split(",");
        const city = location[1];
        searchUserCity(city);
      } else {
        alert("location not found");
      }
    } else {
      alert("Geocoder failed due to", status);
    }
  });
}

//*Renders
function renderSearchCity(data) {
  const cityItem = document.createElement("article");
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
      `forecast.json?q=${cityNameFound}&days=3&aqi=no`
    );
    console.log("forescast", data);
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
            <img src="${e.condition.icon}" alt="" class="weatherHour__icon">
            <h3 class="weatherHour__temp">${e.temp_c}°C</h3>
        </div>
    `;
    })
    .join(" ");
  weatherPerHoursSlider.innerHTML = byHours;
  renderNextDays(data.forecast.forecastday);
  location.hash = `#dataCity=${data.location.name}`;
  // mobileNav.classList.add("mobileNav_Hidden");
}
function renderNextDays(data) {
  mainNext2Days.innerHTML = "";
  data.forEach((e) => {
    const dayCityItem = document.createElement("article");
    // dayCityItem.setAttribute("id", data.location.name);
    dayCityItem.classList.add("mainNext2Days__city");
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
    mainNext2Days.appendChild(dayCityItem);
  });

  // cityItem.addEventListener("click",  (event) => {
  //   renderDataCity(data);
  // });
}

//*Queries
async function searchCity(cityName) {
  modalLoading.classList.remove("hidden");
  try {
    const { data, status } = await api(`current.json?q=${cityName}&aqi=no`);
    renderSearchCity(data);
  } catch (e) {
    searchedCityModal.innerText = cityName;
    modalFail.classList.remove("hidden");
    closeModalFailed.addEventListener("click", (e) => {
      modalFail.classList.add("hidden");
    });
  }
  modalLoading.classList.add("hidden");
}

async function searchUserCity(cityName) {
  const { data, status } = await api(
    `forecast.json?q=${cityName}&days=3&aqi=no`
  );
  console.log("userCity", data);
  renderDataCity(data);
}

function getUserCity() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition, showError);
  } else {
    console.log("Geolocation is not supported by this browser.");
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

getUserCity();
