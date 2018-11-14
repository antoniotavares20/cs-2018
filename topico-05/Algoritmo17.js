
var horner = function(x,g,a){
    
    if(g <= 1){
        return false;
    }
    p = [g];
    i = g -1;
    while(0<=i){
        p = p *x+a[i];
        i = i -1
    }
    return p;
}
module.exports.horner = horner;