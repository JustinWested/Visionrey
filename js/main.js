const heroImage = document.querySelector('.hero');

const actorsButton = document.querySelector('.actors');
const productionButton = document.querySelector('.production');
const photosButton = document.querySelector('.photos');
const weddingsButton = document.querySelector('.weddings');

actorsButton.addEventListener('mouseover', () => {
  heroImage.style.backgroundImage = 'url(../images/hero_actor.webp)';
});

productionButton.addEventListener('mouseover', () => {
  heroImage.style.backgroundImage = 'url(../images/hero_prod.webp)';
});

photosButton.addEventListener('mouseover', () => {
  heroImage.style.backgroundImage = 'url(../images/hero_photos.webp)';
});

weddingsButton.addEventListener('mouseover', () => {
  heroImage.style.backgroundImage = 'url(../images/hero_wedding.webp)';
});






const carouselInner = document.querySelector(".carousel-inner");
const prevButton = document.querySelector(".carousel-prev");
const nextButton = document.querySelector(".carousel-next");

let slideIndex = 0;

prevButton.addEventListener("click", () => {
  slideIndex--;
  if (slideIndex < 0) {
    slideIndex = 2;
  }
  carouselInner.style.transform = `translateX(-${slideIndex * 33.3333}%)`;
});

nextButton.addEventListener("click", () => {
  slideIndex++;
  if (slideIndex > 2) {
    slideIndex = 0;
  }
  carouselInner.style.transform = `translateX(-${slideIndex * 33.3333}%)`;
});
