const personajes = ['goku', 'vegeta', 'naruto'];

const [p1, p2, p3] = personajes;
console.log(p3);


const retornaArreglo = () => {
    return ['ABC', 123];
}

const [letras, numeros] = retornaArreglo();
console.log(letras, numeros);

const usarState = (valor) => {
    return [valor, () => {console.log('Hola mundo')}];
}

const [nombre, setNombre] = usarState('Goku');


console.log(nombre);
setNombre();