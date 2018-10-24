//propiedade 3025

let n = 3025;
let x = propiedadeX(n);
let y = propiedadeY(n);

if( (x+y) == Math.sqrt(n)){
    console.log(`é verdadeiro que o numero ${n} atende a propiedade, pois ${x} + ${y} ^2
=  ${(x+y)^2}  e ${x} +${y} = ${x+y}`);
}else{
    console.log("o numero não atende a propiedade")
}
function propiedadeX(n){
    let x = n/100;
    x = Math.trunc(x);
     return x; 
}
function propiedadeY(n){
     let y = n%100;
    return y;
}