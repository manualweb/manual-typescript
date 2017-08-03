// Enumerados en TypeScript

enum Color {Rojo,Verde,Azul};
let c1:Color = Color.Rojo;

// Asignando otro valor numérico, ya que por defecto empieza en 0
enum Ciudad {Avila=12,Segovia=14,Salamanca=16};
let c2:Ciudad = Ciudad.Avila;

// Mostar el ca
let c3:string = Color[2];
console.log(c3);
