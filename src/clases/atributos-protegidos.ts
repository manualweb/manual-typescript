
namespace AtributosProtegidos {

  class Figura {
    protected area:number;
    protected nombre:string;

    constructor(nombre:string,area:number) {
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

    public getInfo(){
      console.log(this.nombre + this.area);
    }
  }

  let c1 = new Cuadrado("cuadrado",3);
  console.log(c1.getArea());
  // console.log(c1.nombre);
  console.log(c1.getInfo());


}
