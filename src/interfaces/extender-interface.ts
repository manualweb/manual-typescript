

interface Figura {
  area:number;
}

interface Borde {
  colorBorde:string;
  anchoBorde:string;
}

interface Cuadrado extends Figura, Borde {
  lado:number;
}

let cd1 = <Cuadrado>{};
cd1.lado = 2;
cd1.area = 4;
cd1.colorBorde = 'black';
