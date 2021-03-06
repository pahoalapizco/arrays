/******************************find()******************************** */
// find(): Similar a filter, a excepci贸n que este regresa un solo elemento y siempre ser谩 el primero que cumpla con la condici贸n.
// Cuando no encuentra el elemento regresa un undefined

// Buscar un elemento menor a 30.
const numbers = [1, 10, 15, 28, 30, 5, 80];
// Soluci贸n con ciclo for
let result;
for (let index = 0; index < numbers.length; index++) {
  const element = numbers[index];
  if(element < 30) {
    result = element;
    break;
  }
}
console.log("馃殌 ~ result", result);

// Soluci贸n con find();
const resultFind = numbers.find(num => num < 30);
console.log("馃殌 ~ resultFind", resultFind);

// Buscar por id en un array de objetos
const products = [
  {
    name: "Pizza",
    price: 12,
    id: '馃崟'
  },
  {
    name: "Burger",
    price: 23,
    id: '馃崝'
  },
  {
    name: "Hot dog",
    price: 34,
    id: '馃尛'
  },
  {
    name: "Hot cakes",
    price: 355,
    id: '馃'
  },
];

const resultFindObj = products.find(prod => prod.id === '馃');
console.log("馃殌 ~ resultFindObj", resultFindObj);

/******************************findIndex()******************************** */
// findIndex(): A diferencia de find, esta funci贸n regresa el indice/posici贸n donde se encuentra el elemento dentro del array
// Cuando no encuentra el elemento regresa un -1

const resultFindIndex = products.findIndex(prod => prod.id === '馃');
console.log("馃殌 ~ resultFindIndex", resultFindIndex);
