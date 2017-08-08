// Ejemplo de interface TypeScript con propiedades readonly


namespace InterfaceReadOnly {


  interface Rectangulo {
    readonly alto:number;
    readonly ancho:number;
  }

  function area(r:Rectangulo): number {
    // r.alto = 10;  // No se puede asignar ya que es readonly
    return r.alto*r.ancho
  }


  let r1 = {alto:10, ancho:11};
  console.log(area(r1));



}
