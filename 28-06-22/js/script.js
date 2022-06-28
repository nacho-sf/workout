
// Concatenar la eNésima letra de cada palabra de un array

// Devolverla como un "string", donde N es la posición de la palabra en la lista

//Ej: 
/*
["yoda", "best", "has"]  -->  "yes"
  ^        ^        ^
  n=0     n=1     n=2
*/


//Solución:

/*
let arrayTest = ["yoda","best","has"];

  // function findWord(arr){
  //   let word;
  //   word = arr[0][0] + arr[1][1] + arr[2][2];
  //   return word;
  // }


  
function findWord2(arr){
  let word = "";
  for (i = 0; i < arrayTest.length; i++){
    
    word += arr[i][i];
    
  }
  return word;
}

Al igual que un array, un string es iterable letra por letra
*/



// Ejemplo: contador de todas los caracteres del tipo introducido, en el array

/*
function contarCaracteres(arrayTest,character) {
  let count = 0;
  for (let i = 0; i < arrayTest.length; i++) { // array --> i
      console.log("****Chequeando la palabra:" + arrayTest[i]);
      for (let j = 0; j < arrayTest[i].length; j++) { //cada palabra --> j
          console.log(arrayTest[i][j]); // imprimir cada letra
          if (arrayTest[i][j].toLowerCase() == character) {
              // incrementar contador
              count++;
          }
      }
  }
  console.log("****Número de "+ character + ":" + count);

  return count;
}

let data = ["yoda", "best", "has", "tortilla", "cAfe", "barrita tomate", "zumo"];
contarCaracteres(data,"a");
*/








////////////// TEORÍA (Live Coding) ///////////////

// Crear elemento nuevo desde JS
// Teoría rampup ----> Nodos!!!

// Método para crear: const para = document.createElement("p");
//const node = document.createTextNode("This is new")

// Primero hay que crear los elementos, y luego unirlos entre ellos, y después unirlos al body de HTML:

//para.appendChild(node);





//Ejemplo:
//Crear Nodos HTML desde JS:
/*
let examples = document.getElementById("examples");

let p = document.createElement("p");
let text = document.createTextNode("Texto desde JS");

p.appendChild(text); //p-->txt

examples.appendChild(p); //div-->p
*/




//Query selector
/*
let lista2 = document.querySelectorAll(".clase2 > a");
console.log(lista2[0].href);

// pruebas con selectores
console.log(document.getElementById('miId1').innerText) // uno
console.log(document.querySelector('#miDiv .miClase').innerText) // cinco
console.log(document.querySelector('#miDiv #miId1.miClase').innerText) // uno
console.log(document.querySelectorAll("#miDiv .miClase"));
*/




//Paso 1: Sacar el nombre de los Lead Instructor de FullStack

//Solución 1:
/*
let nameLead = document.querySelectorAll('.fs-slide-content .fs-text'); //Nombres Lead
for (let i = 0; i < nameLead.length; i++) {
      console.log(nameLead[i].innerHTML);
}




//Paso 2: Sacar la URL de los Lead Instructor de FullStack
/*
let urlprofes=document.querySelectorAll(".fs-image");
for(let i=0; i<urlprofes.length;i++){
    console.log(document.querySelectorAll(".fs-image")[i].src);
}
*/




/////////// Ejercicio Nodos. Seguid con las mismas parejas

/*
Crear una lista. Añadir dos elementos <li> a un <ul>, y unirlos al DOM de tu página HTML. El <ul> también se debe crear desde JS.

Se puede usar:
  - innerHTML
  - appendChild()
  - createElement()
  - createAttribute()
  - createTextNode()
   Asociarlo a un botón para que se cree la lista cuando se haga click en el botón(usar eventos y listener)
   */

/*
let list = document.createElement('ul');
let element1 = document.createElement('li').appendChild(document.createTextNode('El1'));
let element2 = document.createElement('li');


const button = document.createElement('button');
button.type = 'button';
button.innerText = 'Haz Click';
document.body.appendChild(button);


function displayList() {
  document.body.appendChild(list);
  list.appendChild(element1);
  list.appendChild(element2);
}

document.querySelector('button').addEventListener("click", displayList);
*/


