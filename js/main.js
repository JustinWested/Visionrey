/* 

const heroImage = document.querySelector('.hero');

const actorsButton = document.querySelector('.actors');
const productionButton = document.querySelector('.production');
const photosButton = document.querySelector('.photos');
const weddingsButton = document.querySelector('.weddings');

actorsButton.addEventListener('mouseover', () => {
  console.log('actorsButton hover');
  heroImage.style.backgroundImage = 'url(../images/hero_actor.webp)';
});

productionButton.addEventListener('mouseover', () => {
  console.log('productionButton hover');
  heroImage.style.backgroundImage = 'url(../images/hero_prod.webp)';
});

photosButton.addEventListener('mouseover', () => {
  heroImage.style.backgroundImage = 'url(../images/hero_photos.webp)';
});

weddingsButton.addEventListener('mouseover', () => {
  heroImage.style.backgroundImage = 'url(../images/hero_wedding.webp)';
});

*/


document.addEventListener("DOMContentLoaded", function() {
  const hamburger = document.querySelector("#hamburger");
  const mobileNav = document.querySelector(".mobile-nav");
  const mobileNavList = document.querySelector(".mobile-nav > ul");

  // Toggle visibility when the hamburger is clicked
  hamburger.addEventListener("click", function() {
    mobileNav.classList.toggle("show");
  });

  // Hide the mobile navigation when you click outside of the actual navigation list
  mobileNav.addEventListener("click", function(e) {
    if (e.target === mobileNav) {  // Check if you clicked on the mobileNav and not its children
      mobileNav.classList.remove("show");
    }
  });

  // Prevent the mobileNav event from firing when you click on the navigation list itself
  mobileNavList.addEventListener("click", function(e) {
    e.stopPropagation(); // Prevents the event from bubbling up to the mobileNav
  });
});




//Production page youtube video loader

function loadVideo(container) {
  var videoId = container.getAttribute('data-video-id');
  var embedCode = '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/' + videoId + '?autoplay=1" frameborder="0" allowfullscreen></iframe>';
  container.innerHTML = embedCode;
}



