/**Aqui é apresentado a comparação entre objetos */

let obj1 = {
    x : 1,
    y : true
}


let obj2 = {
    x : 1,
    y : true
}

console.log("Usando operador de iguadade(e referencias distintas)::")
console.log(obj1 == obj2);
console.log(obj1 === obj2);

console.log("Comparamos as referências,que agora são iguais...");
let obj3 = obj2;
console.log(obj3 == obj2);
console.log(obj3 == obj2);

let obj4 = {
    x: 2,
    y: false
}
//comparação utlizando propiedades
function iguais(a,b){
    let propertiesOfA = Object.keys(a);
    let propertiesOfB = Object.keys(b);

    if(propertiesOfA.length !== propertiesOfB.length){
        return false;
    }
    return !propertiesOfA.some( e => a[e] !== b[e]);
}
    console.log("Usando uma funcao criada:");
    console.log(iguais(obj1, obj2));
    console.log(iguais(obj2, obj3));
    console.log(iguais(obj1, obj3));
    console.log(iguais(obj1, obj4));
    console.log(Object.keys(obj1));
    console.log(obj1);