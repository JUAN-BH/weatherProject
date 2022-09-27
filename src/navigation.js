import nodes from "./utils/nodes.js";
const { sections, elements, modals } = nodes;
window.addEventListener("load", navigation, false);
window.addEventListener("hashchange", navigation, false);

window.addEventListener("resize", () => {
  const screenWithd = screen.width;
  if (screenWithd >= 1024) {
    renderDashBoard();
  } else if (screenWithd < 1024) {
    renderMainMobile();
  }
});

function renderSearchMobile() {
  sections.mainHeaderMobile.classList.add("hidden");
  sections.savedCitiesHeaderMobile.classList.add("hidden");
  sections.nextDaysHeaderMobile.classList.add("hidden");
  sections.searchHeaderMobile.classList.remove("hidden");

  sections.mainWeather.classList.add("hidden");
  sections.weatherPerHours.classList.add("hidden");
  sections.savedCities.classList.add("hidden");

  sections.mainNext2DaysContent.style.display = "none";

  sections.mainSearchMobile.classList.remove("hidden");

  elements.searchCityInput.focus();
  sections.mobileNav.classList.add("mobileNav_Hidden");
}
function renderSaveCitiesMobile() {
  sections.mainHeaderMobile.classList.add("hidden");
  sections.searchHeaderMobile.classList.add("hidden");
  sections.savedCitiesHeaderMobile.classList.remove("hidden");
  sections.nextDaysHeaderMobile.classList.add("hidden");

  sections.mainWeather.classList.add("hidden");
  sections.weatherPerHours.classList.add("hidden");
  sections.mainSearchMobile.classList.add("hidden");

  sections.mainNext2DaysContent.style.display = "none";

  sections.savedCities.classList.remove("hidden");

  sections.mobileNav.classList.add("mobileNav_Hidden");
}
function renderMainMobile() {
  sections.searchHeaderMobile.classList.add("hidden");
  sections.savedCitiesHeaderMobile.classList.add("hidden");
  sections.nextDaysHeaderMobile.classList.add("hidden");
  sections.mainHeaderMobile.classList.remove("hidden");
  sections.mainInfo.classList.remove("hidden");

  sections.mainSearchMobile.classList.add("hidden");
  sections.savedCities.classList.add("hidden");

  sections.mainNext2DaysContent.style.display = "none";

  sections.mainWeather.classList.remove("hidden");
  sections.weatherPerHours.classList.remove("hidden");

  sections.mobileNav.classList.add("mobileNav_Hidden");
}
function renderNextDays() {
  sections.mainHeaderMobile.classList.add("hidden");
  sections.savedCitiesHeaderMobile.classList.add("hidden");
  sections.searchHeaderMobile.classList.add("hidden");
  sections.nextDaysHeaderMobile.classList.remove("hidden");

  sections.mainWeather.classList.add("hidden");
  sections.weatherPerHours.classList.add("hidden");
  sections.savedCities.classList.add("hidden");
  sections.mainSearchMobile.classList.add("hidden");

  sections.mainNext2DaysContent.style.display = "flex";

  sections.mobileNav.classList.add("mobileNav_Hidden");
}
function renderSavedCitiesDesktop() {
  sections.mainInfo.classList.add("hidden");
  sections.mainNext2Days.style.display = "none";

  sections.savedCities.classList.remove("hidden");

  elements.dashBoardBtn.classList.remove("btnActiveNavDesktop");
  elements.savedCitiesBtn.classList.add("btnActiveNavDesktop");
}
function renderDashBoard() {
  sections.mainInfo.classList.remove("hidden");
  sections.mainWeather.classList.remove("hidden");
  sections.weatherPerHours.classList.remove("hidden");

  sections.mainNext2Days.style.display = "flex";

  sections.savedCities.classList.add("hidden");

  elements.savedCitiesBtn.classList.remove("btnActiveNavDesktop");
  elements.dashBoardBtn.classList.add("btnActiveNavDesktop");
  sections.mainNext2DaysContent.style.display = "flex";
}

function navigation() {
  const screen = window.innerWidth;
  if (screen >= 1024) {
    renderDashBoard();
  } else if (screen < 1024) {
    renderMainMobile();
  } else if (location.hash.startsWith("/city=") && screen >= 1024) {
    renderDashBoard();
  } else if (location.hash.startsWith("/city=") && screen < 1024) {
    renderMainMobile();
  }
}

elements.twoDaysMore.addEventListener("click", renderNextDays);
elements.arroBackNextDays.addEventListener("click", renderMainMobile);

elements.menuIconMobile.forEach((e) => {
  e.addEventListener("click", () => {
    sections.mobileNav.classList.remove("mobileNav_Hidden");
  });
});
elements.closeNavMobile.addEventListener("click", () => {
  sections.mobileNav.classList.add("mobileNav_Hidden");
});
elements.mobileMainBtn.addEventListener("click", renderMainMobile);
elements.mobileSearchBtn.addEventListener("click", renderSearchMobile);
elements.mobileSavedCitiesBtn.addEventListener("click", renderSaveCitiesMobile);

elements.dashBoardBtn.addEventListener("click", renderDashBoard);
elements.savedCitiesBtn.addEventListener("click", renderSavedCitiesDesktop);
