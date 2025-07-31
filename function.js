//funzioni
//una funzione è un blocco di codice riutilizzabile, richiamabile tramite
// il suo nome nel programma

//funzione VOID senza input,output
//definire una funzione non vuol dire eseguirla
function bark() {
  console.log("Bau!");
}
//ora ho invocato la funzione e si eseguirà
bark();
bark();
bark();
bark();

//funzione VOID con side effect, avrà un effetto nel codice
let num = 0;
function addOne() {
  num++; //side effect, la modifica avviene aldifuori della variabile
}
console.log(num);
addOne();
console.log(num);

//funzione fruitful, avrà un valore di ritorno

function sum() {
  return 10 + 5;
}

sum();
const result = sum();
console.log(result);

//parametro di input---> un parametro è un contenitore di valore che aquisirà valore quando si avvia la funzione, fungerà da placeholder quando la funzione non è chiamata

function dynamicSum(num1, num2) {
  //tra le tonde c`è l`argomnto della funzione,il valore assunto dai parametri
  const result = num1 + num2;
  return result;
}

const output1 = dynamicSum(5, 2);
const output2 = dynamicSum(15, 22);
const output3 = dynamicSum(51, 27);

console.log("output1", output1);
console.log("output2", output2);
console.log("output3", output3);

function sayHi(name) {
  if (name !== undefined) {
    console.log("ciao," + name);
  } else {
    console.log("ciao, Sig. nessuno");
  }
}

sayHi("claudio");
sayHi("luca");
sayHi("andrea");
sayHi("udio");
sayHi();

const greet = function (name) {
  console.log("hey" + name);
};

//creiamo una funzione che crea un random number

const giveMeRandom = function (max = 1) {
  const randNum = Math.floor(Math.random() * max);
  return randNum;
};
console.log("dammi un numero a caso ", giveMeRandom(100));
console.log("dammi un numero a caso ", giveMeRandom(50));

const generateNumberList = function (limit) {
  const arrOfNums = [];
  for (let i = 0; i < limit; i++) {
    const newRandNumb = giveMeRandom(limit);
    arrOfNums.push(newRandNumb);
  }
  return arrOfNums;
};
console.log(generateNumberList(15));
console.log(generateNumberList(56));
console.log(generateNumberList(78));
