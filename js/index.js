window.onload = function() {

    let btnMenu = document.getElementById('btn-menu');
    let menuImg = document.getElementById('img-menu');
    let mobileMenu = document.getElementById('mobile-menu');

    btnMenu.addEventListener('click', function() {
        menuImg.classList.toggle('menu-active');
        mobileMenu.classList.toggle('hidden');
    });
    
}