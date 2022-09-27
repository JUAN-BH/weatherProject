import City from "./cities.js";
import nodes from "../utils/nodes.js";
const { sections, elements, modals } = nodes;
const api = axios.create({
  baseURL: "https://weatherapi-com.p.rapidapi.com/",
  headers: {
    "X-RapidAPI-Key": process.env.WEATHER_API,
    "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
  },
});

export function renderSavedCities() {
  const savedCitiesContainer = document.querySelector(".savedCities");
  savedCitiesContainer.innerHTML = "";
  const savedCities = JSON.parse(localStorage.getItem("cities"));

  if (Array.isArray(savedCities) && savedCities.length > 0) {
    savedCities.map((e) => {
      savedCities.innerHTML = "";
      const cityItem = document.createElement("article");
      cityItem.style.background = `url('assets/img/customCity_Crop.png') center/cover no-repeat`;
      cityItem.classList.add("savedCities__city");
      cityItem.setAttribute("id", e);
      const cityName = document.createElement("h2");
      cityName.classList.add("cityName");
      // cityName.setAttribute("id", e);
      cityName.innerText = e;
      cityItem.appendChild(cityName);
      savedCitiesContainer.appendChild(cityItem);

      cityItem.addEventListener("click", async (e) => {
        try {
          modals.modalLoading.classList.remove("hidden");
          const { data, status } = await api(
            `forecast.json?q=${e.target.id}&days=3`
          );
          location.hash = `city=${e.target.id}`;
          modals.modalLoading.classList.add("hidden");
          const city = new City(data);
          city.renderDataCity();
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
    });
  } else {
    const noCities = document.createElement("h2");
    noCities.classList.add("noCitiesFeedBack");
    noCities.innerHTML =
      "It seems that you haven't saved any city yet <br>  (´。＿。｀)";
    savedCitiesContainer.appendChild(noCities);
  }
}
