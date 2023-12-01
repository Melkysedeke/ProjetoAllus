document.addEventListener("DOMContentLoaded", function () {
    const btnMobile = document.getElementById("btn-menu");
    const btnQuemSomos = document.getElementById("btn-qs");
    const btnNossasRedes = document.getElementById("btn-nr");

    function closeMenu (){
        nav.classList.toggle('active');
        document.body.classList.toggle('menu-aberto');
    }

    function quemSomos (){
        const elementoQuemSomos = document.getElementById('quem-somos');
        elementoQuemSomos.scrollIntoView({ block: 'center', behavior: 'smooth'});
        closeMenu();
    }

    function nossasRedes (){
        const elementoQuemSomos = document.getElementById('social-main');
        elementoQuemSomos.scrollIntoView({ block: 'center', behavior: 'smooth'});
        closeMenu();
    }

    function toggleMenu (event){
        if (event.type === 'touchstart') event.preventDefault();
        const nav = document.getElementById("nav");
        nav.classList.toggle('active');
        const active = nav.classList.contains('active');
        document.body.classList.toggle('menu-aberto');
    }

    btnMobile.addEventListener('click', toggleMenu);
    btnMobile.addEventListener('touchstart', toggleMenu);
    btnQuemSomos.addEventListener('click', quemSomos);
    btnNossasRedes.addEventListener('click', nossasRedes);
});