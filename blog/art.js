// Filtrado de artículos por etiquetas
document.addEventListener("DOMContentLoaded", function () {
    const filtroBtns = document.querySelectorAll(".filtro-btn");
    const articulos = document.querySelectorAll(".articulo");
  
    filtroBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        const filtro = btn.getAttribute("data-filtro");
  
        articulos.forEach((articulo) => {
          const tags = articulo.querySelectorAll(".tag");
          let mostrar = false;
  
          tags.forEach((tag) => {
            if (tag.textContent.toLowerCase() === filtro) {
              mostrar = true;
            }
          });
  
          if (filtro === "todos" || mostrar) {
            articulo.style.display = "block";
          } else {
            articulo.style.display = "none";
          }
        });
      });
    });
  });