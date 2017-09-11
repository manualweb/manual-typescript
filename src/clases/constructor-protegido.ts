
namespace AtributosProtegidos {

  class Figura {
    protected area:number;
    protected nombre:string;

    protected constructor(nombre:string,area:number) {
      this.nombre = nombre;
      this.area = area;
    }

    public getArea(){
      return this.area;
    }
  }

  class Cuadrado extends Figura {
    private lado:number;
    constructor(nombre:string,lado:number) {
      super(nombre,lado*2);
    }
  }

  let c1 = new Cuadrado("cuadrado",3);
  console.log(c1.getArea());

  // Bloqueamos que se puedan crear objetos de la clase Figura
  // let f1 = new Figura("triangulo",12);

}
