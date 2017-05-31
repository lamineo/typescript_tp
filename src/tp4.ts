import { DisplayModule } from './UtilModule';
import { Album, Music, Musician, JazzMusician, RockStar, display } from '../src/Musician'
import dis from './Display';

DisplayModule.log('Bienvenue dans ma première application TypeScript');
let mus: Musician[];
mus = new Array<Musician>();
mus.push(new JazzMusician('david', 'pasBowie', 54));
mus.push(new RockStar('davidPasLa', 'surRock', 23));
mus[0].addAlbum(new Album('kaka'));
mus[0].addAlbum(new Album('Koko'));
dis(mus);
for (let el of mus) {
    if (el instanceof JazzMusician) {
        el.swing();
    
    }else{
        if (el instanceof RockStar){
            el.shout();
        }  
    }
    
}