import { galleryItems } from './gallery-items.js';
// Change code below this line
const itemGallery = document.querySelector('.gallery')

const newGallery = galleryItems.map(
    item => `<li class="gallery__item">
    <a class="gallery__link" href="${item.original}">
    <img
    class="gallery__image"
    src="${item.preview}"
    data-source="${item.original}"
    alt="${item.description}"
    />
    </a>
    </li>`)
    .join("")
itemGallery.insertAdjacentHTML('beforeend', newGallery)

let instance = "";

itemGallery.addEventListener('click', onOpenModal)

function onOpenModal (event){
    event.preventDefault();
    if (event.target.nodeName !== "IMG") {return}
    itemGallery.classList.add('open-modal')
    const imgSource = event.target.getAttribute('data-source')
 instance = basicLightbox.create(`<img src="${imgSource}"/>`)
        instance.show()}

document.addEventListener('keydown', onCloseModal)

function onCloseModal (event) {
    if (event.code === "Escape" && itemGallery.classList.contains('open-modal')) {
            instance.close(); 
            itemGallery.classList.remove('open-modal')
        }
    }
