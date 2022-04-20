let texto = document.getElementById("texto1");
let boton = document.getElementById("boton");

function invirtiendoTexto() {
  let texto1 = texto.value;
  for (let index = texto1.length; index < 0; index--) {
    console.log(texto1);
  }
}

boton?.addEventListener("click", invirtiendoTexto);
