import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryContainer = document.querySelector('.gallery');
const markup = createMarkup(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', markup);
galleryContainer.addEventListener('click', handleGalleryClick);


function createMarkup (arr){
	return arr.map(({original, preview, description}) => {
	return `<li class="gallery__item">
	<a class="gallery__link" href="${original}">
	  <img class="gallery__image" 
	  src="${preview}" 
	  data-source="${original}" 
	  alt="${description}">
	</a></li>`	
	}).join('');
};

 function handleGalleryClick (event) {
	event.preventDefault()
	 if(!event.target.classList.contains("gallery__image")) {
		return;
	 }
	 const imgSource = event.target.dataset.source;
	 const instance = basicLightbox.create(`
	 <img src="${imgSource}" width="1280" height="auto">
	`)
	
	instance.show()

	 document.addEventListener("keydown", function(event) {
		if (event.key === "Escape") {
		  instance.close();
		}
	  });
	
	 
	  instance.element().querySelector(".basicLightbox__close").addEventListener("click", function() {
		instance.close();
	  });
	
	  
 };
 
 

