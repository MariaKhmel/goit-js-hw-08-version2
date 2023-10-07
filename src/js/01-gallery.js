// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

// Change code below this line


const refs = {
    gallery: document.querySelector('.gallery'),

}

refs.gallery.insertAdjacentHTML('beforeend', createGalleryMarkup(galleryItems))
function createGalleryMarkup(items) {
    return items.map(({ original, preview, description }) => {
        return `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`
    }).join('');
}

let gallery = new SimpleLightbox('.gallery a');

// refs.gallery.addEventListener('click', pictureClick);

// function pictureClick(e) {
//     e.preventDefault();
//     const pictureUrl = e.target.dataset.source;
//     // if (e.target.classList.contains('gallery__image')) {
//     //     console.log('click'); 
//     // }
//     let gallery = new SimpleLightbox('.gallery a');
// }



