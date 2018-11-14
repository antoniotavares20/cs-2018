/**Esta função faz o de um numero natural para encontrar o produto de uma divisao
 * @param{int} Numero natural qualquer maior que 1(um)
 * @returns{int} Numero natura cujo o resutado é o Somatorio de um numero natural
 * a partir do numeor(ou indice) 1(um).
 */

var somaNaturais = function(numeroNatural) {
  var indice = 0;
  var somatorio = 0;
  if (numeroNatural < 1) {
    return falso;
  }
  do {
    somatorio = somatorio + indice;
    indice++;
  } while (indice <= numeroNatural);
  return somatorio;
};
exports.somaNaturais = somaNaturais;
