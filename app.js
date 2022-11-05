let minusBtn = document.querySelector('.input__minus');
let plusBtn = document.querySelector('.input__plus');
let userInput = document.querySelector('.input__number');

let userInputNumber = 0;

plusBtn.addEventListener('click', ()=>{
    userInputNumber++;
    userInput.value = userInputNumber;
});

minusBtn.addEventListener('click', ()=>{
    userInputNumber--;
    if(userInputNumber <= 0){
        userInputNumber = 0;
    }
    userInput.value = userInputNumber;
});

//Agregar los productos al carro con el boton

const addToCartBtn = document.querySelector('.details__button');
let cartNotification = document.querySelector('.header__cart--notification');
let lastValue = parseInt(cartNotification.innerText);

addToCartBtn.addEventListener('click', ()=>{
    
    lastValue = lastValue + userInputNumber;

    cartNotification.innerText = lastValue;
    cartNotification.style.display = 'block';
    drawProductInModal();
});

//mostrar los detalles del carro

const cartIconBtn = document.querySelector('.header__cart');
const cartModal = document.querySelector('.cart-modal');
const productContainer = document.querySelector('.cart-modal__checkout-container');

cartIconBtn.addEventListener('click', ()=>{
    cartModal.classList.toggle('show');
    if(lastValue == 0){
        productContainer.innerHTML = '<p class="cart-empty">Your cart is empty</p>';
    }else{
        drawProductInModal();      
    }
});

//Cambiar las imagenes con las flechas
const imageContainer = document.querySelector('.gallery__image-container');
const previusGalleryBtn = document.querySelector('.gallery__previus');
const nextGalleryBtn = document.querySelector('.gallery__next');
let imgIndex = 1;


nextGalleryBtn.addEventListener('click', ()=>{
    changeNextImage(imageContainer);

});

previusGalleryBtn.addEventListener('click', ()=>{
    changePreviusImage(imageContainer);
})

//Mostrar el modal de las imagenes cuando se haga click en la imagen principal

const imageModal = document.querySelector('.modal-gallery__background');
const closeModalBtn = document.querySelector('.modal-gallery__close');


imageContainer.addEventListener('click', ()=>{
    imageModal.style.display = 'grid';
})

closeModalBtn.addEventListener('click', ()=>{      
    imageModal.style.display = 'none';
});

//Cambiar las imagenes de cada thumbnail
let thumbnails = document.querySelectorAll('.gallery__thumbnail');
thumbnails = [...thumbnails]

thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', event=>{
        imageContainer.style.backgroundImage = `url('../images/image-product-${event.target.id}.jpg')`
    });
});

//Cambiar las imagenes principales desde los thumbnails en el modal
let modalthumbnails = document.querySelectorAll('.modal-gallery__thumbnail');
modalthumbnails = [...modalthumbnails]
const modalImageContainer = document.querySelector('.modal-gallery__image-container');

modalthumbnails.forEach(modalthumbnail =>{
    modalthumbnail.addEventListener('click', event=>{
        modalImageContainer.style.backgroundImage = `url('../images/image-product-${event.target.id.slice(-1)}.jpg')`
    });
});

//Cambiar imagen en el modal con las flechas
const previusModalBtn = document.querySelector('.modal-gallery__previus');
const nextModalBtn = document.querySelector('.modal-gallery__next');

nextModalBtn.addEventListener('click', ()=>{
    changeNextImage(modalImageContainer);
});

previusModalBtn.addEventListener('click', ()=>{
    changePreviusImage(modalImageContainer);
});

//Mostrar el navbar
const hamburguerMenu = document.querySelector('.header__menu');
const modalNavbar = document.querySelector('.modal-navbar__background');
const closeModalNavbar = document.querySelector('.modal-navbar__close-icon');

modalNavbar.style.display = 'none'

hamburguerMenu.addEventListener('click', ()=>{
    modalNavbar.style.display = 'block';
});


closeModalNavbar.addEventListener('click', ()=>{
    modalNavbar.style.display = 'none';
});

//Funciones ¿?
//Borrar contenido del carro
function deleteProduct(){

    const deleteProductBtn = document.querySelector('.cart-modal__delete');

    deleteProductBtn.addEventListener('click', ()=>{
    productContainer.innerHTML = '<p class="cart-empty">Your cart is empty</p>';
    lastValue = 0;
    cartNotification.innerText = lastValue;
    });
}

function drawProductInModal(){
    productContainer.innerHTML = `
        <div  class="cart-modal__details-container">
            <img src="./images/image-product-1-thumbnail.jpg" class="cart-modal__image" alt="">
            <div>
                <p class="cart-modal__product">Autumn Limited Edition..</p>
                <p class="cart-modal__price">$125 x3 <span>$375.00</span></p>
            </div>
            <img src="./images/icon-delete.svg" class="cart-modal__delete" alt="">
        </div>
        <button class="cart-modal__checkout">Checkout</button>`
    deleteProduct();    
    
    let priceModal = document.querySelector('.cart-modal__price');
    priceModal.innerHTML = `$125 x${lastValue} <span>$${lastValue*125}.00</span>`;
}

function changeNextImage(imgContainer){
    if(imgIndex == 4){
        imgIndex = 1;
    }else{
        imgIndex++;
    }
    
    imgContainer.style.backgroundImage = `url('../images/image-product-${imgIndex}.jpg')`
}

function changePreviusImage(imgContainer){
    if(imgIndex == 1){
        imgIndex = 4;
    }else{
        imgIndex--;
    }
    imgContainer.style.backgroundImage = `url('../images/image-product-${imgIndex}.jpg')`

}