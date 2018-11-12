/** Esta função recebe dois numeros x(divisor) e outro y(dividendo) inteiros,
 * e retorna o resto da divisão, caso contrario o retorno é falso;
 *  @param {int} numero inteiro qualquer
 *  @param {int} numero inteiro qualquer maior que o primeiro valor recebido
 * @returns{int} valor inteiro da divisão do modulo.
 */


var restoDaDivisao = function(valorDivisor,valorDividendo){
    if(valorDividendo > valorDivisor || valorDividendo < 0 || valorDivisor < 0){
       return false
    }else{
        return Math.trunc(valorDividendo % valorDivisor);
     }
}

var restoDaDivisao2 = function(valorDivisor,valorDividendo){
    if(valorDividendo > valorDivisor || valorDividendo < 0 || valorDivisor < 0){
        return false;
    }
    var resto = valorDividendo;
        while(valorDivisor < resto){
            resto = resto % valorDivisor;
        }
        return Math.trunc(resto);   
}

module.exports.restoDaDivisao = restoDaDivisao;