/**Esta função realiza o calculo de uma potencia de elementos naturais
 * em um dado somatorio abaixo. 
 * @param {int} potencia 
 * @param {int} k total de elementos  
 */
var potencia = (n, k)=>{
    var e = n + 1;
    var i = 2;
    var numerador = n;
    var denominador = 1;
       
    if(n < 1 || k < 2 ){
        return false;
    }else{
        while(i <= k){
             numerador = numerador * numerador;
             denominador = denominador * i;
             e = e + numerador/denominador;
             i = i + 1;
        }
        
     }return e;
}
module.exports.potencia;
