/**
 * Esta função faz o calculo de produtos de dois numeros inteiros
 * utlizando a soma entre a partir da equação  do somatorio de numero menor(valor em parcela)
 * que se incia(indice) em 1(um) até que o valor seja equivalente ao numero maior(valor total).
 * @param{int} parcela - numero de parcelas
 * @param{int} totalParcelas - total de parcelas]
 * 
 * 
 */
var totalParcelas = function(totalParcelas, parcela){
    var indice = 1;
    var somatorio= 0;
    if(totalParcelas <= 0 || parcela <= 0){
        return false;
    }
    if(totalParcelas > parcela){
        var tmp = totalParcelas;
        totalParcelas = parcela;
        parcela = tmp;  
        tmp = null;
    }
        while(indice <= totalParcelas){
            somatorio = somatorio+ parcela;
            indice++;
     }  
       return somatorio;
}
module.exports.totalParcelas = totalParcelas;