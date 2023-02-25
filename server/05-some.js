// some(): Nos indica **si alguno** de los elementos en el array cumple con la condicional, por lo tanto siempre va a retornar un valor true/false

// Evaluar si almenos un elemento del array es par
const numbers = [1, 2, 3, 4];
let resultFor = false;
// Forma No.1
for (let index = 0; index < numbers.length; index++) {
  const element = numbers[index];
  if(element % 2 === 0) {
    resultFor = true;
    break;
  }
}
console.log("🚀 result:", resultFor);

// Forma dos
const resultSome = numbers.some(num => num % 2 === 0);
console.log("🚀 resultSome:", resultSome);