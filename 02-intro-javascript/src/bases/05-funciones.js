//const saludar = function( nombre ) {
//return `Hola, ${nombre}`;
//}

const saludar2 = ( nombre ) => {
    return `Hola, ${nombre}`;
    }
const saludar3 = ( nombre ) => `Hola, ${nombre}`;
const saludar4 = () => `Hola mundo`;   

console.log( saludar4() );

const getUsuarioActivo = (nombre) => ({
    
        uid: 'ABCDF',
        username: nombre
    
});

const usuarioActivo = getUsuarioActivo('Fernando');
console.log(usuarioActivo);