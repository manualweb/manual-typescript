
// PropiedadesReadOnly
// Solo se pueden modificar en declaración o en el constructor

namespace PropiedadesReadOnly {

  class Saludo {

    nombre:string;
    readonly saludo:string = "Hola ";

    constructor(nombre:string) {
      this.nombre = nombre;
      this.saludo = "Hello ";
    }

    saludar() {
      console.log(this.saludo + this.nombre);
    }
  }

  let s1 = new Saludo("Carmen");
  s1.saludar();

}
