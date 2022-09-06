function renderSearchMobile() {
  mainHeaderMobile.classList.add("hidden");
  savedCitiesHeaderMobile.classList.add("hidden");
  searchHeaderMobile.classList.remove("hidden");
  mainWeather.classList.add("hidden");
  weatherPerHours.classList.add("hidden");
  mainSavedCitiesMobile.classList.add("hidden");
  mainSearchMobile.classList.remove("hidden");

  mobileNav.classList.toggle("mobileNav_Hidden");
}

function renderSaveCitiesMobile() {
  mainHeaderMobile.classList.add("hidden");
  searchHeaderMobile.classList.add("hidden");
  savedCitiesHeaderMobile.classList.remove("hidden");
  mainWeather.classList.add("hidden");
  weatherPerHours.classList.add("hidden");
  mainSearchMobile.classList.add("hidden");
  mainSavedCitiesMobile.classList.remove("hidden");

  mobileNav.classList.toggle("mobileNav_Hidden");
}

function renderMainMobile() {
  searchHeaderMobile.classList.add("hidden");
  savedCitiesHeaderMobile.classList.add("hidden");
  mainHeaderMobile.classList.remove("hidden");
  mainSearchMobile.classList.add("hidden");
  mainSavedCitiesMobile.classList.add("hidden");
  mainWeather.classList.remove("hidden");
  weatherPerHours.classList.remove("hidden");

  mobileNav.classList.toggle("mobileNav_Hidden");
}
menuIconMobile.forEach((e) => {
  e.addEventListener("click", () => {
    mobileNav.classList.toggle("mobileNav_Hidden");
  });
});
closeNavMobile.addEventListener("click", () => {
  mobileNav.classList.toggle("mobileNav_Hidden");
});
mobileMainBtn.addEventListener("click", renderMainMobile);
mobileSearchBtn.addEventListener("click", renderSearchMobile);
mobileSavedCitiesBtn.addEventListener("click", renderSaveCitiesMobile);
