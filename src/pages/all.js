
const productDropdownButton = document.querySelector('.menu-dropdown-product');
const productDropdownList = document.querySelector('.menu-dropdown-product-list');

productDropdownButton.addEventListener('click', ()=> {
    productDropdownList.classList.toggle('hidden');
})
