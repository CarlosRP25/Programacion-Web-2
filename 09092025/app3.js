// Carrito inicial
const frutas = [""];
console.log("Carrito inicial:", frutas);

// Preguntar si desea agregar frutas
let seguir = true;

while (seguir) {
  let respuesta = confirm("¿Quieres agregar una fruta al carrito?");
  
  if (respuesta) {
    let nuevaFruta = prompt("Escribe el nombre de la fruta que quieres agregar:");
    if (nuevaFruta) {
      frutas.push(nuevaFruta); 
      console.log(`Agregaste: ${nuevaFruta}`); 
    } else {
      console.log("No escribiste ninguna fruta.");
    }
  } else {
    seguir = false; // Se rompe el ciclo si dice no
  }
}

// Al final se muestra todo el carrito
console.log("Carrito final de frutas:");
for (let i = 0; i < frutas.length; i++) {
  console.log(frutas[i]);
}
