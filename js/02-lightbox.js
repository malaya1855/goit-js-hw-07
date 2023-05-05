import { galleryItems } from './gallery-items.js';
// Change code below this line

const itemGallery = document.querySelector('.gallery')

const newGallery = galleryItems.map(
    item => `<li class="gallery__item">
    <a class="gallery__link" href="${item.original}">
       <img class="gallery__image" src="${item.preview}" alt="${item.description}n" />
    </a>
 </li>`)
    .join("")
itemGallery.insertAdjacentHTML('beforeend', newGallery)



// event.preventDefault();