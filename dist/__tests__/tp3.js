"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ava_1 = require("ava");
var sinon = require("sinon");
var tp3_1 = require("../src/tp3");
var spy = sinon.spy(console, "log");
ava_1.default(function (t) {
    var al = new tp3_1.Album('Kind Of Blue');
    t.is(al.title, 'Kind Of Blue');
});
ava_1.default(function (t) {
    var al = new tp3_1.Album('Kind Of Blue');
    t.is(al.toString(), 'Kind Of Blue');
});
ava_1.default(function (t) {
    t.is(tp3_1.Music[0], 'JAZZ');
    t.is(tp3_1.Music[1], 'ROCK');
});
ava_1.default(function (t) {
    var musician = new tp3_1.Musician('Miles', 'Davis', 89);
    t.is(musician.firstName, 'Miles');
    t.is(musician.lastName, 'Davis');
    t.is(musician.age, 89);
    t.is(musician.albums.length, 0);
    t.falsy(musician.style);
});
ava_1.default(function (t) {
    var musician = new tp3_1.Musician('Miles', 'Davis', 89);
    musician.addAlbum(new tp3_1.Album('Kind Of Blue'));
    musician.addAlbum(new tp3_1.Album('Tutu'));
    t.is(musician.albums.length, 2);
});
ava_1.default(function (t) {
    var musician = new tp3_1.JazzMusician('Miles', 'Davis', 89);
    t.is(musician.style, tp3_1.Music.JAZZ);
});
ava_1.default(function (t) {
    var musician = new tp3_1.JazzMusician('Miles', 'Davis', 89);
    t.is(musician.toString(), 'Miles Davis plays JAZZ');
});
ava_1.default(function (t) {
    var musician = new tp3_1.RockStar('Mick', 'Jagger', 72);
    t.is(musician.style, tp3_1.Music.ROCK);
});
ava_1.default(function (t) {
    var musician = new tp3_1.RockStar('Mick', 'Jagger', 72);
    t.is(musician.toString(), 'Mick Jagger plays ROCK');
});
ava_1.default(function (t) {
    var musicians = [new tp3_1.JazzMusician('Miles', 'Davis', 89), new tp3_1.RockStar('Mick', 'Jagger', 72)];
    var albums = [new tp3_1.Album('Kind Of Blue'), new tp3_1.Album('Tutu')];
    tp3_1.display(musicians);
    t.is(spy.callCount, 2);
    t.is(spy.args[0][0], 'Miles Davis plays JAZZ');
    t.is(spy.args[1][0], 'Mick Jagger plays ROCK');
    spy.reset();
    tp3_1.display(albums);
    t.is(spy.callCount, 2);
    t.is(spy.args[0][0], 'Kind Of Blue');
    t.is(spy.args[1][0], 'Tutu');
});
