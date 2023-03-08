const heroImage = document.querySelector('.hero');

document.querySelector('.actors').addEventListener('mouseover', () => {
    heroImage.style.backgroundImage = 'url(../images/hero_actor.webp)';
  });
document.querySelector('.production').addEventListener('mouseover', () => {
    heroImage.style.backgroundImage = 'url(../images/hero_prod.webp)';
  });
document.querySelector('.photos').addEventListener('mouseover', () => {
    heroImage.style.backgroundImage = 'url(../images/hero_photos.webp)';
  });
document.querySelector('.branding').addEventListener('mouseover', () => {
    heroImage.style.backgroundImage = 'url(../images/hero_branding.webp)';
  });
document.querySelector('.weddings').addEventListener('mouseover', () => {
    heroImage.style.backgroundImage = 'url(../images/hero_wedding.webp)';
  });
/*
document.querySelector('.actors').addEventListener('mouseover', () => {
  heroImage.classList.add('heroImageActors');
});
document.querySelector('.actors').addEventListener('mouseout', () => {
  heroImage.classList.remove('heroImageActors');
});

document.querySelector('.production').addEventListener('mouseover', () => {
  heroImage.classList.add('heroImageProduction');
});
document.querySelector('.production').addEventListener('mouseout', () => {
  heroImage.classList.remove('heroImageProduction');   
});

document.querySelector('.photos').addEventListener('mouseover', () => {
  heroImage.classList.add('heroImagePhotos');
});
document.querySelector('.photos').addEventListener('mouseout', () => {
  heroImage.classList.remove('heroImagePhotos');
});

document.querySelector('.branding').addEventListener('mouseover', () => {
  heroImage.classList.add('heroImageBranding');
});
document.querySelector('.branding').addEventListener('mouseout', () => {
  heroImage.classList.remove('heroImageBranding');
});

document.querySelector('.weddings').addEventListener('mouseover', () => {
  heroImage.classList.add('heroImageWeddings');
});
document.querySelector('.weddings').addEventListener('mouseout', () => {
  heroImage.classList.remove('heroImageWeddings');
}); */