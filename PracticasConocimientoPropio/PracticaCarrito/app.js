arrayFrutas = ["Fresa 🍓", "Banana 🍌", "Manzana 🍎"];

const templateCard = document.querySelector("#templateCard");

const templateLista = document.querySelector("#templateLista");

const fragment = new DocumentFragment();

const cardFrutas = document.querySelector(".cardFrutas");

arrayFrutas.forEach((fruta) => {
  const cloneCard = templateCard.content.firstElementChild.cloneNode(true);
  
  cloneCard.querySelector(".nom-fruta").textContent = fruta;

  fragment.appendChild(cloneCard);
});

cardFrutas.appendChild(fragment);
