
namespace AtributosPrivados {

  class Cuadrado {
    private lado:number;
    constructor(lado:number) {
      this.lado = lado;
    }
    public calcularArea(){
      return this.lado*2;
    }
  }

  let c = new Cuadrado(3);
  // console.log(c.lado);
  console.log(c.calcularArea());

}
