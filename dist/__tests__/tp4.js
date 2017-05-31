"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ava_1 = require("ava");
var sinon = require("sinon");
var Musician_1 = require("../src/Musician");
var spy = sinon.spy(console, "log");
ava_1.default(function (t) {
    var al = new Musician_1.Album('Kind Of Blue');
    t.is(al.title, 'Kind Of Blue');
});
ava_1.default(function (t) {
    var al = new Musician_1.Album('Kind Of Blue');
    t.is(al.toString(), 'Kind Of Blue');
});
ava_1.default(function (t) {
    t.is(Musician_1.Music[0], 'JAZZ');
    t.is(Musician_1.Music[1], 'ROCK');
});
ava_1.default(function (t) {
    var musician = new Musician_1.Musician('Miles', 'Davis', 89);
    t.is(musician.firstName, 'Miles');
    t.is(musician.lastName, 'Davis');
    t.is(musician.age, 89);
    t.is(musician.albums.length, 0);
    t.falsy(musician.style);
});
ava_1.default(function (t) {
    var musician = new Musician_1.Musician('Miles', 'Davis', 89);
    musician.addAlbum(new Musician_1.Album('Kind Of Blue'));
    musician.addAlbum(new Musician_1.Album('Tutu'));
    t.is(musician.albums.length, 2);
});
ava_1.default(function (t) {
    var musician = new Musician_1.JazzMusician('Miles', 'Davis', 89);
    t.is(musician.style, Musician_1.Music.JAZZ);
});
ava_1.default(function (t) {
    var musician = new Musician_1.JazzMusician('Miles', 'Davis', 89);
    t.is(musician.toString(), 'Miles Davis plays JAZZ');
});
ava_1.default(function (t) {
    var musician = new Musician_1.RockStar('Mick', 'Jagger', 72);
    t.is(musician.style, Musician_1.Music.ROCK);
});
ava_1.default(function (t) {
    var musician = new Musician_1.RockStar('Mick', 'Jagger', 72);
    t.is(musician.toString(), 'Mick Jagger plays ROCK');
});
ava_1.default(function (t) {
    var musicians = [new Musician_1.JazzMusician('Miles', 'Davis', 89), new Musician_1.RockStar('Mick', 'Jagger', 72)];
    var albums = [new Musician_1.Album('Kind Of Blue'), new Musician_1.Album('Tutu')];
    Musician_1.display(musicians);
    t.is(spy.callCount, 2);
    t.is(spy.args[0][0], 'Miles Davis plays JAZZ');
    t.is(spy.args[1][0], 'Mick Jagger plays ROCK');
    spy.reset();
    Musician_1.display(albums);
    t.is(spy.callCount, 2);
    t.is(spy.args[0][0], 'Kind Of Blue');
    t.is(spy.args[1][0], 'Tutu');
});
