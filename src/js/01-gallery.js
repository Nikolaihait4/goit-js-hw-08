import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
console.log(galleryItems);
const galleryItemUl = document.querySelector('.gallery');

// Мэпаем массив записываем в переменную добавляем разметку
const galleryEl = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<a class="gallery__item" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
    />
  </a>
`
  )
  .join('');

galleryItemUl.insertAdjacentHTML('beforeend', galleryEl);

// Реализация библиотеки lightbox
const lightbox = new SimpleLightbox('.gallery a', {
  overlay: false,
  captionsData: 'alt',
  captionDelay: 250,
  captionPosition: 'bottom',
});
