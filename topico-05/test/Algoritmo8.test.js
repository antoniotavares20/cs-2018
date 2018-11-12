produto = require("../Algoritmo8");
/**POTÊNCIA USANDO SOMAS
 * Realização do texte com a base e seu expoente
 */
test("2^2", ()=>{
    expect(produto.produto(2,3)).toBe(8);
});

test("base <= 0",()=>{
    expect(produto.produto(0,2)).toBe(false);
});

test("expoente <= 0",()=>{
    expect(produto.produto(2,0)).toBe(false);
});