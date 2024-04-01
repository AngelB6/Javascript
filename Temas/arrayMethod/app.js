// Metodo MAP = Recorre cada uno de los elementos de arreglo

// const frutas = ["🍌", "🍎", "🍓"];

// const nuevoArray = frutas.map((fruta) => fruta)

// console.log(nuevoArray);

// const users =[
//     { name: "Jhon", age: 34 },
//     { name: "Amy", age: 20},
//     { name: "camperCat", age: 10}
// ]

// const names = users.map((user)=>user.name)

// console.log(names);

// const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const numerosX2 = numeros.map((numero) => numero * 2);

// console.log(numerosX2);

// Metodo Filter = Filtra por todos los items del arreglo que coincidan con el filtro

// const users = [
//   { uid: 1, name: "Jhon", age: 34 },
//   { uid: 2, name: "Amy", age: 20 },
//   { uid: 3, name: "camperCat", age: 10 },
// ];

// const popUser = users.filter((user) => user.uid !== 3);

// const userMayor10 = users.filter((user) => user.age > 10);

// console.log(userMayor10);

// console.log(popUser);

// console.log(users);

// Metodo Find = Filtra y separa el primer item que conicida con la condicion

// const users = [
//   { uid: 1, name: "Jhon", age: 34 },
//   { uid: 2, name: "Amy", age: 30 },
//   { uid: 2, name: "Amy", age: 20 },
//   { uid: 3, name: "camperCat", age: 10 },
// ];

// const { uid } = users.find((user) => user.name === "Amy");

// console.log(uid);

// Metodo Some = Comprueba si al menos un elemento del Array cumple con la condicion y devuelve un booleano (True - False)

// const users = [
//   { uid: 1, name: "Jhon", age: 34 },
//   { uid: 2, name: "Amy", age: 30 },
//   { uid: 2, name: "Amy", age: 20 },
//   { uid: 3, name: "camperCat", age: 10 },
// ];

// const existe = users.some((user) => user.uid === 2)

// console.log(existe);

// Metodo findIndex: Devuelve el inidice (Posicion) del primer elemento que cumpla con la condicion, en caso contrario, devulve -1

// const users = [
//   { uid: 1, name: "Jhon", age: 34 },
//   { uid: 2, name: "Amy", age: 30 },
//   { uid: 3, name: "camperCat", age: 10 },
// ];

// const indiceAmy = users.findIndex((user) => user.uid === 2);

// console.log(users[indiceAmy]);

// Metodo Slice: Devuelve una copia de una parte del Array original de inicio a fin (No incluye el fin)

// const array = ["Cat", "Dog", "Tiger", "Zebra"];
// //               0     [1       2]       3

// const newArray = array.slice(1, 3);

// console.log(newArray);

// Metodo Concat: Se utiliza para concatenar dos o mas arreglos

// const array1 = ["a", "b", "c"]
// const array2 = ["d", "e", "f"]

// const arrayConcat = array1.concat(array2)

// console.log(arrayConcat);

// Spread syntax: Permite expandir (unir, concatenar) los elementos de un objeto iterable sin la necesidad del metodo concat

// const array1 = ["a", "b", "c"];
// const array2 = ["d", "e", "f"];

// const arrayConcat = [...array1, ...array2];

// console.log(arrayConcat);

// Reduce: Ejecuta una funcion reductora sobre cada uno de los elementos del arreglo devolviendo como resultado un unico valor - acc = acumulador - current = valor actual

// const numeros = [1, 2, 3, 4, 5];

// const sumarTodo = numeros.reduce((acc, current) => acc + current);

// console.log(sumarTodo);

// Reduce tambien se puede utilizar para "aplanar" un arreglo, ej a continuación

// Con concat

// const arrayNumeros = [
//   [0, 1],
//   [2, 3],
//   [4, 5],
// ];

// const numPlanos = arrayNumeros.reduce((acc, current) => acc.concat(current));

// console.log(numPlanos);

// Con Spread syntax

// const arrayNumeros = [
//   [0, 1],
//   [2, 3],
//   [4, 5],
// ];

// const numPlanos = [].concat(...arrayNumeros);

// console.log(numPlanos);

// Con flat, de ser necesario toca especificar el nivel de profundidad dentro de la funcion como un parametro .flat(2)

// const arrayNumeros = [
//   [0, 1],
//   [2, 3],
//   [4, 5],
// ];

// const numPlanos = arrayNumeros.flat();

// console.log(numPlanos);

// Metodo Split: Separa en un array todo el contenido indicando cual es el separador

const cadenaMeses = "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec";

const arrayMeses = cadenaMeses.split(",");

console.log(arrayMeses);

// Metodo join: Al contrario del split crea una union por medio de separadores a eleccion

const newText = arrayMeses.join("-");

console.log(newText);
