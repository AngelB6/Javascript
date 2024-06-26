const carrito = document.querySelector("#carrito");
const template = document.querySelector("#template");
const fragment = new DocumentFragment();
const btnesBotones = document.querySelectorAll(".card .btn");

const carritoObjeto = [];

const agregarCarrito = (e) => {
  const producto = {
    titulo: e.target.dataset.fruta,
    id: e.target.dataset.fruta,
    cantidad: 1,
  };

  const indice = carritoObjeto.findIndex((item) => item.id === producto.id);

  if (indice === -1) {
    carritoObjeto.push(producto);
  }else{
    carritoObjeto[indice].cantidad ++
  }

  pintarCarrito(carritoObjeto);
};

const pintarCarrito = (array) => {
  carrito.textContent = "";

  array.forEach((item) => {
    const clone = template.content.firstElementChild.cloneNode(true);
    clone.querySelector(".lead").textContent = item.titulo;
    clone.querySelector(".badge").textContent = item.cantidad;

    fragment.appendChild(clone);
  });

  carrito.appendChild(fragment);
};

btnesBotones.forEach((btn) => btn.addEventListener("click", agregarCarrito));
