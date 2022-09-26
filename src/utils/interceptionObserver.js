const options = {
  root: null,
  rootMargin: "0px",
  threshold: 0,
};
const imgOptimization = (entries) => {
  entries
    .filter((e) => e.isIntersecting)
    .forEach((node) => {
      const imgNode = node.target;
      const imgUrl = imgNode.getAttribute("data-src");
      imgNode.setAttribute("src", imgUrl);
    });
};
const sliderItemAnimation = (entries) => {
  entries
    .filter((e) => e.isIntersecting)
    .forEach((node) => {
      const itemNode = node.target;
      itemNode.classList.add("animate__animated", "animate__fadeIn");
    });
};

export const observerSliderHoursItem = new IntersectionObserver(
  sliderItemAnimation,
  options
);
export const observerSliderHoursImg = new IntersectionObserver(
  imgOptimization,
  options
);
