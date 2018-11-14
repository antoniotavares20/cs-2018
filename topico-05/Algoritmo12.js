/** Esta função recebe um numero inteiro qualquer e verifica se ele é ou não 
 * um quadrado perfeito.
 * @param {int} numeroN- número de lados do elemento (figura geometrica)
 * @return {dooble} retorna verdadeiro ou falso caso o numero informado seja um 
 * quadrado perfeito
 */

 var quadradoPerefeito = (numeroN)=>{
   var somatorio = 1;
   var indice = 1;
    if(numeroN<1){
        return false;
    }else{
        while(somatorio<numeroN){
            indice = indice + 2;
            somatorio = somatorio + indice; 
        }
    }
    if(somatorio == numeroN){
        return true;
    }
    return false;
 }
 module.exports.quadradoPerefeito =  quadradoPerefeito;