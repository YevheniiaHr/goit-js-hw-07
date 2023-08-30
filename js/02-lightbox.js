import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector('.gallery');
const markup = createMarkup(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', markup);



function createMarkup (arr){
	return arr.map(({original, preview, description}) => {
	return `<li class="gallery__item">
	<a class="gallery__link" href="${original}">
	  <img class="gallery__image" 
	  src="${preview}" 
	  alt="${description}">
	</a></li>`	
	}).join('');
};

var lightbox = new SimpleLightbox 
    ('.gallery a', {
        captionsData: 'alt', 
        captionPosition: 'bottom', 
        captionDelay: 250
    }
)