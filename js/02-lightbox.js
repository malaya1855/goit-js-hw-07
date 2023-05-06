import { galleryItems } from './gallery-items.js';

const itemGallery = document.querySelector('.gallery')

const newGallery = galleryItems.map(
    item => `<li class="gallery__item">
    <a class="gallery__link" href="${item.original}">
       <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
    </a>
 </li>`)
    .join("")
itemGallery.insertAdjacentHTML('beforeend', newGallery)

new SimpleLightbox('.gallery a');
