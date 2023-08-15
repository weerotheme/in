// JavaScript for the accordion functionality
document.addEventListener("DOMContentLoaded", function () {
  const accordionItems = document.querySelectorAll(".item");

  accordionItems.forEach(function (item) {
    const heading = item.querySelector(".heading");
    const content = item.querySelector(".content");

    content.style.display = "none";

    heading.addEventListener("click", function () {
      content.style.display =
        content.style.display === "none" ? "block" : "none";

      item.classList.toggle("open");
    });
  });
});

// =========slider ===========;

document.addEventListener("DOMContentLoaded", function () {
  const items = document.querySelectorAll(".slider-container .item");
  const dotLength = document.querySelector(".dot-length");
  const totalItems = items.length;
  let currentIndex = 0;

  function updateDotLengthWidth() {
    const width = (currentIndex / (totalItems - 1)) * 100;
    dotLength.style.width = width + "%";
  }

  function showSlide(index) {
    items[currentIndex].classList.remove("active");
    items[index].classList.add("active");
    currentIndex = index;
    updateDotLengthWidth();
  }

  function showNextSlide() {
    const nextIndex = (currentIndex + 1) % totalItems;
    showSlide(nextIndex);
  }

  const sliderInterval = setInterval(showNextSlide, 5000);

  const sliderContainer = document.querySelector(".slider-container");
  sliderContainer.addEventListener("mouseenter", function () {
    clearInterval(sliderInterval);
  });

  sliderContainer.addEventListener("mouseleave", function () {
    sliderInterval = setInterval(showNextSlide, 5000);
  });

  showSlide(currentIndex);
});
