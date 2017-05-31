import test from 'ava';
import * as sinon from 'sinon';
import { Album, Music, Musician, JazzMusician, RockStar, display } from '../src/tp3'

const spy = sinon.spy(console, "log");

test(t => {
    const al = new Album('Kind Of Blue');
    t.is(al.title, 'Kind Of Blue');
});

test(t => {
    const al = new Album('Kind Of Blue');
    t.is(al.toString(), 'Kind Of Blue');
});

test(t => {
    t.is(Music[0], 'JAZZ');
    t.is(Music[1], 'ROCK');
});

test(t => {
    let musician = new Musician('Miles', 'Davis', 89);
    t.is(musician.firstName, 'Miles');
    t.is(musician.lastName, 'Davis');
    t.is(musician.age, 89);
    t.is(musician.albums.length, 0);
    t.falsy(musician.style);
});

test(t => {
    let musician = new Musician('Miles', 'Davis', 89);
    musician.addAlbum(new Album('Kind Of Blue'));
    musician.addAlbum(new Album('Tutu'));
    t.is(musician.albums.length, 2);
});

test(t => {
    let musician = new JazzMusician('Miles', 'Davis', 89);
    t.is(musician.style, Music.JAZZ);
});

test(t => {
    let musician = new JazzMusician('Miles', 'Davis', 89);
    t.is(musician.toString(), 'Miles Davis plays JAZZ');
});

test(t => {
    let musician = new RockStar('Mick', 'Jagger', 72);
    t.is(musician.style, Music.ROCK);
});

test(t => {
    let musician = new RockStar('Mick', 'Jagger', 72);
    t.is(musician.toString(), 'Mick Jagger plays ROCK');
});

test(t => {
    const musicians: Musician[] = [new JazzMusician('Miles', 'Davis', 89), new RockStar('Mick', 'Jagger', 72)];
    const albums: Album[] = [new Album('Kind Of Blue'), new Album('Tutu')];

    display(musicians);

    t.is(spy.callCount, 2);

    t.is(spy.args[0][0], 'Miles Davis plays JAZZ');
    t.is(spy.args[1][0], 'Mick Jagger plays ROCK');
    
    spy.reset()
    
    display(albums);
    
    t.is(spy.callCount, 2);

    t.is(spy.args[0][0], 'Kind Of Blue');
    t.is(spy.args[1][0], 'Tutu');
});