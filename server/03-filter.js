// filter(): Filtra los elementos de un array con base en un condicional, solo los elementos que cumplan con ese condicional van a formar parte de ese nuevo array. Tambiéen es inmutable

const words = ['spray', 'limit', 'elite', 'exuberant'];

// Condición: Devolver una array con las palabras que tengan 6 o más carácteres.

// Utilizando for:
const sixWordsFor = [];
for (let index = 0; index < words.length; index++) {
  const word = words[index];
  if(word.length >= 6) {
    sixWordsFor.push(word);
  }
}
console.log("🚀 sixWordsFor", sixWordsFor);

// Utilizando filter
const sixWordsFilter = words.filter(word => word.length >= 6);
console.log("🚀sixWordsFilter", sixWordsFilter);


// Ademas de trabajar con valores primitivos, con filter() al igual que con map() podemos trabajar con arreglos.

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

// Condición: regresar todos las ordenes que ya fueron entregadas
const deliveredOrders = orders.filter(order => order.delivered); // delivered al ser un valor booleano no ocupamos poner delivered === true
console.log("🚀 deliveredOrders", deliveredOrders);

// Condición: regresar todas las ordenes que ya fueron entregadas y que en su total sea mayor a 100

const deliveredOver100Orers = orders.filter(order => order.delivered && order.total > 100);
console.log("🚀 deliveredOver100Orers", deliveredOver100Orers);


// Podemos utilizar filter() con un grado de complejidad mayor
const search = query => {
  return orders.filter(order => order.customerName.includes(query));
};

console.log(search('P'));