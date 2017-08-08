// Ejemplo del Interface Persona con propiedades opcionales

namespace InterfacePersona {

  interface Persona {
    nombre: string;
    edad?: number;
  }

  function datosPersona(p: Persona) {
    console.log("La persona se llama " + p.nombre + ".");
    if (p.edad)
      console.log("Y tiene " + p.edad + " años.");
  }

  let p1 = {nombre:"Carmen", edad:38};
  datosPersona(p1);

  let p2 = {nombre:"David", edad:22, ciudad:"Salamanca"};
  datosPersona(p2);

  let p3 = {nombre:"Rocío"};
  datosPersona(p3);

}
