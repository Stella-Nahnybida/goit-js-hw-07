import { galleryItems } from './gallery-items.js';
// Change code below this line

// const bodyEl = document.querySelector('body');
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
    itemEl.appendChild(linkEl);

    let imgEl = document.createElement('img');
    imgEl.classList.add('gallery__image');
    imgEl.src = item.preview;
    imgEl.dataset.source = item.original;
    imgEl.alt = item.description;

    linkEl.appendChild(imgEl);
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

  const modalEl = basicLightbox.create(
    `<img src=${original} alt=${description} width=1400 height=900>`
  );
  modalEl.show();

  const closeModalByEsc = function (event) {
    if (event.key === 'Escape') {
      console.log('Escape!');
      modalEl.close();
    }
  };

  if (modalEl.visible()) {
    console.log('addEventListener!');
    window.addEventListener('keydown', closeModalByEsc);
  } else window.removeEventListener('keydown', closeModalByEsc);
}

function initGallery(items) {
  let galleryItemsEl = createGalleryElement(items);
  galleryItemsEl.addEventListener('click', onGalleryItemClick);
}

initGallery(galleryItems);

//----basicLightbox-----------------------

// document.querySelector('button.image').onclick = () => {
//   basicLightbox
//     .create(
//       `
// 		<img width="1400" height="900" src="https://placehold.it/1400x900">
// 	`
//     )
//     .show();
// };

//----lesson-----------------------

// function closeModal() {
//   let modalEl = document.querySelector('.modal-wrapper');
//   if (modalEl) {
//     modalEl.remove();
//   }
// }

// function openModal(url, alt) {
//   const MODAL_TEMPLATE =
//     '<div class="modal-wrapper"><div class="modal-backdrop" data-close-modal=""></div><div class="modal-body"><div class="modal-close" data-close-modal="">&times;</div></div></div>';
//   bodyEl.insertAdjacentHTML('beforeend', MODAL_TEMPLATE);
//   let modalBodyEl = document.querySelector('.modal-body');

//   let imgEl = document.createElement('img');
//   imgEl.src = url;
//   imgEl.alt = alt;

//   modalBodyEl.append(imgEl);
// }

// galleryItemsEl.addEventListener('click', event => {});

// bodyEl.addEventListener('click', event => {
//   let targetEl = event.target;
//   if ('closeModal' in targetEl.dataset) {
//     closeModal();
//   }
// });
