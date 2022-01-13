const displayValorAnterior = document.getElementById("valor-anterior");
const displayValorActual = document.getElementById("valor-actual");
const botonesNumeros = document.querySelectorAll(".numero");
const botonesOperadores = document.querySelectorAll(".operador");
const botonDelete = document.querySelectorAll(".delete");
const botonClear = document.querySelectorAll(".clear");

const display = new Display(displayValorAnterior, displayValorActual);

botonesNumeros.forEach((item) => {
  item.addEventListener("click", () => {
    display.agregarNumero(item.innerHTML);
  });
});

botonDelete.forEach((item) => {
  item.addEventListener("click", () => {
    display.borrar();
  });
});

botonClear.forEach((item) => {
  item.addEventListener("click", () => {
    display.borrarTodo();
  });
});

botonesOperadores.forEach((item) => {
  item.addEventListener("click", () => {
    display.computar(item.value);
  });
});
