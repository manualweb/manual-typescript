// Ejemplo que muestra el uso de interfaces

interface Etiqueta {
  etiqueta: string;
}

function imprimirEtiqueta(Elemento: Etiqueta) {
  console.log(Elemento.etiqueta);
}

let e1 = {etiqueta:'Cajonera', destino: 'Madrid', peso: 50}
imprimirEtiqueta(e1);
