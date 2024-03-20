document.addEventListener("DOMContentLoaded", () => {
  const pickerColor = document.querySelector("#color-picker");
  const visualizarColor = document.querySelector(".visualizar-color");
  const butonVisualizar = document.querySelector(".btn-visual-color");
  const hexNom = document.querySelector(".hex-color")

  butonVisualizar.addEventListener("click", () => {
    const colorSeleccionado = pickerColor.value;
    hexNom.textContent = colorSeleccionado;
    visualizarColor.style.backgroundColor = colorSeleccionado;
  });
});
