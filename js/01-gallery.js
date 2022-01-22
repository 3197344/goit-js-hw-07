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
// вешаем слушателя события
galleryBoxEl.addEventListener('click', onBigImageOpen);

    function onBigImageOpen(event) {
    // чтобы не перезагружалась страница
    event.preventDefault();
 
    // проверяем условие, когда карточка с картинкой имеет класс 'gallery__image'
    const classListImage = event.target.classList.contains('gallery__image');
    console.log(event.target.classList);
        if (classListImage == true) {
            
            // пускай изначально условие, что модалка закрыта 
            let openModal = false;
        
            //  создаем модальное окно из библиотеки CDN сервис jsdelivr по ТЗ
            const instance = basicLightbox.create(`
            <img  class="gallery__image" src="${event.target.dataset.source}" >
            `, onClose);
                function onClose() {
                    document.removeEventListener('keydown', closeModal)
                };

            // открываем модалку, если условие выше выполняется
            openModal = instance.show();
            
            // закрытие модалки, при условии, что она открыта
            if (openModal) {
                // вешаем слушателя события
                document.addEventListener('keydown', closeModal);
            } 
            function closeModal (event) {
                if (event.key === 'Escape') {
                    instance.close();
                }  
                console.log(event.key);       
            }
        };
    }



