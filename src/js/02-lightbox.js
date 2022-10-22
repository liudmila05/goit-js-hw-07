import { galleryItems } from './gallery-items.js';
// Change code below this line
const newLightBox = document.querySelector(".gallery");
const images = galleryItems
    .map(
        (image) =>
            `<a class="gallery__item" href="${image.original}">
                <img class="gallery__image"    
                src="${image.preview}"
                alt="${image.description}"
                title="${image.description}"
                />
            </a>`
    )
    .join("");

newLightBox.innerHTML = images;

new SimpleLightbox(".gallery a", { captionDelay: 250 });

console.log(galleryItems);
