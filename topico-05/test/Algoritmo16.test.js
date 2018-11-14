var mdc = require("../Algoritmo16");


test("verficação de A", ()=>{
    expect(mdc.mdc(0,1)).toBe(false);
});


test("verficação de B", ()=>{
    expect(mdc.mdc(1,0)).toBe(1);
});

test("verficação de B", ()=>{
    expect(mdc.mdc(88,77)).toBe(11);
});
test("verficação de B", ()=>{
    expect(mdc.mdc(8,4)).toBe(4);
});

