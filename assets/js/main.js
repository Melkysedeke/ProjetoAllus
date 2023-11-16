document.addEventListener("DOMContentLoaded", function () {
    var botaoTopo = document.getElementById("r-button");
    var textoTopo = document.getElementById("r-text");
    botaoTopo.style.display = "none";

    window.addEventListener("scroll", function () {
      if (document.body.scrollTop > 350 || document.documentElement.scrollTop > 350) {
        botaoTopo.style.display = "flex";
      } else {
        botaoTopo.style.display = "none";
      }
    });

    window.addEventListener("scroll", function () {
    var alturaPagina = document.body.scrollHeight - this.window.innerHeight;

        if (window.scrollY > alturaPagina - 1 && window.innerWidth > 1340) {
          textoTopo.style.display = "block";
        } else {
          textoTopo.style.display = "none";
        } 
      });

    window.addEventListener("resize", function () {
      if (window.innerWidth > 1340) {
        textoTopo.style.display = "block";
      } else {
        textoTopo.style.display = "none";
      }
    })
  
    botaoTopo.addEventListener("click", function () {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    });
  });