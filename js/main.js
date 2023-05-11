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

document.addEventListener("DOMContentLoaded", function() {
  const hamburger = document.querySelector("#hamburger");
  const mobileNav = document.querySelector(".mobile-nav");

  hamburger.addEventListener("click", function() {
    mobileNav.classList.toggle("show");
  });

  mobileNav.addEventListener("click", function(e) {
    if (e.target === mobileNav) {
      mobileNav.classList.toggle("show");
    }
  });
});





document.addEventListener("DOMContentLoaded", () => {
  const headshots = document.querySelectorAll(".headshot");
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");

  function addLightboxListener(imageElement) {
    imageElement.addEventListener("click", () => {
      lightboxImg.src = imageElement.src;
      lightboxImg.alt = imageElement.alt;
      lightbox.classList.remove("hidden");
    });
  }

  lightbox.addEventListener("click", () => {
    lightbox.classList.add("hidden");
  });

  headshots.forEach(headshot => {
    addLightboxListener(headshot);
  });

  document.querySelectorAll(".lightbox-image").forEach(lightboxImage => {
    addLightboxListener(lightboxImage);
  });
});


document.addEventListener("DOMContentLoaded", function() {
  const moreDetails = document.querySelectorAll(".more-details");

  moreDetails.forEach((element) => {
    element.addEventListener("click", function() {
      const weddingDescription = document.querySelector(".wedding-height");
      weddingDescription.classList.toggle("show");
    });
  });
});

document.addEventListener("DOMContentLoaded", function() {
  const moreDetails = document.querySelectorAll(".more-details");

  moreDetails.forEach((element) => {
    element.addEventListener("click", function() {
      const weddingDescription = document.querySelector(".wedding-description");
      weddingDescription.classList.toggle("unhide");
    });
  });
});




document.addEventListener("DOMContentLoaded", function() {
  const moreDetails = document.querySelectorAll(".more-details-two");

  moreDetails.forEach((element) => {
    element.addEventListener("click", function() {
      const weddingDescription = document.querySelector(".wedding-height-two");
      weddingDescription.classList.toggle("show");
    });
  });
});

document.addEventListener("DOMContentLoaded", function() {
  const moreDetails = document.querySelectorAll(".more-details-two");

  moreDetails.forEach((element) => {
    element.addEventListener("click", function() {
      const weddingDescription = document.querySelector(".wedding-description-two");
      weddingDescription.classList.toggle("unhide");
    });
  });
});


