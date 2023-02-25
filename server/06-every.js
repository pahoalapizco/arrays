// every(): Es la función opuesta de some() ya que todos los elementos debe cumplir con la condición, pero de igual forma regresa una respuesta true/false

// Todos los elementos del array debe ser igual o mejor de 40.

const numbers = [1, 30, 49, 29, 10, 13];

// Solución con un ciclo for
let result = true;
for (let index = 0; index < numbers.length; index++) {
  const element = numbers[index];
  if(element > 40) {
    result = false;
    break;
  }
}
console.log("🚀 ~ for - result:", result);
const resultEvery = numbers.every(num => num <= 40);
console.log("🚀 ~ every - result:", resultEvery);


// Every con array de objetos.

const team = [
  {
    name: "Nicolas",
    age: 12,
  },
  {
    name: "Andrea",
    age: 8,
  },
  {
    name: "Zulema",
    age: 2,
  },
  {
    name: "Santiago",
    age: 18,
  },
];

const underFifteen = team.every(item => item.age <= 15);
console.log("🚀 ~ underFifteen:", underFifteen);