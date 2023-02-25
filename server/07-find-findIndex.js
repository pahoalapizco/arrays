/******************************find()******************************** */
// find(): Similar a filter, a excepción que este regresa un solo elemento y siempre será el primero que cumpla con la condición.
// Cuando no encuentra el elemento regresa un undefined

// Buscar un elemento menor a 30.
const numbers = [1, 10, 15, 28, 30, 5, 80];
// Solución con ciclo for
let result;
for (let index = 0; index < numbers.length; index++) {
  const element = numbers[index];
  if(element < 30) {
    result = element;
    break;
  }
}
console.log("🚀 ~ result", result);

// Solución con find();
const resultFind = numbers.find(num => num < 30);
console.log("🚀 ~ resultFind", resultFind);

// Buscar por id en un array de objetos
const products = [
  {
    name: "Pizza",
    price: 12,
    id: '🍕'
  },
  {
    name: "Burger",
    price: 23,
    id: '🍔'
  },
  {
    name: "Hot dog",
    price: 34,
    id: '🌭'
  },
  {
    name: "Hot cakes",
    price: 355,
    id: '🥞'
  },
];

const resultFindObj = products.find(prod => prod.id === '🥞');
console.log("🚀 ~ resultFindObj", resultFindObj);

/******************************findIndex()******************************** */
// findIndex(): A diferencia de find, esta función regresa el indice/posición donde se encuentra el elemento dentro del array
// Cuando no encuentra el elemento regresa un -1

const resultFindIndex = products.findIndex(prod => prod.id === '🥞');
console.log("🚀 ~ resultFindIndex", resultFindIndex);
