import { galleryItems } from './gallery-items.js';

// Change code below this line
const galleryItemsEl = document.querySelector('.gallery');
const galleryCards = createImagesGallery(galleryItems);

galleryItemsEl.addEventListener('click', onImageClick);

galleryItemsEl.insertAdjacentHTML('beforeend', galleryCards);

function createImagesGallery(images) {
    return images
    .map(({preview, original, description}) =>
         `
        <li class="gallery__item">
            <a class="gallery__item" href="${original}">
                 <img class="gallery__image" src="${preview}" alt="${description}" />
            </a>
        </li>
        `
    )
    .join("");
}

function onImageClick(event) {
    event.preventDefault()
    
    const clickOnImage = event.target.classList.contains('gallery__image');

    if (!clickOnImage) return;

    new SimpleLightbox('.gallery a', {captionPosition:'bottom', captionDelay:250, captionsData:'alt'});
}
