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
// console.log("🚀 orders", orders);

// Trasforma un array de objetos en un array numérico
const totals = orders.map(item => item.total);
// console.log("🚀 totals", totals);

// map() transforma un array sin mutarlo cuando este contiene tipos primitivos (string, integer, boolean, etc). Sin embargo no ocurre lo mismo cuando trabajamos con arrays de objetos, pues al iterar con map cada objeto estamos accediendo a su referencia en memoria y al modificar el elemento en mal() en realidad estamos modificando en la referencia a la que accedimos.

// En este ejemplo ocurre lo descrito en el comentario anteriors.
/*
  1. Toma el item del objeto que estamos iterando
  2. Directamente al item le añade el key "tax"
    NOTA: Al hacer  item.tax = 0.16; es cuando modifica su referencia en memoria.
  3. Retorna el item modificado
  4. Regresa un nuevo arreglo con el key "tax", sin embargo tambien añadio "tax" al objeto del array original.

*/
const taxOrdersMutable = orders.map(item => {
  item.tax = 0.16;
  return item;
});
console.log("🚀 taxOrdersMutable", taxOrdersMutable);
console.log("🚀 taxOrdersMutable - orders", orders);

// Solución: Utilizar spread operator para hacer una copia del elemento y sobre ese nuevo elemento comenzar la transformación.

// Para que este ejemplo funcione necesitamos comentar el anterior XD
const taxOrdersInmutable = orders.map(item => {
  return {
    ...item,
    tax: 0.16,
  };
});
console.log("🚀 taxOrdersInmutable", taxOrdersInmutable);
console.log("🚀 taxOrdersInmutable - orders", orders);

