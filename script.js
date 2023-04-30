// loader
document.querySelector("#btn").addEventListener("click", function() {
    document.getElementById("loader").classList.toggle("backstage__loader--active");
})

// slider
let swiper = new Swiper(".swiper", {
    slidesPerView: 'auto',
    spaceBetween: 24,
    pagination: {
        el: ".carousel__pagination",
        type: "progressbar",
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});