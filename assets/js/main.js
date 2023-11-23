document.addEventListener("DOMContentLoaded", function () {
    const btnMobile = document.getElementById("btn-menu");

    function toggleMenu (event){
        if (event.type === 'touchstart') event.preventDefault();
        const nav = document.getElementById("nav");
        nav.classList.toggle('active');
        const active = nav.classList.contains('active');
    }

    btnMobile.addEventListener('click', toggleMenu);
    btnMobile.addEventListener('touchstart', toggleMenu);
});