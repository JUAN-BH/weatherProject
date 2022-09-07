// 2f008c5109bb4b9898b123449222908
// async function exampleGetAPIWeather() {
//   const res = await fetch(
//     "http://api.weatherapi.com/v1/current.json?key=2f008c5109bb4b9898b123449222908&q=Cali&aqi=no"
//   );
//   const data = await res.json();
//   console.log(data);
// }
// exampleGetAPIWeather();

// const api = axios.create({
//   baseURL: "http://api.weatherapi.com/v1/",
//   params: {
//     key: "2f008c5109bb4b9898b123449222908",
//   },
// });
class city {
  constructor(cityName) {
    this.cityName = cityName;
  }
}
