import { instruments } from "./instruments";
import * as basicLightbox from 'basiclightbox'
import "simplelightbox/dist/simple-lightbox.min.css";

const refs = {
    jsList: document.querySelector('.js-list'),
    jsSearch: document.querySelector('.js-search'),
}

/////markup

function createMarkUp(arr) {
    let markup;
    markup = arr.map(
        ({ id, img, name }) => `<li data-id="${id}" class="js-card">
          <img src="${img}" alt="${name}" width="300">
          <h2>${name}</h2>
          <p><a class="js-info" href="#">More information</a></p>
          <div>
          <button class="js-favorite">Add to favorite</button>
          <button class="js-basket">Add to basket</button>
          </div>
        </li>`
    ).join('');

    refs.jsList.innerHTML = markup;
    
}

createMarkUp(instruments);

////findID

refs.jsList.addEventListener('click', onInstrumentClick);

function onInstrumentClick(e) {
    e.preventDefault();  
    if (e.target.classList.contains('js-info')) {
        const product = findIdElement(e.target);
        createProduct(product);

    }
}




///functions
function findIdElement(elem) {
    const productId = Number(elem.closest('.js-card').dataset.id);
    return instruments.find(({ id }) => id === productId);
}


function createProduct(product) {

    const instance = basicLightbox.create(`
	<div class="modal">
    <img src="${product.img}" alt="${product.name}" width="200">
    <h2>${product.name}</h2>
    <h3>${product.price} грн</h3>
    <p>${product.description}</p>
    <div>
        <button class="js-favorite">Add to favorite</button>
        <button class="js-basket">Add to basket</button>
      </div>
</div>`)
// `, {
//         handler: null,
//         onShow(instance) {
//             this.handler = closeModal.bind(instance)
//             document.addEventListener('keydown', this.handler);
//         },

//         onClose() {
//             document.removeEventListener('keydown', this.handler);
//         },
//     });
    // instance.show();

}