arrayFrutas = ["Fresa 🍓", "Banana 🍌", "Manzana 🍎"];

const templateCard = document.querySelector("#templateCard");

const fragment = new DocumentFragment();

const cardFrutas = document.querySelector(".cardFrutas");

arrayFrutas.forEach((fruta) => {
  const clone = templateCard.content.cloneNode(true);

  clone.querySelector(".nom-fruta").textContent = fruta;

  fragment.appendChild(clone);
});

cardFrutas.appendChild(fragment);
