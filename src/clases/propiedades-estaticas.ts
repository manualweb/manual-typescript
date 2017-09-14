// Propiedades Estáticas en TypeScript

namespace PropiedadesEstaticas {

  class Distancia {

    static conversorMillas:number = 0.621371;
    private kilometros:number;

    constructor(kilometros:number) {
      this.kilometros = kilometros;
    }

    getKilometros(){
      return this.kilometros;
    }

    getMillas(){
      return (this.kilometros*Distancia.conversorMillas);
    }

  }

  let d1 = new Distancia(10);
  console.log(d1.getMillas());

}
