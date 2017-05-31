import { JazzMusician, Album, Musician, RockStar } from './tp6';
import display from './Display';
import * as UtilModule from './UtilModule';
import * as _ from 'lodash';

const miles = new JazzMusician('Miles', 'Davis', 89);
miles.addAlbum(new Album('Kind Of Blue'));
miles.addAlbum(new Album('Tutu'));

const musicians: Musician[] = [
  miles,
  new RockStar('Mick', 'Jagger', 72)
];

UtilModule.DisplayModule.log('Bienvenue dans ma première applications TypeScript');
display(musicians);
display(miles.albums);

_.each(musicians, musician => {
  if (musician instanceof JazzMusician) {
    musician.swing();
  } else if (musician instanceof RockStar) {
    musician.shout();
  }
})