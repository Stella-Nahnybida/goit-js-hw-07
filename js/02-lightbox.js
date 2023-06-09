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

  let target = event.target;
  let clickedItemEl = target.closest('.gallery__item');
  let { original, description } = clickedItemEl.dataset;

  //----------------------------

  let gallery = new SimpleLightbox('.gallery a');
  gallery.on('show.simplelightbox', function () {
    // do something…
  });

  //   const modalEl = basicLightbox.create(
  //     `<img src=${original} alt=${description} width=1400 height=900>`
  //   );
  //   modalEl.show();

  //   const closeModalByEsc = function (event) {
  //     if (event.key === 'Escape') {
  //       console.log('Escape!');
  //       modalEl.close();
  //     }
  //   };

  //   if (modalEl.visible()) {
  //     console.log('addEventListener!');
  //     window.addEventListener('keydown', closeModalByEsc);
  //   } else window.removeEventListener('keydown', closeModalByEsc);
  //-----------------------------
}

function initGallery(items) {
  let galleryItemsEl = createGalleryElement(items);
  galleryItemsEl.addEventListener('click', onGalleryItemClick);
}

initGallery(galleryItems);
