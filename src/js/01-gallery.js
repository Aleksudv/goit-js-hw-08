// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector(".js-gallery");

const markup = galleryItems.map(({
    preview,
    original,
    description
}) => `<a class="gallery__link" href="${original}">
    <img
    class="gallery__image js-galleryImg"
    src="${preview}"
    data-source="${original}"
    alt="${description}"
    />
  </a>`).join('');

galleryEl.insertAdjacentHTML('beforeend', markup);


const lightbox = new SimpleLightbox('.js-gallery a', {
    captions: true,
    captionsData: "alt",
    captionDelay: 250,
    overlayOpacity:0.9,
});