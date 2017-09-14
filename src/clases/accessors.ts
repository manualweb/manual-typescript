
// Definición de getters & Setters
// Solo funciona si compilas a ECMAScript 5 o superior

namespace Accesors {


  class Figura {
    private _name:string;
    private area:number;

    constructor(nombre:string,area:number){
      this._name = nombre;
      this.area = area;
    }

    get name():string {
      return this._name;
    }

    set name(n:string){
      this._name = n;
    }

  }

  let f = new Figura("cuadrado",3);
  f.name = "triangulo";
  console.log(f.name);


}
