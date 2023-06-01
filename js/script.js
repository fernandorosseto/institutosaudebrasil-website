document.addEventListener("DOMContentLoaded", function() {
    const linkMenus = document.querySelectorAll(".btn");
  
    function updateSelectedLink() {
      const currentHash = window.location.hash;
      linkMenus.forEach(link => {
        if (link.getAttribute("href") === currentHash) {
          link.classList.add("selected");
        } else {
          link.classList.remove("selected");
        }
      });
    }
  
    // Adiciona a classe "selected" ao link correto quando a página é carregada.
    updateSelectedLink();
  
    // Atualiza a classe "selected" quando houver alterações no hash da URL.
    window.addEventListener("hashchange", updateSelectedLink);
  });