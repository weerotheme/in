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

$(".regular").slick({
  slidesToShow: 2,
  arrows: false,
  centerMode: true,
  centerPadding: "40px",
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
});
