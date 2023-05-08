import { galleryItems } from './gallery-items.js';
// Change code below this line
const itemGalleryEl = document.querySelector('.gallery')

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
itemGalleryEl.insertAdjacentHTML('beforeend', newGallery)

document.addEventListener('click', onOpenModal) 

function onOpenModal (event){
        event.preventDefault();
    if (event.target.nodeName !== "IMG") {return}
const instance = basicLightbox.create(`<img src="${event.target.dataset.source}"/>`, 
{onShow: (instance) => {document.addEventListener('keydown', onCloseModal)},

onClose: (instance) => {document.removeEventListener('keydown', onCloseModal)}}) 

instance.show()

function onCloseModal (event) {  
            instance.close();        
    }
}