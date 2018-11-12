/**Esta função retorna o limite do valor de PI
 * @param {int} comprimento de PI
 * @returns {float} tamanho de PI
 * 
 */
var tamanho = (comprimento)=>{
    var indice = 1;
    var somatorio = -1;
    var d = -1;
    var pi = 0;
    
    if(tamanho <= 0){
        return false;
    }else{
        while(indice < comprimento){
            d = d+2;
            somatorio = somatorio* -1;
            pi = pi + (4 * (somatorio/d));
            indice++;
            
        }
    }
    return Math.trunc(pi);   
}
module.exports.tamanho = tamanho;