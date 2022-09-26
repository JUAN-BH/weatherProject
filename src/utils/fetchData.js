import City from "../templates/cities.js";
import nodes from "./nodes.js";
const { sections, elements, modals } = nodes;
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

export async function initialCity() {
  try {
    modals.modalLoading.classList.remove("hidden");
    const { data, status } = await api(`forecast.json?q=Cali&days=3`);
    const city = new City(data);
    city.renderDataCity();
    modals.modalLoading.classList.add("hidden");
  } catch (e) {
    modals.modalExceedPetitions.classList.remove("hidden");
  }
}

export async function searchCity(cityName) {
  try {
    modals.modalLoading.classList.remove("hidden");
    const { data, status } = await api(`forecast.json?q=${cityName}&days=3`);

    const city = new City(data);
    city.renderDataCity();
    city.renderSearchCityMobile();
    modals.modalLoading.classList.add("hidden");
  } catch (e) {
    if (error.response.status === 404) {
      modals.errorMessage.innerText = `We couldn't find the city ${cityName}`;
      modals.modalFail.classList.remove("hidden");
      modals.closeModalFailed.addEventListener("click", (e) => {
        modals.modalFail.classList.add("hidden");
      });
      modals.modalLoading.classList.add("hidden");
    } else {
      modals.modalExceedPetitions.classList.remove("hidden");
    }
  }
}

export async function searchUserCity(cityName) {
  try {
    const { data, status } = await api(`forecast.json?q=${cityName}&days=3`);
    const city = new City(data);
    city.renderDataCity();
  } catch (error) {
    if (error.response.status === 404) {
      modals.errorMessage.innerText = `Sorry we couldn't find the city where you are locate in, but you can still search other cities'`;
      modals.closeModalFailed.innerText = "Ok";
      modals.modalFail.classList.remove("hidden");
      modals.closeModalFailed.addEventListener("click", (e) => {
        modals.modalFail.classList.add("hidden");
      });
      modals.modalLoading.classList.add("hidden");
      await initialCity();
    } else {
      modals.modalExceedPetitions.classList.remove("hidden");
    }
  }
}
