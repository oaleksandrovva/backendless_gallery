const imagesFromGallery = document.querySelectorAll('.gallery__img');
const body = document.querySelector('body');
const popup = document.getElementById('popup');
const popupImage = document.getElementById('image');
const captionText = document.getElementById('caption');
const closeInput = document.querySelector('.popup__close');

const openImage = (clickEvent) => {
  const { src, alt } = clickEvent.target;

  popup.style.display = 'block';
  popupImage.src = src;
  captionText.innerText = alt;
  body.style.overflow = 'hidden';
  popupImage.style.cursor = 'zoom-out';
};

const closeImage = () => {
  popup.style.display = 'none';
  body.style.overflow = 'auto';
};

imagesFromGallery.forEach((image) => {
  image.addEventListener('click', openImage);
});
closeInput.addEventListener('click', closeImage);
popupImage.addEventListener('click', closeImage);
