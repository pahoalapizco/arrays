const letters = ['a', 'b', 'c', 'd'];

// Hay dos alternativas para iterar el arreglo "letter"
// 1. for: Ciclo que podemos utilizar en todos los lenguajes de programación que nos permite hacer recorridos en este caso a un array
// 2. forEach: Función que ya viene predefinida en los prototypes de arrays en js, recibe como parametro un calback con el item del array.
// Con ambas opciones podemos hacer lo mismo, la diferencia es que con forEach utilizamos menos líneas de código y estamos aprobechando lo prototipos de arrays que nos da JavaScript

// 1. for:
for (let index = 0; index < letters.length; index++) {
  const element = letters[index];
  console.log("🚀 ~ for", element);
}

// 2. forEach
letters.forEach(element => console.log("🚀 ~ forEach", element));