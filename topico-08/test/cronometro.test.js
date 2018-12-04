var cronometro = require("../cronometro.js");

/* Teste do temporizador de segundo*/
test("retorno do tempo", () => {
    expect(cronometro.ini("iniciar")).toBe(true);
})