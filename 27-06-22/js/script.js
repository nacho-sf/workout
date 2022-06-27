/*
Nuestro ejercicio, será hacer una Chauchat virtual, que reproduzca su comportamiento.

Por un lado habrás de crear una variable cargador donde habrá de guardar unos 7 "pium!"

El otro elemento será nuestra chauchat, que "hace cosas", y será donde pondremos el cargador para que haga cosas.

chauchat(cargador)

Cuando ejecutemos dicho código, veremos impresos todos los "pium!" del cargador, uno tras otro.

En el caso de 3 "pium!" en el cargador, veremos en la consola:

pium!
pium!
pium!
*/



/*
function chauchat(cargador) {
    for (i = 0; i < cargador; i++) {
        console.log("pium!")
    }
    
}
chauchat(7);
*/









//Al tener el cargador abierto, era posible que se bloquease si algo entraba, como una "ramita". Digamos que existe un 80% de probabilidad de que se quede "pillada": Si se queda pillada, no habrá tiros y sólo mostrará un mensaje: "Illo, me he quedao pillá!"



/*
function chauchat(n){
    if (Math.floor(Math.random() * 10) <= 2){
      console.log('Illo, me he quedao pillá!')
    } else {
      for (let i = 0; i < n; i++) {
      console.log('pium!')
      }
    }
  }
  chauchat(7)
*/








/*
Para evitar que se caliente y se bloquee, cada 3 disparos se imprimirá un espacio: (el 80% de las veces se queda pillada, illo!)

pium!
pium!
pium!

pium!
pium!
pium!

pium!
pium!
pium!
*/


/*
function chauchat(cargador) {
    if (Math.floor(Math.random() * 10) <= 2) {
        for (i = 1; i < cargador; i++) {
            if (i % 4 == 0) {
                console.log(" ");
            }else{
                console.log("pium!");
            }
        }
    }else{
        console.log("Illo, me he quedao pillá!");
    }
}
chauchat(31);
*/



/*
let cargador = 33;
let cooldown = 0;
function chauchat(bullets){
  let rand =Array.from({length: bullets * 0.8}, () => Math.floor(Math.random() * (bullets * 0.8)));
  for(i = 0; i < bullets; i++){
    if(rand.includes(i)){
      console.log("Illo, me he quedao pillá!");
    }
    else{
      console.log("pium!");
      cooldown++;
      if(cooldown>=3){
        console.log(" ")
        
        cooldown = 0;
      }
    }
    
  }}
chauchat(cargador);
*/



/*
function chauchat(cargador) {
    cargador = 20;
    let atascado = Math.floor(Math.random() * cargador);
    var rafaga = "";
    for (i = 1; i <= cargador; i++) {
        if (i == atascado) {
            console.log(rafaga);
            console.log("illo me he quedao pilla!");
            console.log("Se ha atascado en la bala " + atascado);
            break;
        }
        else if (i > 0 && i % 3 == 0) {
            rafaga += 'pium!\n\n';
        } else {
            rafaga += 'pium!\n';
        }
    }
}
console.log(chauchat());
*/



/*
function disparar(disparos) {
    let gatillo = Math.random() * (100 - 0) + 0;//cifra al azar entre 0 y 100
    if (gatillo > 20) {//si sale menos de 20%
        for (let i = 1; i < disparos; i++) {
            if (i % 4 == 0) {
                console.log(” “);//añadir espacio cada 3 tiros
            }
            else { console.log(“pium!“); }
        }
    }
    else {
        console.log(“illo me quedao pillá!“);//si no 20% sale
    }
}
*/









//We want to generate a function that computes the series starting from 0 and ending until the given number. "0+1+2+3+4+5+6 = 21" given number = 6



// Solución 1:

/*
function crearSerie(n) {
    let sum = 0;
    let str = "0";
    for (i = 1; i <= n; i++) {
        sum += i;     //Suma acumulada
        str += "+"+i; //Genera la cadena de sumandos Ej: '0+1+2...'
    }
console.log(str+" = "+sum); // '0+1+2+3+4+5+6 = 21'
return sum;
}
crearSerie(20);
*/





//Solución 2 (con Array):

/*
function sumaSerie(count) {

    if (count === 0) return count + '=' + 0; //" 0==0"

    else if (count < 0) return count + '<' + 0; //" -15 < 0" o "-3<0"

    else { // count > 0 --> cualquier número positivo
        let serie = [], input = 0;
        for (let i = 0; i <= count; i++) {
            input += i; //acumulador sumatorio --> 0+1+2+3+....+count, etc
            serie.push(i); // genera array --> [0,1,2,3,.....,count]
        };

        return serie.join('+') + ' = ' + input; 
        // count = 7
        // salida --> "0+1+2+3+4+5+6+7 = 28 "
    }
}
*/