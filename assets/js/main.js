document.addEventListener("DOMContentLoaded", function () {
    const btnMobile = document.getElementById("btn-menu");
    const btnQuemSomos = document.getElementById("btn-qs");
    const btnNossasRedes = document.getElementById("btn-nr");
    const btnMenu = document.getElementById('btn-menu');

    function quemSomos (){
        const elementoQuemSomos = document.getElementById('quem-somos');
        elementoQuemSomos.scrollIntoView({ block: 'center', behavior: 'smooth'});
    }

    function nossasRedes (){
        const elementoQuemSomos = document.getElementById('social-main');
        elementoQuemSomos.scrollIntoView({ block: 'center', behavior: 'smooth'});
    }

    function toggleMenu (event){
        if (event.type === 'touchstart') event.preventDefault();
        const nav = document.getElementById("nav");
        nav.classList.toggle('active');
        const active = nav.classList.contains('active');
    }

    function menuAberto (){
        document.body.classList.toggle('menu-aberto');
    }

    btnMobile.addEventListener('click', toggleMenu);
    btnMobile.addEventListener('touchstart', toggleMenu);
    btnQuemSomos.addEventListener('click', quemSomos);
    btnNossasRedes.addEventListener('click', nossasRedes);
    btnMenu.addEventListener('click', menuAberto);
});