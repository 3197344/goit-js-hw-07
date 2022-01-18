import { galleryItems } from './gallery-items.js';
// Change code below this line
// 1 Создание и рендер разметки по массиву данных galleryItems и предоставленному шаблону элемента галереи.

const galleryBoxEl = document.querySelector('.gallery');
console.log(galleryBoxEl.innerHTML);
const imagesListEl = [];

galleryItems.forEach(el => { 
    imagesListEl.push( `<div class="gallery__item"><a class="gallery__link" href=''>
    <img
        class="gallery__image"
        src="${el.preview}" 
        data-source="${el.original}"
        alt="${el.description}"
    /> </a> </div>`);
    console.log(el.preview);
    console.log(el.original);
    console.log(el.description);
});

galleryBoxEl.insertAdjacentHTML('afterbegin', imagesListEl);

console.log(galleryItems);
