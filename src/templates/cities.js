import nodes from "../utils/nodes.js";
import convertTime from "../utils/convertTime.js";
import imageToRender from "../utils/weatherImage.js";
import { verifyIfSaved } from "../utils/localStorage.js";
import {
  observerSliderHoursImg,
  observerSliderHoursItem,
} from "../utils/interceptionObserver.js";
const { sections, elements, modals } = nodes;
const api = axios.create({
  baseURL: "https://weatherapi-com.p.rapidapi.com/",
  headers: {
    "X-RapidAPI-Key": "57be9319ebmsh663cc9b4c17c821p1f1099jsneea5309eaf01",
    "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
  },
});

class City {
  constructor(data) {
    this.data = data;
  }

  renderNextDays(data) {
    sections.mainNext2DaysContent.innerHTML = "";
    data.forEach((e) => {
      const dayCityItem = document.createElement("div");
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

      dayCityItem.append(date, cityInfo);
      sections.mainNext2DaysContent.appendChild(dayCityItem);
    });
  }

  renderDataCity() {
    const sunriseTime24h = parseInt(
      convertTime(this.data.forecast.forecastday[0].astro.sunrise).replace(
        /:/g,
        ""
      )
    );
    const sunsetTime24h = parseInt(
      convertTime(this.data.forecast.forecastday[0].astro.sunset).replace(
        /:/g,
        ""
      )
    );
    const currentTime = parseInt(
      this.data.location.localtime.split(" ")[1].replace(/:/g, "")
    );
    const condition = this.data.current.condition.text.toLowerCase();

    imageToRender(
      sunriseTime24h,
      sunsetTime24h,
      currentTime,
      condition,
      sections.mainWeather
    );

    elements.titleCityDesktop.innerText = this.data.location.name;
    elements.cityNameHeader.innerText = this.data.location.name;
    elements.sunriseInfo.innerText =
      this.data.forecast.forecastday[0].astro.sunrise;
    elements.sunsetInfo.innerText =
      this.data.forecast.forecastday[0].astro.sunset;
    elements.dateInfo.innerText = this.data.forecast.forecastday[0].date;
    elements.hourInfo.innerText = this.data.location.localtime.split(" ")[1];
    elements.temperature.innerText = this.data.current.temp_c + "°C";
    elements.typeWeatherInfo.innerText = this.data.current.condition.text;
    elements.pressure.innerText = this.data.current.pressure_mb + "mb";
    elements.humadity.innerText = this.data.current.humidity + "%";
    elements.windSpeed.innerText = this.data.current.wind_kph + "km/h";

    sections.weatherPerHoursSlider.innerHTML = "";
    this.data.forecast.forecastday[0].hour
      .map((e) => {
        const hourItem = document.createElement("div");
        hourItem.className = "sliderWeatherHours__weatherHour";
        const hour = document.createElement("h3");
        hour.className = "weatherHour__hour";
        hour.innerText = e.time.split(" ")[1];
        const imgCondition = document.createElement("img");
        imgCondition.className = "weatherHour__icon";
        // imgCondition.alt = "";
        imgCondition.setAttribute("data-src", e.condition.icon);
        const temp = document.createElement("h3");
        temp.className = "weatherHour__temp";
        temp.innerText = `${e.temp_c}°C`;

        hourItem.append(hour, imgCondition, temp);
        sections.weatherPerHoursSlider.append(hourItem);
        observerSliderHoursItem.observe(hourItem);
        observerSliderHoursImg.observe(imgCondition);
      })
      .join(" ");

    this.renderNextDays(this.data.forecast.forecastday);
    location.hash = `city=${this.data.location.name}`;
    verifyIfSaved(elements.titleCityDesktop.innerText);
  }

  renderSearchCityMobile() {
    const cityItem = document.createElement("article");
    cityItem.style.background = `url('/src/assets/img/customCity_Crop.png') center/cover no-repeat`;
    cityItem.setAttribute("id", this.data.location.name);
    cityItem.classList.add("mainSearchMobile__city");
    const cityName = document.createElement("h2");
    cityName.classList.add("cityName");
    const cityNameFound = this.data.location.name;
    cityName.innerText = cityNameFound;
    cityItem.appendChild(cityName);

    let citiesSearched = [];
    for (const city of sections.mainSearchMobile.childNodes.entries()) {
      citiesSearched.push(city);
    }
    citiesSearched = citiesSearched
      .flat()
      .filter((e) => isNaN(e))
      .map((e) => e.id);

    if (!citiesSearched.includes(cityItem.getAttribute("id"))) {
      sections.mainSearchMobile.appendChild(cityItem);
    }

    cityItem.addEventListener("click", async (event) => {
      try {
        const { data, status } = await api(
          `forecast.json?q=${cityNameFound}&days=3`
        );
        this.renderDataCity(data);
      } catch (error) {
        if (error.response.status === 404) {
          modals.modalFail.classList.remove("hidden");
          modals.errorMessage.innerText =
            "Sorry, there was an error, please try again";
          modals.closeModalFailed.innerText = "Ok";
          modals.closeModalFailed.addEventListener("click", (e) => {
            modals.modalFail.classList.add("hidden");
          });
          modals.modalLoading.classList.add("hidden");
        } else {
          modals.modalExceedPetitions.classList.remove("hidden");
        }
      }
    });
  }
}

export default City;
