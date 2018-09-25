//fatorial recursivo com if ternario
function fatorial(n){
    return n == 0 ? 1 : n * fatorial(n-1);
}

const f = n => n == 0 ? 1 : n * f(n-1);

console.log(f(10) == fatorial(10)); // true
