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
const mainSavedCitiesMobile = $(".mainSavedCitiesMobile");
const mainNext2Days = $(".mainNext2Days");
//*Elements
const arroBackNextDays = $(".headerMobileNextDays__arrowBack");
const menuIconMobile = $$(".menuIconMobile");
const closeNavMobile = $(".mobileNav__closeMobileNav");
const mobileMainBtn = $(".mobileNav__main");
const mobileSearchBtn = $(".mobileNav__search");
const mobileSavedCitiesBtn = $(".mobileNav__saved");
const mobileDarkModeBtn = $(".darkModeBtn");
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

const searchedCityModal = $(".citySearched");
const closeModalFailed = $(".closeModalFail");
//*Modals
const modalLoading = $(".modalLoading");
const modalFirstLoading = $(".modalFirstLoading");
const modalFail = $(".modalFail");
