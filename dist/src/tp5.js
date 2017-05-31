"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tp6_1 = require("./tp6");
var Display_1 = require("./Display");
var UtilModule = require("./UtilModule");
var _ = require("lodash");
var miles = new tp6_1.JazzMusician('Miles', 'Davis', 89);
miles.addAlbum(new tp6_1.Album('Kind Of Blue'));
miles.addAlbum(new tp6_1.Album('Tutu'));
var musicians = [
    miles,
    new tp6_1.RockStar('Mick', 'Jagger', 72)
];
UtilModule.DisplayModule.log('Bienvenue dans ma première applications TypeScript');
Display_1.default(musicians);
Display_1.default(miles.albums);
_.each(musicians, function (musician) {
    if (musician instanceof tp6_1.JazzMusician) {
        musician.swing();
    }
    else if (musician instanceof tp6_1.RockStar) {
        musician.shout();
    }
});
