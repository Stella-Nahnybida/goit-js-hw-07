import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryItemsEl = document.querySelector('.gallery');

function createGalleryElement(items) {
  let galleryElements = items.map(item => {
    let itemEl = document.createElement('li');
    itemEl.classList.add('gallery__item');
    itemEl.dataset.preview = item.preview;
    itemEl.dataset.original = item.original;
    itemEl.dataset.description = item.description;

    let linkEl = document.createElement('a');
    linkEl.classList.add('gallery__link');
    linkEl.href = item.original;
    linkEl.title = item.description;

    itemEl.appendChild(linkEl);

    let imgEl = document.createElement('img');
    imgEl.classList.add('gallery__image');
    imgEl.src = item.preview;
    imgEl.alt = item.description;

    linkEl.appendChild(imgEl);
    console.log(itemEl);
    return itemEl;
  });

  galleryItemsEl.append(...galleryElements);
  return galleryItemsEl;
}

function onGalleryItemClick(event) {
  event.preventDefault();

  let lightbox = new SimpleLightbox('.gallery a', {
    captions: true,
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: '250',
  });
}

function initGallery(items) {
  let galleryItemsEl = createGalleryElement(items);
  galleryItemsEl.addEventListener('click', onGalleryItemClick);
}

initGallery(galleryItems);
