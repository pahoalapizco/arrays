// concat(): Nos ayuda a fusionar arrays, esta función es inmutable ya que regresa un array nuevo con los elementos de los N arrays juntos.

const array1 = [1,2,3,4];
const array2 = [5,6,7,8];

//Solución con for
const newArray = [...array1];
for (let index = 0; index < array2.length; index++) {
  const element = array2[index];
  newArray.push(element);
}
console.log("🚀 ~ newArray:", newArray);

// Solución con concat()
const newArray2 = array1.concat(array2);
console.log("🚀 ~ newArray2:", newArray2);