//Desestructuración

//Asignación desestructurante

const persona = {
    nombre : 'Tony',
    edad :34,
    clave : 'ironman',
};

const {nombre, edad, clave} = persona;




const usarContext = ({clave, nombre, edad}) => {
    return {
        nombreClave: clave,
        anios: edad,
    }

}


const {nombreClave, anios} = usarContext(persona);

console.log(nombreClave, anios);