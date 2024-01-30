document.addEventListener("DOMContentLoaded", function () {
    const btnMobile = document.getElementById("btn-menu");
    const btnQuemSomos = document.getElementById("btn-qs");
    const btnNossasRedes = document.getElementById("btn-nr");
    const btnUp = document.getElementById("up-button");
    const upText = document.getElementById("up-text");
    const heigthScreen = document.documentElement.clientHeight;

    function closeMenu (){
        nav.classList.toggle('active');
        document.body.classList.toggle('menu-aberto');
    }

    function quemSomos (){
        const elementoQuemSomos = document.getElementById('card-box');
        elementoQuemSomos.scrollIntoView({ block: 'start', behavior: 'smooth'});
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

    function upScreen() {
        document.body.scrollTop = 0; // Para navegadores da web
        document.documentElement.scrollTop = 0; // Para navegadores IE/Edge
    }
      
    this.addEventListener('scroll', () =>{
        if (document.body.scrollTop > 350 || document.documentElement.scrollTop > 350) {
            btnUp.classList.add('visible');
        } else {
            btnUp.classList.remove('visible');
        }
    })

    window.addEventListener('scroll', () =>{
        var alturaPagina = document.body.scrollHeight - window.innerHeight;

        if (window.scrollY > alturaPagina - 50 || window.innerWidth > 1340) {
            upText.classList.add('open');
        } else {
            upText.classList.remove('open');
        }
    })

    btnUp.addEventListener('click', upScreen)
    btnMobile.addEventListener('click', toggleMenu);
    btnMobile.addEventListener('touchstart', toggleMenu);
    btnQuemSomos.addEventListener('click', quemSomos);
    btnNossasRedes.addEventListener('click', nossasRedes);
});