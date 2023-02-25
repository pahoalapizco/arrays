// flat() y faltMap(): funciones agregadas a las versiones más recientes de ecmascrip, nos ayudan a manipular arrays dentro de arrays.

// flat(): Toma el arreglo de arreglos (2 niveles) y los transforma a uno solo (1 nivel), [[], []] -> []

// Aplanar la siguiente matriz:
const matriz = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

// Solución con for
// Inconveniente: Si dentro del array de 2do nivel hay otro (3er nivel) tendriamos que anidar otro ciclo for.
const arrayAplanado = [];
for (let i = 0; i < matriz.length; i++) {
  const array = matriz[i];
  
  for (let j = 0; j < array.length; j++) {
    const element = array[j];
    arrayAplanado.push(element);
  }
}
console.log("🚀 ~ arrayAplanado", arrayAplanado);

// Solución con flat()
const arrayFlat = matriz.flat();
console.log("🚀 ~ arrayFlat", arrayFlat);

// NOTA: Generar función que simule a flat().

// flatMap(): Es la combinación de las funciones flat() y map(). Este metodo solo funciona en arrays de un solo nivel

const users = [
  { userId: 1, username: "Tom", attributes: ["Nice", "Cute"]},
  { userId: 2, username: "Mike", attributes: ["Lovely"]},
  { userId: 3, username: "Nico", attributes: ["Nice", "Cool"]},
];

// Aplanar el array de objetos por sus attributes

// mat-flat
const result = users.map(user => user.attributes).flat();
console.log("🚀 mat- flat ~ ", result);

// flatMap():
const resultFM = users.flatMap(user => user.attributes);
console.log("🚀 flatMap ~ ", resultFM);


// Regresar en un solo arreglo startDate
const calendars = {
  primaryCalendar: [
    {
      startDate: new Date(2021, 1, 1, 15),
      endDate: new Date(2021, 1, 1, 15, 30),
      title: "Cita 1",
    },
    {
      startDate: new Date(2021, 1, 1, 17),
      endDate: new Date(2021, 1, 1, 18),
      title: "Cita 2",
    },
  ],
  secondaryCalendar: [
    {
      startDate: new Date(2021, 1, 1, 12),
      endDate: new Date(2021, 1, 1, 12, 30),
      title: "Cita 2",
    },
    {
      startDate: new Date(2021, 1, 1, 9),
      endDate: new Date(2021, 1, 1, 10),
      title: "Cita 4",
    },
  ],
};

// Solución:
const startDates = [];
Object.keys(calendars).forEach(key => {
  const dates = calendars[key].flatMap(calendar => calendar.startDate);
  startDates.push(...dates);
});
console.log("🚀 ~ startDates", startDates);