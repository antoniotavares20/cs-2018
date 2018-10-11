const Matematica =  require('./Matematica');

const funcoes = new Matematica();

const a = parseInt(process.argv[2]);
const b = parseInt(process.argv[3]); 

const soma = funcoes.(a,b)

console.log(`A soma de ${a} e ${b} é ${soma}.`);