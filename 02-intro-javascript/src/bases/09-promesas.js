import { getHeroeById } from './bases/08-import'
import heroes from './data/heroes';

//const promesa = new Promise( (resolve, reject) => {
//    setTimeout( () => {
//        const p1 = getHeroeById(2);
//        resolve( p1 );
//    }, 2000 )
//});
//
//promesa.then( (heroe) => {
//    console.log('heroe', heroe)
//})
//
//.catch( err => console.log(err));

const getHeroeByIdAsync= (id) => {

    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            const p1 = getHeroeById(id);
            if(p1){
            resolve(p1);
            } else {
                reject('No se pudo encontrar el héroe')
            }
        }, 2000 )
    });

}


getHeroeByIdAsync(1)
    .then(console.log)
    .catch(console.warn)