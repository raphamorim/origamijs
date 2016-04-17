console.log("test");

(function() {
  var btnOpen = document.getElementById("navOpen");
  var menu = document.getElementById("navigation");

  //Função para exibir ou ocultar os itens do menu
  function toggleMenu() {
    if(menu.style.display === "none") {
      menu.style.display = "block";
    } else {
      menu.style.display = "none";
    }
  }

  //Atribui a função ao evento click no botão abrir
  btnOpen.addEventListener("click",toggleMenu);

  //Cria a media querie
  var mediaQuery = window.matchMedia("(min-width: 768px)");

  //Verifica a media query e determina se os itens do menu deve aparecer ou não
  if (mediaQuery.matches) {
    menu.style.display = "block";
  } else {
    menu.style.display = "none";
  }

  //Verifica alterações e e determina se os itens do menu deve aparecer ou não
  mediaQuery.addListener(function(changed) {
    if(changed.matches) {
      menu.style.display = "block";
    } else {
      menu.style.display = "none";
    }
  });
})();
