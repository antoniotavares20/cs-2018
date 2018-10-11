/**Esta classe faz alguns trabalhos com objetos 
* 
*/
/**Utilizado uma coleção de propiedades 
 * @param{Propiedades}
*/
let sapato = {
    identificador : "123567898765432",
    numero: "33",
    marca: "333",
    cor:"Nicke"
}

//pasando o nome do conjunto de propiedades seguindo padroes do enum
let tenis = {
    "identificador": "23456787654321",
    "numero":33,
    "marca": "Coca Cola",
    "cor": "Green",
    "Vendido": true
};

/**Exemplo de uso das aspas como obrigação */

let chuteira = {
    "Marca do Produtor" : ["Olimpicos1","Nike", "Paraguai" ],
    
};

/**Apresentação dos valores das propiedades */
console.log(sapato.numero);
console.log(tenis.numero);
console.log(chuteira["Marca do Produtor"]);
console.log(sapato.propriedadeDesconhecida);