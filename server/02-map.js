/* 
  map(): Transforma un array sin mutar la data.
  Función map() ya viene predefinida en los prototypes de arrays en js, map es inmutable ya que no modifica el array original, sino que crea uno nuevo con los resultados de la transformación aplicada a los elementos del array que estamos "mapeando"

  map() siempre regresa el mismo nuemero de elementos
*/

const letters = ['a', 'b', 'c', 'd'];
console.log("🚀 ~ letters:", letters)
const newArrayFor = [];

for (let index = 0; index < letters.length; index++) {
  const element = letters[index].toUpperCase();
  newArrayFor.push(element);
}
console.log("🚀 ~ for:", newArrayFor);

const newArrayMap = letters.map(letter => letter.toUpperCase());
console.log("🚀 ~ map:", newArrayMap);

