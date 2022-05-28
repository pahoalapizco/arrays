// join(): Retorna una transformación del array a string uniendolos por un carácter especifico.

// Unir los elementos con una coma (,)
const elements = ["Fire", "Air", "Water", "Earth"];

// Solución con for
let stringElementsFor = '';
let separator = ',';
for (let index = 0; index < elements.length; index++) {
  const element = elements[index];
  stringElementsFor += `${element}${separator}`;
}
console.log("🚀 ~ stringElementsFor", stringElementsFor);

// Solución con join()
const stringElementsJoin = elements.join(separator);
console.log("🚀 ~ stringElementsJoin", stringElementsJoin);

// Otro uso para join():
const title = 'This is an example title';
const finalTitle = title.split(' ').join('-');
console.log("🚀 ~ finalTitle", finalTitle);
