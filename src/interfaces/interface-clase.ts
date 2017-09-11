
// Clase que implementa un interface

interface Figura {
  area:number;
  setArea(area:number);
}

class Cuadrado implements Figura {
  area:number;
  setArea(a:number){
    this.area = a;
  }
}
