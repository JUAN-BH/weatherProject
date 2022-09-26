export default function imageToRender(
  sunrise,
  sunset,
  current,
  condition,
  node
) {
  if (sunrise < current && sunset > current) {
    if (condition.includes("cloudy")) {
      node.style.background = `url('/src/assets/img/cloudy_light.png') center/cover no-repeat`;
    } else if (condition.includes("sunny")) {
      node.style.background = `url('/src/assets/img/sunny_light.png') center/cover no-repeat`;
    } else if (condition.includes("rain") || condition.includes("drizzle")) {
      node.style.background = `url('/src/assets/img/rain_light.png') center/cover no-repeat`;
    } else if (condition.includes("clear")) {
      node.style.background = `url('/src/assets/img/clear__light.png') center/cover no-repeat`;
    } else {
      node.style.background = `url('/src/assets/img/cloudy_light.png') center/cover no-repeat`;
    }
  } else {
    if (condition.includes("cloudy")) {
      node.style.background = `url('/src/assets/img/cloudy__night.png') center/cover no-repeat`;
    } else if (condition.includes("rain") || condition.includes("drizzle")) {
      node.style.background = `url('/src/assets/img/rain__night.png') center/cover no-repeat`;
    } else if (condition.includes("clear")) {
      node.style.background = `url('/src/assets/img/clear__night.png') center/cover no-repeat`;
    } else {
      node.style.background = `url('/src/assets/img/cloudy__night.png') center/cover no-repeat`;
    }
  }
}
