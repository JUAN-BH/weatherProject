import nodes from "./nodes.js";
const { sections, elements, modals } = nodes;

export function saveCities(city) {
  let savedCities;
  savedCities = JSON.parse(localStorage.getItem("cities"));
  if (Array.isArray(savedCities)) {
    !savedCities.includes(city) && savedCities.push(city);
  } else {
    savedCities = [city];
  }
  localStorage.setItem("cities", JSON.stringify(savedCities));
}

export function deleteCity(city) {
  const savedCities = JSON.parse(localStorage.getItem("cities"));
  const newCities = savedCities.filter((e) => e !== city);

  localStorage.setItem("cities", JSON.stringify(newCities));
}

export function verifyIfSaved(cityName) {
  const savedCities = JSON.parse(localStorage.getItem("cities"));
  if (Array.isArray(savedCities)) {
    savedCities.includes(cityName)
      ? (elements.saveCityBtn.checked = true)
      : (elements.saveCityBtn.checked = false);
  }
}
