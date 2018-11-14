/** Esta funçao realiza o processo para definir um numero aureo
 * ("um numero dentro de outro") a partir da proporção encontrada.
 * 
 * @constructor
 * @param {int} x um numero inteiro maior que zero qualquer.
 * 
 * @param {int} y um numero inteiro maior que zero qualquer.
 *
 *  @param {int} y um numero inteiro maior que zero qualquer.
 *
 *  @argument esta função trabalha apenas com 3(três) números
 *  @returns {float} o valor encontrado na razão aurea 
 */

var  razaoAurea = function(x,y,k){
   if( regras(x,y,k) == false){
       return false;
   }
    c = y;
    a = x;
    i = 1;
        while(i<y){
            t = k;
            c = c +a;
            a = t;
            i++;
        }
    return c/a;
}

/**Restrições de valores minimos para determinadas constantes
 * @constructor 
 * {int,int,int} valores quais quer da equação
 * **/
function regras(x,y,k){
    if(x<0){
        return false;
    };
    if(x<=y){
        return false;

    };
    if(k <= 0){
        return false;

    };
    
}

module.exports.razaoAurea = razaoAurea;