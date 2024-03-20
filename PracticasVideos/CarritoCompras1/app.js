const carrito = document.querySelector("#carrito");
const template = document.querySelector("#template");
const fragment = new DocumentFragment();
const btnesBotones = document.querySelectorAll(".card .btn");

const carritoObjeto = {};

const agregarCarrito = (e) => {
  console.log(e.target.dataset.fruta);

  const producto = {
    titulo: e.target.dataset.fruta,
    id: e.target.dataset.fruta,
    cantidad: 1,
  };

  carritoObjeto[producto.titulo] = producto;

  console.log(carritoObjeto);
};

const pintarCarrito = () =>{
    console.log('pintar carrito');
}

btnesBotones.forEach((btn) => btn.addEventListener("click", agregarCarrito));
