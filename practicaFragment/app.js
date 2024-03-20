arryPaises = ["Peru", "Bolivia", "Colombia", "Mexico"];

const listaPaises = document.querySelector(".lista");

const fragment = new DocumentFragment();

arryPaises.forEach(pais => {
  const li = document.createElement('li');
  li.className = 'lista'

  const b = document.createElement('b');
  b.textContent = "Pais: "

  const span = document.createElement('span');
  span.className = "primary-text"
  span.textContent = pais

  li.appendChild(b)
  li.appendChild(span)
  
  fragment.appendChild(li);
});

lista.appendChild(fragment);
