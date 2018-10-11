/**Estudando process.argv
 *
 * <p> Este processo retorna argumentos fornecedos
 * via linnha de comandos</p>
 */

 for(let i = 0; i< process.argv.length; i++){
     console.log(`${i}: ${process.argv[i]}`);
 }