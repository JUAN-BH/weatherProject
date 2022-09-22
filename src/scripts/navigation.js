window.addEventListener("DOMContentLoaded", navigation, false);
window.addEventListener("hashchange", navigation, false);

window.addEventListener("resize", () => {
  if (window.screen.width > 1024) {
    renderDashBoard();
    mainNext2DaysContent.style.display = "flex";
  } else {
    mainNext2DaysContent.style.display = "none";
  }
});

function renderSearchMobile() {
  mainHeaderMobile.classList.add("hidden");
  savedCitiesHeaderMobile.classList.add("hidden");
  nextDaysHeaderMobile.classList.add("hidden");
  searchHeaderMobile.classList.remove("hidden");

  mainWeather.classList.add("hidden");
  weatherPerHours.classList.add("hidden");
  savedCities.classList.add("hidden");

  if (window.screen.width > 1024) {
    mainNext2DaysContent.style.display = "flex";
  } else {
    mainNext2DaysContent.style.display = "none";
  }

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

  if (window.screen.width > 1024) {
    mainNext2DaysContent.style.display = "flex";
  } else {
    mainNext2DaysContent.style.display = "none";
  }

  savedCities.classList.remove("hidden");

  mobileNav.classList.add("mobileNav_Hidden");
}
function renderMainMobile() {
  searchHeaderMobile.classList.add("hidden");
  savedCitiesHeaderMobile.classList.add("hidden");
  nextDaysHeaderMobile.classList.add("hidden");
  mainHeaderMobile.classList.remove("hidden");

  mainSearchMobile.classList.add("hidden");
  savedCities.classList.add("hidden");

  if (window.screen.width > 1024) {
    mainNext2DaysContent.style.display = "flex";
  } else {
    mainNext2DaysContent.style.display = "none";
  }

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
  savedCities.classList.add("hidden");
  mainSearchMobile.classList.add("hidden");

  if (window.screen.width > 1024) {
    mainNext2DaysContent.style.display = "flex";
  } else {
    mainNext2DaysContent.style.display = "flex";
  }

  mobileNav.classList.add("mobileNav_Hidden");
}
function renderSavedCitiesDesktop() {
  mainInfo.classList.add("hidden");
  // console.log(mainNext2Days);
  mainNext2Days.style.display = "none";

  savedCities.classList.remove("hidden");

  dashBoardBtn.classList.remove("btnActiveNavDesktop");
  savedCitiesBtn.classList.add("btnActiveNavDesktop");
}
function renderDashBoard() {
  mainInfo.classList.remove("hidden");
  mainWeather.classList.remove("hidden");
  weatherPerHours.classList.remove("hidden");

  mainNext2Days.style.display = "flex";

  savedCities.classList.add("hidden");

  savedCitiesBtn.classList.remove("btnActiveNavDesktop");
  dashBoardBtn.classList.add("btnActiveNavDesktop");
  console.log("ENTRO ENTRO");
}

function navigation() {
  if (location.hash.startsWith("#dataCity=")) {
    renderMainMobile();
    renderDashBoard();
  } else {
    renderMainMobile();
    renderDashBoard();
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

dashBoardBtn.addEventListener("click", renderDashBoard);
savedCitiesBtn.addEventListener("click", renderSavedCitiesDesktop);
