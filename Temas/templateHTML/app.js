arryPaises = ["Peru", "Bolivia", "Colombia", "Mexico"];

const lista = document.querySelector("#lista");

const fragment = new DocumentFragment();

const liTemplate = document.querySelector("#liTemplate");

const clickPaises = () => console.log("Me diste click");

arryPaises.forEach((pais) => {
  const clone = liTemplate.content.firstElementChild.cloneNode(true);

  clone.querySelector(".primary-text").textContent = pais;

  clone.addEventListener("click", clickPaises);

  fragment.appendChild(clone);
});

lista.appendChild(fragment);
