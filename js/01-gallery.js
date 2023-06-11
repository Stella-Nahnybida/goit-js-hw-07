import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector('.gallery');

const galleryItemsEL = galleryItems
  .map(
    galleryItem =>
      `<li class="gallery__item"><a  class="gallery__link" href="${galleryItem.original}"><img class="gallery__image" src="${galleryItem.preview}" data-source="${galleryItem.original}" alt="${galleryItem.description}"/></a></li>`
  )
  .join('\n');

galleryEl.insertAdjacentHTML('afterbegin', galleryItemsEL);

const instance = basicLightbox.create(`<img src="" alt="" >`, {
  onShow: instance => {
    window.addEventListener('keydown', onEscClick);
  },
  onClose: instance => {
    window.addEventListener('keydown', onEscClick);
  },
});

galleryEl.addEventListener('click', onImgClick);

function onImgClick(event) {
  event.preventDefault();

  console.log(event.target);
  if (event.target.nodeName !== 'IMG') {
    return;
  }
  console.log(instance.element());

  const imgOriginal = instance.element().querySelector('img');
  console.log(imgOriginal);

  imgOriginal.src = event.target.dataset.source;
  imgOriginal.alt = event.target.alt;

  instance.show();
}

function onEscClick(event) {
  console.log(event.target);
  if (event.key === 'Escape') {
    instance.close();
    return;
  }
}
