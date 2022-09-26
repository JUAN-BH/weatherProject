import nodes from "./utils/nodes.js";
import { searchCity, searchUserCity } from "./utils/fetchData.js";
import { deleteCity, saveCities, verifyIfSaved } from "./utils/localStorage.js";
import { renderSavedCities } from "./templates/savedCities.js";
import { getUserCity } from "./utils/userCity.js";
const { sections, elements, modals } = nodes;

elements.searchCityInput.addEventListener("keypress", (e) => {
  if (e.keyCode === 13) {
    const inputValue =
      elements.searchCityInput.value.charAt(0).toUpperCase() +
      elements.searchCityInput.value.slice(1);
    searchCity(inputValue);
  }
});

elements.searchCityDesktop.addEventListener("keypress", (e) => {
  if (e.keyCode === 13) {
    const inputValue =
      elements.searchCityDesktop.value.charAt(0).toUpperCase() +
      elements.searchCityDesktop.value.slice(1);
    searchCity(inputValue);
  }
});

for (let i = 0; i < elements.darkModeBtn.length; i++) {
  elements.darkModeBtn[i].addEventListener("change", () => {
    document.body.classList.toggle("dark");
    if (elements.darkModeBtn[i].checked) {
      elements.darkModeBtn[1].checked = true;
    } else {
      elements.darkModeBtn[1].checked = false;
    }
  });
  elements.darkModeBtn[1].addEventListener("change", () => {
    document.body.classList.toggle("dark");
    if (elements.darkModeBtn[1].checked) {
      elements.darkModeBtn[0].checked = true;
    } else {
      elements.darkModeBtn[0].checked = false;
    }
  });
}

elements.saveCityBtn.addEventListener("change", (e) => {
  const city = elements.titleCityDesktop.innerText;

  if (!e.target.checked) {
    deleteCity(city);
  } else {
    saveCities(city);
  }
  renderSavedCities();
});

getUserCity();
renderSavedCities();
