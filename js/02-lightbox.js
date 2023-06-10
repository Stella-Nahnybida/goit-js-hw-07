import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector('.gallery');

const galleryItemsEL = galleryItems
  .map(
    galleryItem =>
      `<li class="gallery__item"><a  class="gallery__link" href="${galleryItem.original}"><img class="gallery__image" src="${galleryItem.preview}" alt="${galleryItem.description}"/></a></li>`
  )
  .join('\n');

galleryEl.insertAdjacentHTML('afterbegin', galleryItemsEL);

galleryEl.addEventListener('click', onGalleryItemClick);

function onGalleryItemClick(event) {
  event.preventDefault();

  let lightbox = new SimpleLightbox('.gallery a', {
    captions: true,
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: '250',
  });
}
