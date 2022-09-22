const $ = (element) => document.querySelector(element);
const $$ = (element) => document.querySelectorAll(element);
//*Sections
const mainHeaderMobile = $(".headerMobileMain");
const searchHeaderMobile = $(".headerMobileSearch");
const savedCitiesHeaderMobile = $(".headerMobileSaved");
const nextDaysHeaderMobile = $(".headerMobileNextDays");
const mobileNav = $(".mobileNav");
const mainWeather = $(".mainWeather");
const weatherPerHours = $(".weatherPerHours");
const weatherPerHoursSlider = $(".weatherPerHours__sliderWeatherHours");
const mainSearchMobile = $(".mainSearchMobile");
const savedCities = $(".savedCities");
// console.log("from nodes", savedCities);

// const mainNext2DaysMobile = $(".mainNext2DaysMobile");
//*Sections Desktop
const mainInfo = $(".main");
const mainHeaderDesktop = $(".main__header");
const mainNext2Days = $(".mainNext2Days");
const mainNext2DaysContent = $(".mainNext2Days__content");
//*Elements
const arroBackNextDays = $(".headerMobileNextDays__arrowBack");
const menuIconMobile = $$(".menuIconMobile");
const closeNavMobile = $(".mobileNav__closeMobileNav");
const mobileMainBtn = $(".mobileNav__main");
const mobileSearchBtn = $(".mobileNav__search");
const mobileSavedCitiesBtn = $(".mobileNav__saved");
const darkModeBtn = $$(".darkModeBtn");
const cityNameHeader = $(".headerMobileMain__cityName");
const saveCityBtn = $(".saveCityBtn");
const searchCityInput = $(".searchCityInput");
const sunriseInfo = $(".sunriseInfo");
const sunsetInfo = $(".sunsetInfo");
const dateInfo = $(".dateInfo");
const hourInfo = $(".hourInfo");
const temperature = $(".tempInfo");
const typeWeatherInfo = $(".typeWeatherInfo");
const pressure = $(".pressureInfo");
const humadity = $(".humadityInfo");
const windSpeed = $(".windSpeedInfo");
const twoDaysMore = $(".twoDaysMore");
//*Elements desktop
const searchCityDesktop = $(".searchCityDesktop");
const titleCityDesktop = $(".titleCityDesktop__title");
const dashBoardBtn = $(".navDesktop__dashBoardBtn");
const savedCitiesBtn = $(".navDesktop__saveCityBtn");

//*Modals
const modalLoading = $(".modalLoading");
const modalFirstLoading = $(".modalFirstLoading");
const modalFail = $(".modalFail");

const searchedCityModal = $(".citySearched");
const closeModalFailed = $(".closeModalFail");
