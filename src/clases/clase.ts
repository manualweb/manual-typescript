// Clase en TypeScript

class Saludo {
  nombre:string;

  constructor(nombre:string) {
    this.nombre = nombre;
  }

  saludar() {
    console.log("Hola " + this.nombre);
  }
}

let s1 = new Saludo("Carmen");
s1.saludar();
