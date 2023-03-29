const heroImage = document.querySelector('.hero');

const actorsButton = document.querySelector('.actors');
const productionButton = document.querySelector('.production');
const photosButton = document.querySelector('.photos');
const brandingButton = document.querySelector('.branding');
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

brandingButton.addEventListener('mouseover', () => {
  heroImage.style.backgroundImage = 'url(../images/hero_branding.webp)';
});

weddingsButton.addEventListener('mouseover', () => {
  heroImage.style.backgroundImage = 'url(../images/hero_wedding.webp)';
});

 