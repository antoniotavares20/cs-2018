const operacao = require("../calculator");
//teste:
QUnit.test("soma trivial", function (assert){
//execulta a operação que desejamos testar
    let resultado = operacao.soma(3, -1);
    //verifica se o resultado produzido é o esperado
    assert.equal(resultado, 2, "soma incorreta");
})

 QUnit.test("subtracao trivial", function(assert){
    let resultado = operacao.subtracao(1,2);
    assert.equal(resultado, -1 , "correto!" )

})

