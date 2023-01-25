//import { heroes } from './data/heroes'

import heroes, {owners} from "../data/heroes";

//const getHeroesById = (id) => {
//    return heroes.find(( heroe ) => {
//        if (heroe.id === id ) {
//            return true;
//        } else {
//            return false;
//        }
//    });
//}


export const getHeroeById = (id) => heroes.find(( heroe ) => heroe.id===id )


console.log(getHeroeById(2));

export const getHeroeByOwner =  (owner) => heroes.filter(( heroe ) => heroe.owner===owner )


