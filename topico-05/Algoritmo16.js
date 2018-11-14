/**Esta função encontra o maximo divisor cumum(mdc)
 * de dois numeros inteiros positicos 
 * @param {int} a 
 * @param {int} b 
 */
var mdc = function(a,b){
    if(b>=a || b < 0){
        return false ;
    }
    while(b != 0 ){
        m = a %b;
        a = b;
        b = m;
    }
    return a;
}
module.exports.mdc = mdc;