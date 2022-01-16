window.onload = function() {

    let btnMenu = document.getElementById('btn-menu');
    let menuImg = document.getElementById('img-menu');
    let mobileMenu = document.getElementById('mobile-menu');
    let mobileMenuItems = document.getElementsByClassName('mobile-btn');

    btnMenu.addEventListener('click', function() {
        menuImg.classList.toggle('menu-active');
        mobileMenu.classList.toggle('hidden');
    });

    for (let i = 0; i < mobileMenuItems.length; i++) {
        mobileMenuItems[i].addEventListener('click', function() {
            menuImg.classList.toggle('menu-active');
            mobileMenu.classList.toggle('hidden');
        });
    }
    
}