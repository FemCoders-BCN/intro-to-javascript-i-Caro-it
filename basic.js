//Bienvenida a Javascript básico, para comentar una linea de código puedes usar las dos barras // y para comentar un bloque de varias líneas puedes usar barra y asterisco para abrir /*  asterisco y barra para cerrar */

//En el archivo index.html que tienes abierto en el navegador (preferiblemente chrome o firefox) vamos a trabajar con la consola, abre tu inspector y en la pestaña de consola, mira si puedes ver el mensaje escrito abajo.

console.log('Hola soy tu consola y juntas vamos a aprender Javascript')

//Si has encontrado el mensaje puedes continuar con los ejercicios

//Ejercicio 1: Imprime en la consola "Bienvenida al bootcamp de FemCoders de Factoría F5" y mira en tu navegador si sale el resultado.

console.log ('"Bienvenida al bootcamp de FemCoders de Factoría F5"')

//VARIABLES Y TIPOS DE DATOS
//Ejercicio 2: Crea una variable por cada tipo de dato: string, number, boolean, null, undefined, object, array e imprímelos en la consola.

//Escribe tu código aquí

let string = ('Esto es un string');

let number = 42;

let boolean= true;

let nul= null;

let indefinido;

let object = {nombre: "Caro", edad: 25};

let array = [0,1,2,3,4];


//Ejercicio 3: Crea una constante llamada postres con un tipo de dato array que contiene los siguientes elementos: helado, tarta, pastel e imprímelo en la consola. 

//Escribe tu código aquí

let postres= ["Helado", "Tarta","Pastel"];
console.log ("Postres:", postres);


//Ejercicio 4: Crea una constante con un tipo de dato objeto llamado coder que contengan dos propiedades, nombre y edad e imprímelo en la consola.

//Escribe tu código aquí

let coder = {Nombre: "Carolina", Edad:"25"};
console.log (coder);


//Ejercicio 5: Busca como imprimir en consola el tipo de dato de cada variable que hemos creado en el ejercicio 2.

//Escribe tu código aquí
console.log (string);
console.log ("esto es un numero:", number);
console.log ("esto es un boleano:", boolean);
console.log ("esto es un null:", nul);
console.log ("esto es un undefined:", indefinido);
console.log ("esto es un objecto:", object);
console.log ("esto es un array:", array);

//OPERADORES ARITMÉTICOS
//Ejercicio 6: Crea una varible que sume 2 números e imprime el resultado en consola.

//Escribe tu código aquí

let numero1= 1;
let numero2 = 2;
let suma = numero1 + numero2;
console.log ("El resultado de la suma es:", suma);



//Ejercicio 7: Crea una varible que reste 2 números e imprime el resultado en consola.

//Escribe tu código aquí
let numero3= 1;
let numero4 = 2;
let resta = numero3 - numero4;
console.log ("El resultado de la resta es:", resta);



//Ejercicio 8: Crea una varible que multiplique 2 números e imprime el resultado en consola.

//Escribe tu código aquí
let numero5= 1;
let numero6 = 2;
let multiplicación = numero5*numero6;
console.log ("El resultado de la multiplicación es:", multiplicación);




//Ejercicio 9: Crea una varible que divida 2 números e imprime el resultado en consola.

//Escribe tu código aquí
let numero7= 1;
let numero8 = 2;
let división = numero7/numero8;
console.log ("El resultado de la división es:", división);




//OPERADORES DE COMPARACIÓN
// Ejercicio 10: Crea dos variables, la primera con un valor numérico de 1 y la segunda con un valor numérico de 2, compara ambas variables dentro de otra variable e imprime en la consola para ver el resultado.

//Escribe tu código aquí

let numero9= 1;
let numero10 = 2;

let esMayor = numero9 > numero10; 
let esMenor = numero9 < numero10; 
let sonIguales = numero9 === numero10; 


console.log("¿numero9 es mayor que numero10?:", esMayor);
console.log("¿numero9 es menor que numero10?:", esMenor);
console.log("¿numero9 es igual a numero10?:", sonIguales);


// Ejercicio 11: Crea otra variable que compare las dos primeras variables creadas en el ejercicio anterior, para que el resultado impreso en la consola sea true.

//Escribe tu código aquí

let numero11 = 4

let comp= numero11 > numero10 && numero10 > numero9; 

console.log("¿numero11 es mayor que numero10 y que numero9?:", comp);

//Ejercicio 12: completa el ejercicio

let num1 = 15
let num2= 20

let comparision = num1<num2//Realiza la operación de comparación que consideres para que el resultado en consola sea true
console.log("¿num2 es mayor que num1?:", comparision)

//Ejercicio 13: completa el ejercicio

let num3 = 1
let num3AsString = "1"

let result = num3 === num3AsString;//Realiza la operación de comparación que consideres entre las dos variables dadas, para que el resultado en consola sea false sin usar el comparador de desigualdad
console.log("¿num3 es igual en valor y en tipo de variable a num3AaAtring?:", result);


//Ejercicio 14: completa el ejercicio

let result2 = num3 !== num3AsString //Realiza la operación de comparación que consideres con las dos variables del ejercicio anterior para que el resultado en consola sea true.
console.log("¿num3 es diferente en valor y en tipo de variable a num3AsString?:", result2)


//OPERADORES DE CADENAS
//Ejercicio 15: Crea una variable con tu nombre y otra variable con tu apellido y crea otra nueva variable con tu nombre completo concatenando las dos variables anteriores e imprime en consola. Debe haber un espacio entre tu nombre y apellido.
//Escribe tu código aquí

let nombre = "Carolina";
let apellido = "Kaechele";

let nombreCompleto = nombre +" " + apellido;

console.log (nombreCompleto)


//OPERADORES DE LÓGICA
//Ejercicio 16: Descomenta todo el bloque desde la variable 'a' hasta el 'console.log(res6)' y completa el ejercicio. (Saldrá un error y no podrás visualizar el resultado hasta que termines este ejercicio)

let a = 6;
let b = 3;

let res =  a < 10 && b > 1 //Eliminar el espacio "__" y coloca el comparador lógico que consideres para que el resultado sea true
console.log(res)

let res2 = a < 10 && b < 1 //Eliminar el espacio "__" y coloca el comparador lógico que consideres para que el resultado sea false
console.log(res2)

let res3 = a == 5 & b == 5 //Eliminar el espacio "__" y coloca el comparador lógico que consideres para que el resultado sea false
console.log(res3)

let res4 = a == 6 || b == 0 //Eliminar el espacio "__" y coloca el comparador lógico que consideres para que el resultado sea true
console.log(res4)

let res5 = a == 0 || b == 3 //Eliminar el espacio "__" y coloca el comparador lógico que consideres para que el resultado sea true
console.log(res5)

let res6 = a == 6 && b == 3 //Eliminar el espacio "__" y coloca el comparador lógico que consideres para que el resultado sea true
console.log(res6) 
xxxxxxxxxx