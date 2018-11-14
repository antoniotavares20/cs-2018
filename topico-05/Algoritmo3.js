/**Esta função faz o uso de três parametros (dia, mes e ano)
 *  para obter o dia da semana.
 * @param {date} dia inteiro cujo o valor varia de 0 a 24;
 * @param {date} mes inteiro cujo o valor varia de 1 a 30;
 * @param {date} ano inteiro;
 * O dia da semana retornados podem ser
 * 0 para segunda-feira;
 * 1 para terça-feira;
 * 2 para quarta-feira;
 * 3 para quinta-feira;
 * 4 para sexta-feira;
 * 5 para sabado;
 * 6 para domingo
 * @returns {int} dia da semana;
 *
 */

//função principal
function diaDaSemana(dia, mes, ano) {
  var data = { dia, mes, ano };
  if (restricoes(data) == true) {
    //verifico as regras
    return definirSemana(data); //defino o dia da semana pelo algoritimo de Kin Larsen,95
  } else {
    return false; //caso não passe pelas regras retorno falso
  }
}
//verifico as exigencias da data para o algoritimo funcionar
function restricoes(data) {
  if (data.ano <= 1753) {
    return false;
  }
  if (data.dia < 1 || data.dia > 31) {
    return false;
  }
  if (data.mes < 1 || data.mes > 12) {
    //verifico caso o mês seja JANEIRO ou FEVEREIRO
    if (data.mes == 1 || data.mes == 2) {
      data.mes += 12;
      data.ano = data.ano - 1;
      return true;
    }
    return false;
  } else {
    return true;
  }
}
//sigo as regras de definição do dia da semana
//s <= d + 2m + 3(m+1) div 5 + a + a div 4 – a div 100 + a div 400
function definirSemana(data) {
  var diaSemana =
    data.dia +
    data.mes * 2 +
    (3 * (data.mes + 1)) / 5 +
    data.ano +
    data.ano / 4 -
    data.ano / 100 +
    data.ano / 400;
  return Math.trunc(diaSemana % 7);
}

exports.diaDaSemana = diaDaSemana;
