/**Esta função recebe uma sequencia de digitos para verficar o CPF
 * @param {int} cpf uma sequencia de 11 digitos
*/

var cpf = (d) =>{
    var i = 1;
    var d, d2,d3, d4, d5,d6,d7,d8,d9;
    while(i<=10){
        if(d[i]==null){
            return false
        }
        i++;

    }
    var j = d[1]+ d2[2]+d3[3]+ d4[4]+d5[5]+d6[6]+d7[7]+d8[8]+d9[9];
    var k = d[2]+ d2[3]+d3[4]+ d4[5]+d5[6]+d6[7]+d7[8]+d8[9]+d9[10];
    dj = ((j%11)%10);
    dk = ((5%11)%10);
    return (dj == d[10] && dk == d[11] )
    
}
module.exports.cpf = cpf;