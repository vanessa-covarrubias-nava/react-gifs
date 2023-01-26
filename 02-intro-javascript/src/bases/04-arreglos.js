const arreglo= [1,2,3,4];

let arreglo2 = [1, ...arreglo, 6];

const arreglo3 = arreglo2.map(function(numero) {

    return numero +2 ;
});

console.log(arreglo3);