// flat() y faltMap(): funciones agregadas a las versiones más recientes de ecmascrip, nos ayudan a manipular arrays dentro de arrays.

// flat(): Toma el arreglo de arreglos (2 niveles) y los transforma a uno solo (1 nivel), [[], []] -> []

// Aplanar la siguiente matriz:
const matriz = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

// Solución con for
// Inconveniente: Si dentro del array de 2do nivel hay otro (3er nivel) tendriamos que anidar otro ciclo for.
const arrayAplanado = [];
for (let i = 0; i < matriz.length; i++) {
  const array = matriz[i];
  
  for (let j = 0; j < array.length; j++) {
    const element = array[j];
    arrayAplanado.push(element);
  }
}
console.log("🚀 ~ arrayAplanado", arrayAplanado);

// Solución con flat()
const arrayFlat = matriz.flat();
console.log("🚀 ~ arrayFlat", arrayFlat);

// NOTA: Generar función que simule a flat().