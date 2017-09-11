// Herencia de clases en TypeScript

namespace HerenciaClases {

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
  }


  // Utilizamos las propiedades de la clase padre
  let c1 = new Cuadrado("cuadrado");
  c1.setArea(2);
  console.log(c1.obtenerArea());


}
