import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryBoxEl = document.querySelector('.gallery');


const galleryMarkup = galleryItems
    .map(
        ({ preview, original, description }, index) =>
        `
        <a class="gallery__item" 
        href="${original}">
            <img 
            class="gallery__image" 
            src="${preview}" 
            alt=${description}" />
            </a>
        `,
    )
    .join('');

galleryBoxEl.innerHTML = galleryMarkup;
console.log(galleryItems);



const lightbox = new SimpleLightbox('.gallery a',{ captionsData:'alt' });
lightbox.show 
