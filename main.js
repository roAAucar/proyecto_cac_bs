const formCompra = document.getElementById('formCompra');
const inputCantidad = document.getElementById('inputCantidad');
const inputCategoria = document.getElementById('inputCategoria');

formCompra.addEventListener('submit', function (e) {
  e.preventDefault();
  let nombre = document.getElementById('inputnombre').value;
  let apellido = document.getElementById('inputapellido').value;
  let email = document.getElementById('inputemail').value;
  console.log('Nombre:', nombre);
  console.log('Apellido:', apellido);
  console.log('Email:', email);
});

function calcularTotal() {
  const cantidad = parseInt(inputCantidad.value);
  const categoria = parseInt(inputCategoria.value);
  const valorTicket = 200;
  let descuento = 0;

  switch (categoria) {
    case 1:
      descuento = 0.8;
      break;
    case 2:
      descuento = 0.5;
      break;
    case 3:
      descuento = 0.15;
      break;
    default:
      descuento = 0;
      break;
  }

  const resultadoTotal = document.getElementById('resultadoTotal');
  const total = cantidad * valorTicket * (1 - descuento);
  resultadoTotal.value = '$' + total.toFixed(2);
  console.log('Total a pagar: $' + total.toFixed(2));
}

inputCantidad.addEventListener('change', calcularTotal);
inputCategoria.addEventListener('change', calcularTotal);

