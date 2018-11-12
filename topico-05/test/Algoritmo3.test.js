const diaDaSemana = require("../Algoritmo3");

test("11/11/2018 = 4",()=>{
    expect(diaDaSemana.diaDaSemana(12,11,2018)).toBe(0);
})
test("11/11/2018 = 4",()=>{
    expect(diaDaSemana.diaDaSemana(32,11,2018)).toBe(false);
})
test("11/11/2018 = 4",()=>{
    expect(diaDaSemana.diaDaSemana(13,11,2018)).toBe(1);
})
test("11/11/2018 = 4",()=>{
    expect(diaDaSemana.diaDaSemana(12,22,2018)).toBe(false);
})
test("11/11/2018 = 4",()=>{
    expect(diaDaSemana.diaDaSemana(14,11,2018)).toBe(2);
})