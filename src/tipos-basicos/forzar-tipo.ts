// Vamos a forzar el tipo de la variable

let y:any = "Hola"

// Mediante <>
let size:number = (<string>y).length;
console.log(size);

// Mediante as
let size2:number = (y as string).length;
console.log(size2);
