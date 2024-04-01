// Burbujeo hace referencia a la ejecucion de mas de un metodo iniciando desde el elemento hijo hasta el elemento padre

// const padre = document.querySelector(".border-primary");
// const hijo = document.querySelector(".border-secondary");
// const nieto = document.querySelector(".border-danger");

// padre.addEventListener("click", () => {
//   console.log("Me diste click padre");
// });

// hijo.addEventListener("click", () => {
//   console.log("Me diste click hijo");
// });

// nieto.addEventListener("click", () => {
//   console.log("Me diste click nieto ");
// });

// Captura hace referencia a la ejecucion de mas de un metodo iniciando desde el elemento padre hasta el elemento hijo. Al contrario del burbujeo

// padre.addEventListener(
//   "click",
//   () => {
//     console.log("Me diste click padre");
//   },
//   true
// );

// hijo.addEventListener(
//   "click",
//   () => {
//     console.log("Me diste click hijo");
//   },
//   true
// );

// nieto.addEventListener(
//   "click",
//   () => {
//     console.log("Me diste click nieto ");
//   },
//   true
// );

// Mismos ejemplos con distinta estructura