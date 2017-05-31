"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var UtilModule_1 = require("./UtilModule");
var Musician_1 = require("../src/Musician");
var Display_1 = require("./Display");
UtilModule_1.DisplayModule.log('Bienvenue dans ma première application TypeScript');
var mus;
mus = new Array();
mus.push(new Musician_1.JazzMusician('david', 'pasBowie', 54));
mus.push(new Musician_1.RockStar('davidPasLa', 'surRock', 23));
mus[0].addAlbum(new Musician_1.Album('kaka'));
mus[0].addAlbum(new Musician_1.Album('Koko'));
Display_1.default(mus);
for (var _i = 0, mus_1 = mus; _i < mus_1.length; _i++) {
    var el = mus_1[_i];
    if (el instanceof Musician_1.JazzMusician) {
        el.swing();
    }
    else {
        if (el instanceof Musician_1.RockStar) {
            el.shout();
        }
    }
}
