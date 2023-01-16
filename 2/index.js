function initSlider() {
  const img = document.getElementById("img");
  const slides = ["img2.jpg", "img3.jpg", "img1.jpg"];
  let start = 0;
  function slider() {
    if (start < slides.length) {
      start = start + 1;
    } else {
      start = 1;
    }
    img.innerHTML = `<img alt=${slides[start - 1]} src="./images/${
      slides[start - 1]
    }">`;
  }
  setInterval(slider, 3000);
}

document.addEventListener("DOMContentLoaded", () => {
  initSlider();
});
