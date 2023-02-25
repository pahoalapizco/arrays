// sort(): Función de ordenamiento (Es mutable). Por default el ordenamiento lo hace segun el código ASCII de cada caracter que esta dentro del array.
// La función sort() recibe un callback que nos ayuda a modificat el ordenamiento por default.
// El cb recibe
//  dos valores ya que necesita comparar ambos (a, b) (elemento actual , elemento siguiente), para ordenear de de forma ascendiente: (a, b) => a - b, ordernar de forma descendiente (a, b) => b - a

const months = ["March", "Jan", "Feb", "Dec"];
console.log(months.sort());
// output: [ 'Dec', 'Feb', 'Jan', 'March' ]

const numbers = [1, 30, 4, 21, 100000];
console.log(numbers.sort());
// output: [ 1, 100000, 21, 30, 4 ]
console.log(numbers.sort((a, b) => a - b));
// output: [ 1, 4, 21, 30, 100000 ]

const words = [
    "réservé",
    "premier",
    "communiqué",
    "café",
    "adieu",
    "éclair",
    "banana",
];
// Forma 1:
console.log(words.sort());
// Forma 2: Para navegadores no tan nuevos esta es otra alternativa
console.log(words.sort((a, b) => a.localeCompare(b)));


const orders = [
    {
        customerName: "Nicolas",
        total: 600,
        delivered: true,
        date: new Date('2022-03-05'),
    },
    {
        customerName: "Zulema",
        total: 120,
        delivered: false,
        date: new Date(),
    },
    {
        customerName: "Santiago",
        total: 1840,
        delivered: true,        
        date: new Date('2022-05-25'),
    },
    {
        customerName: "Valentina",
        total: 240,
        delivered: true,
        date: new Date('2022-01-05'),
    },
];

// Ordenamos de Mayor a Menor segun el total de la orden,
// En el callback a -> contiene al emeneto actual y b -> al elemento siguiente, al estar iterando sobre un array de objetos, entonces podemos acceder a sus propiedades (keys) ya que a y b son objetos (no valores como en un array de numbers, strings, etc.)
console.log(orders.sort((a, b) => b.total - a.total));

console.log(orders.sort((a, b) => a.date - b.date));