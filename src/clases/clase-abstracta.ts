// Definir una clase abstracta


namespace ClaseAbstracta {

  abstract class Figura {
    protected area:number;
    getArea():number {
      return this.area;
    }
    abstract getInfo():string;

  }

  class Cuadrado extends Figura {
    private lado:number;
    constructor(lado:number) {
      super();
      this.lado = lado;
      this.area = this.lado*2;
    }
    getInfo() {
      return "Cuadrado de lado " + this.lado;
    }
  }

  let c1 = new Cuadrado(2);
  console.log(c1.getArea());

  // No se puede instanciar una clase abstracta
  // let f1 = new Figura();

}
