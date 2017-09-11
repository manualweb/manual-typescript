// Uso del objeto super en Typescript

namespace ObjetoSuper {

  class Figura {
    nombre:string;
    area:number;
    constructor(nombre:string){
      this.nombre = nombre;
    }
    setArea(area:number){
      this.area = area;
    }
    obtenerArea(){
      return this.area;
    }
  }

  class Cuadrado extends Figura {

    lado:number;

    constructor(nombre:string,lado:number) {
      super(nombre);
      this.lado = lado;
      this.area = this.lado*2;
    }

  }

  // Utilizamos las propiedades de la clase padre
  let c1 = new Cuadrado("cuadrado",8);
  console.log(c1.nombre);
  console.log(c1.obtenerArea());

}
