// Ejemplo del Interface Persona para explicar el uso de Interfaces en TypeScript

namespace InterfacePersona {

  interface Persona {
    nombre: string;
    edad: number;
  }

  function datosPersona(p: Persona) {
    console.log("La persona se llama " + p.nombre + ".");
    console.log("Y tiene " + p.edad + " años.");
  }

  let p1 = {nombre:"Carmen", edad:38};
  datosPersona(p1);

  let p2 = {nombre:"David", edad:22, ciudad:"Salamanca"};
  datosPersona(p2);

  let p3 = {nombre:"Rocío"};
  // NO podemos invocar ya que no contiene la propiedad edad.
  // datosPersona(p3);

}
