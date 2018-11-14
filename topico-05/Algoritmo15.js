/**Esta função retorna o crivo de Aristoteles, a partir da eliminação dos numeros primos
 * e a soma dos demais numeros da sequencia dada.
 * @constructor
 * @param {int} a 
 * @param {int} n 
 */
var crivoEratosten = (a, n)=>{
    var i = 2;
    var limite =  Math.sqrt(n);
    var multiplo = 0;
    //Verifica se para todo i maior que 2 e para todo i menor que i por contadição
    if(2 >= i || i >=n ){
        return false;
    
     while(i <= limite){
         if(n > 1 && a[i] ==0){
            if(a[i] ==0){
                multiplo = i + i;
            }
             while(multiplo <= n){
                a[multiplo] = 1;
                multiplo++;
             }
            }
            i++;
        }
    } else return false;
};
module.exports.crivoEratosten = crivoEratosten;