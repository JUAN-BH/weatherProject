window.addEventListener("DOMContentLoaded", navigation, false);
window.addEventListener("hashchange", navigation, false);

function renderSearchMobile() {
  mainHeaderMobile.classList.add("hidden");
  savedCitiesHeaderMobile.classList.add("hidden");
  nextDaysHeaderMobile.classList.add("hidden");
  searchHeaderMobile.classList.remove("hidden");

  mainWeather.classList.add("hidden");
  weatherPerHours.classList.add("hidden");
  mainSavedCitiesMobile.classList.add("hidden");
  mainNext2Days.classList.add("hidden");
  mainSearchMobile.classList.remove("hidden");

  searchCityInput.focus();
  mobileNav.classList.add("mobileNav_Hidden");
}
function renderSaveCitiesMobile() {
  mainHeaderMobile.classList.add("hidden");
  searchHeaderMobile.classList.add("hidden");
  savedCitiesHeaderMobile.classList.remove("hidden");
  nextDaysHeaderMobile.classList.add("hidden");

  mainWeather.classList.add("hidden");
  weatherPerHours.classList.add("hidden");
  mainSearchMobile.classList.add("hidden");
  mainNext2Days.classList.add("hidden");
  mainSavedCitiesMobile.classList.remove("hidden");

  mobileNav.classList.add("mobileNav_Hidden");
}
function renderMainMobile() {
  searchHeaderMobile.classList.add("hidden");
  savedCitiesHeaderMobile.classList.add("hidden");
  nextDaysHeaderMobile.classList.add("hidden");
  mainHeaderMobile.classList.remove("hidden");

  mainSearchMobile.classList.add("hidden");
  mainSavedCitiesMobile.classList.add("hidden");
  mainNext2Days.classList.add("hidden");
  mainWeather.classList.remove("hidden");
  weatherPerHours.classList.remove("hidden");

  mobileNav.classList.add("mobileNav_Hidden");
}
function renderNextDays() {
  mainHeaderMobile.classList.add("hidden");
  savedCitiesHeaderMobile.classList.add("hidden");
  searchHeaderMobile.classList.add("hidden");
  nextDaysHeaderMobile.classList.remove("hidden");

  mainWeather.classList.add("hidden");
  weatherPerHours.classList.add("hidden");
  mainSavedCitiesMobile.classList.add("hidden");
  mainSearchMobile.classList.add("hidden");
  mainNext2Days.classList.remove("hidden");

  mobileNav.classList.add("mobileNav_Hidden");
}

function navigation() {
  if (location.hash.startsWith("#dataCity=")) {
    renderMainMobile();
  }
}

twoDaysMore.addEventListener("click", renderNextDays);
arroBackNextDays.addEventListener("click", renderMainMobile);

menuIconMobile.forEach((e) => {
  e.addEventListener("click", () => {
    mobileNav.classList.remove("mobileNav_Hidden");
  });
});
closeNavMobile.addEventListener("click", () => {
  mobileNav.classList.add("mobileNav_Hidden");
});
mobileMainBtn.addEventListener("click", renderMainMobile);
mobileSearchBtn.addEventListener("click", renderSearchMobile);
mobileSavedCitiesBtn.addEventListener("click", renderSaveCitiesMobile);
