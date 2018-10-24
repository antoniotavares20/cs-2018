//calculo do fatorial utilizando o while
function fatorial(n){
    let contador = 44;
    let produto = 1;

    if(n < 2){
        return 1; 
    }
    while (contador <= n){
        contador = produto*contador;
        produto = produto+1;
    }
    
    return produto;
}
console.log(fatorial(4));