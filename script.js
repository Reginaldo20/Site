const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav");

// Abrir/fechar ao clicar no hambúrguer
menuToggle.addEventListener("click", (e) => {
  e.stopPropagation(); // evita disparar o clique do document
  nav.classList.toggle("active");
});

// Fechar ao clicar em qualquer link do menu
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("active");
  });
});

// Fechar ao clicar fora do menu
document.addEventListener("click", (e) => {
  if (nav.classList.contains("active") && !nav.contains(e.target) && !menuToggle.contains(e.target)) {
    nav.classList.remove("active");
  }
});
