
// Interfaces que extienden de una clase

namespace InterfaceExtendsClase {

  class Borde {
    anchoBorde:number;
    colorBorde:string;
  }

  interface FiguraConBorde extends Borde {
    cambiarColor(color:string);
  }


  class Figura extends Borde implements FiguraConBorde {
    area:number;
    cambiarColor(c:string) {
      this.colorBorde = c;
    }
  }


}
