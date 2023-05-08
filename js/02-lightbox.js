import { galleryItems } from './gallery-items.js';

const itemGalleryEl = document.querySelector('.gallery')

const newGallery = galleryItems.map(
    item => `<li class="gallery__item">
    <a class="gallery__link" href="${item.original}">
       <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
    </a>
 </li>`)
    .join("")
itemGalleryEl.insertAdjacentHTML('beforeend', newGallery)

new SimpleLightbox('.gallery a', {'captionType': 'alt', 'captionDelay': 250});
