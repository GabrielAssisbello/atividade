const nomes = [
  "Ana maria",
  "Antonio",
  "Rodrigo ",
  "Marcos",
  "Antonieta",
  "Andressa",
  "Alex",
];

const apenasComA = nomes.filter((n) => n.startsWith("A"));
console.log(apenasComA);

const primeiras = nomes.map((n) => n.charAt(0));
console.log(primeiras);

const todosComA = nomes.every((n) => n.startsWith("A"));
console.log(todosComA);

const numero = [1, 2, 3, 4, 5];
const soma = numero.reduce((ac, v) => ac + v);
console.log(soma);

const palavra = 'amor';
console.log(palavra.indexOf('m'));

const nomesComO = nomes.filter((n) => n.indexOf('o')>-1);
console.log(nomesComO);