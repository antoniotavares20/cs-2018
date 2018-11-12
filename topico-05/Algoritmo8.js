/**Esta função realiza a construção de uma potencia reutilizando
 *  o resutado do produto da base fornecida até que o numero 
 * de reutilizaçoes seja equivalente ao expoente propriamente fornecido
 * @param{int} base - numeiro inteiro maior que zero
 * @param{int} expoente- numero inteiro maior que zero
 */

 produto = function(base, expoente){
  var indice = 1;
  var total = 1;
    if(base <= 0 || expoente <= 0){
         return false;
     }else{
        while(indice <= expoente){
            total = (total * base);
            console.log(expoente);
            indice++;
        }
     }
     return total;  
 }
 module.exports.produto = produto;