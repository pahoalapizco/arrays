// includes(): Nos dice si un elemento esta o no dentro del array. Nos regresa true/false
// Al no rexibir una unción como parametro solo se podria trabajar con objetos si se pasa la referencia completa de este.
// includes() también funciona con strings, nos ayuda a buscar coincidencias en una cadena.

// Verificar si en el array se ecuentra un cat
const pets = ['cat', 'dog', 'fish', 'bunny', 'bird'];

// Solución con ciclo for
let resultFor = false;
for (let index = 0; index < pets.length; index++) {
  const element = pets[index];
  if(element === 'cat') {
    resultFor = true;
    break;
  }
}
console.log("🚀 ~ resultFor", resultFor);

const resultIncludes = pets.includes('cat');
console.log("🚀 ~ resultIncludes", resultIncludes);

