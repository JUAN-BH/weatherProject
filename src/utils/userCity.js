import nodes from "./nodes.js";
import { searchUserCity, initialCity } from "./fetchData.js";
const { sections, elements, modals } = nodes;

const apiLocation = axios.create({
  baseURL: "https://us1.locationiq.com/v1/",
  params: {
    key: process.env.LOCATIONAPI,
  },
});

async function showPosition(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  await displayLocation(lat, lon);
}

async function showError(error) {
  // switch (error.code) {
  //   case error.PERMISSION_DENIED:
  //     alert("User denied the request for Geolocation.");
  //     break;
  //   case error.POSITION_UNAVAILABLE:
  //     alert("Location information is unavailable.");
  //     break;
  //   case error.TIMEOUT:
  //     alert("The request to get user location timed out.");
  //     break;
  //   case error.UNKNOWN_ERROR:
  //     alert("An unknown error occurred.");
  //     break;
  // }
  await initialCity();

  modals.modalFirstLoading.classList.add("hidden");
  modals.modalFail.classList.remove("hidden");

  modals.errorMessage.innerText = `We didn't get your location, but you can still search whatever city you like`;
  modals.closeModalFailed.innerText = "Ok";
  modals.closeModalFailed.addEventListener("click", (e) => {
    modals.modalFail.classList.add("hidden");
  });
}

async function displayLocation(latitude, longitude) {
  try {
    const { data, status } = await apiLocation(
      `reverse?format=json&lat=${latitude}&lon=${longitude}`
    );
    const city = data.address.city;
    if (city === "Perímetro Urbano Santiago de Cali") {
      await searchUserCity("cali");
    } else {
      await searchUserCity(city);
    }

    modals.modalFirstLoading.classList.add("hidden");
  } catch (error) {
    modals.modalFail.classList.remove("hidden");

    modals.errorMessage.innerText = `Sorry there was an error getting your location, but you can still search whatever city you like`;
    modals.closeModalFailed.innerText = "Ok";
    modals.closeModalFailed.addEventListener("click", (e) => {
      modals.modalFail.classList.add("hidden");
    });
    await initialCity();
    modals.modalFirstLoading.classList.add("hidden");
  }
}

export async function getUserCity() {
  if (document.readyState !== "complete") {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
      // alert("Geolocation is not supported by this browser.");
      modals.modalFirstLoading.classList.add("hidden");
      modals.modalFail.classList.remove("hidden");

      modals.errorMessage.innerText = `Sorry geolocation isn't supported by this browser, but you can still search whatever city you like`;
      modals.closeModalFailed.innerText = "Ok";
      modals.closeModalFailed.addEventListener("click", (e) => {
        modals.modalFail.classList.add("hidden");
      });
      await initialCity();
    }
  }
}
