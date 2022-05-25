
// reduce(): Toma el array y lo reduce a un solo valor

const numbers = [1, 2, 3, 4, 5];

let sum = 0;
for (let index = 0; index < numbers.length; index++) {
  const value = numbers[index];
  sum += value;
}
console.log("🚀 sum:", sum);

const sumReduce = numbers.reduce((previosValue, currentValue) => previosValue + currentValue, 0);
console.log("🚀 sumReduce:", sumReduce);

// La función reduce() no solo trabaja con arreglos numéricos, tambien podemos reducir un array de objetos.
// Ejemplo: Mostrar el total de la lista de ordenes de compra
const orders = [
  {
    customerName: "Paola",
    total: 60,
    delivered: true,
  },
  {
    customerName: "David",
    total: 120,
    delivered: false,
  },
  {
    customerName: "Santiago",
    total: 180,
    delivered: true,
  },
  {
    customerName: "Valentina",
    total: 240,
    delivered: true,
  },
];

const total = orders.reduce((previosValue, order) => previosValue + order.total, 0);
// También podemos expresarlo de la siguiente forma:
// const total = orders.reduce((previosValue, { total } ) => previosValue + total, 0);
console.log("🚀 total:", total);

// Reloaded: Ademas de trabajar reduce para hacer sumas como en los ejemplos anteriores, también podemos utilizarlo para funcionalidades más complejas.
// Si queremos obtener un objeto con las coincidencias en los valores del array 

const numers2 = [1, 3, 2, 3, 5, 5, 5];
/* 
  Output:
  {
    "1": 1,
    "3": 2,
    "2": 1,
    "5": 3
  }
*/

// Forma 1
const output1 = numers2.reduce((previosObj, currentValue) => {
  if(!previosObj[currentValue]) {
    previosObj[currentValue] = 1;
  } else {
    previosObj[currentValue] = previosObj[currentValue] + 1
  }
  return previosObj;
}, {});
console.log("🚀 output1:", output1);

const output2 = numers2.reduce((obj, item) => ((obj[item] = ++obj[item] || 1), obj), {});
console.log("🚀 output2:", output2);

// Lo anterior también podemos hacerlo con objetos
const data = [
  {
    name: "Nicolas",
    level: "low",
  },
  {
    name: "Andrea",
    level: "medium",
  },
  {
    name: "Zulema",
    level: "hight",
  },
  {
    name: "Santiago",
    level: "low",
  },
  {
    name: "Valentina",
    level: "medium",
  },
  {
    name: "Lucia",
    level: "hight",
  },
];

// Forma uno:
const levels = data.reduce((prevObj, currObj) => {
  if(!prevObj[currObj.level]) {
    prevObj[currObj.level] = 1;
  } else {
    prevObj[currObj.level] += 1;
  }
  return prevObj;
}, {});
console.log("🚀 levels:", levels);


// Ejercicio
function random(min, max) {
  return Math.floor((Math.random() * (max - min + 1)) + min);
}

const randomNumbers = new Array(50).fill(0).map(n => random(1, 10));
console.log("🚀 randomNumbers:", randomNumbers);
const groups = randomNumbers.reduce((previosObj, currValue) => {
  if(currValue >= 1 && currValue <= 5) {
    previosObj["1-5"] = ++previosObj["1-5"] || 1;
  } else if (currValue >= 6 && currValue <= 8)  {
    previosObj["6-8"] = ++previosObj["6-8"] || 1;
  } else if (currValue >= 9 && currValue <= 10)  {
    previosObj["9-10"] = ++previosObj["9-10"] || 1;
  }
  return previosObj;
}, {});
console.log("🚀  groups:", groups);
