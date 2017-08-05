// Hacer un unpack de un Array

var miarr:number[] = [1,2,3,4,5];
var [uno,dos, ...resto] = miarr;

console.log(uno);
console.log(dos);
console.log(resto);
