document.addEventListener("DOMContentLoaded", () => {
  const pickerColor = document.querySelector("#color-picker");
  const visualizarColor = document.querySelector(".visualizar-color");
  const butonVisualizar = document.querySelector(".btn-visual-color");

  butonVisualizar.addEventListener("click", () => {
    const colorSeleccionado = pickerColor.value;
    document.querySelector(".hex-color").innerHTML = colorSeleccionado;
    visualizarColor.style.backgroundColor = colorSeleccionado;
  });
});
