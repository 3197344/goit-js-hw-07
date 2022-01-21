import { galleryItems } from './gallery-items.js';
// Change code below this line
// 1 Создание и рендер разметки по массиву данных galleryItems и предоставленному шаблону элемента галереи.

const galleryBoxEl = document.querySelector('.gallery');

const galleryMarkup = galleryItems
    .map(
        ({ preview, original, description }, index) =>
        `<li class="gallery__item">
            <a class="gallery__link" href=''>
            <img
            class="gallery__image"
            src="${preview}" 
            data-source="${original}" 
            alt="${description}" 
            data-index="${index}"
        /> </a>
        </li>`,
    )
    .join('');

galleryBoxEl.innerHTML = galleryMarkup;
// console.log(galleryMarkup);
// Реализация делегирования на div.gallery и получение url большого изображения.
galleryBoxEl.addEventListener('click', onImageClick);


function onImageClick(event) {
    event.preventDefault();
    // console.log(event.target);
    if (event.target.nodeName !== "IMG") {
        return;
    }
    const imageHover = event.target.dataset.source;
    const instance = basicLightbox.create(`
    <div class="modal">
      <img
        class="gallery__image:hover"
        src="${imageHover}" 
    </div>
`)

instance.show()
}

