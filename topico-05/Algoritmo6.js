/**Esta função faz o calculo do fatorial de um numero natural, para isso
 * ela recebe um numero natural mair que 1(um)e retorna o seu fatorial ]
 * @param {int} numero Natural
 * @returns{int} fatorial do numero natural
 * */

var fatorial = function (numeroNatural) {
  if (numeroNatural <= 1) {
    return false;
  } else {
    var indice = 2;
    var fatorial = 1;
    while (indice <= numeroNatural) {
      fatorial = fatorial * indice;
      indice++;
    }
    return fatorial;
  }
};

module.exports.fatorial = fatorial;
