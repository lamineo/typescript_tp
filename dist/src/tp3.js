"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Music;
(function (Music) {
    Music[Music["JAZZ"] = 0] = "JAZZ";
    Music[Music["ROCK"] = 1] = "ROCK";
})(Music = exports.Music || (exports.Music = {}));
var Musician = (function () {
    function Musician(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this._albums = new Array();
    }
    Object.defineProperty(Musician.prototype, "style", {
        get: function () {
            return this._style;
        },
        set: function (style) {
            this._style = style;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Musician.prototype, "albums", {
        get: function () {
            return this._albums;
        },
        set: function (albums) {
            this._albums = albums;
        },
        enumerable: true,
        configurable: true
    });
    Musician.prototype.addAlbum = function (album) {
        this._albums.push(album);
    };
    Musician.prototype.toString = function () {
        return this.firstName + " " + this.lastName + " plays " + Music[this.style];
    };
    return Musician;
}());
exports.Musician = Musician;
var JazzMusician = (function (_super) {
    __extends(JazzMusician, _super);
    function JazzMusician(firstName, lastName, age) {
        var _this = _super.call(this, firstName, lastName, age) || this;
        _this.style = Music.JAZZ;
        return _this;
    }
    return JazzMusician;
}(Musician));
exports.JazzMusician = JazzMusician;
var RockStar = (function (_super) {
    __extends(RockStar, _super);
    function RockStar(firstName, lastName, age) {
        var _this = _super.call(this, firstName, lastName, age) || this;
        _this.style = Music.ROCK;
        return _this;
    }
    return RockStar;
}(Musician));
exports.RockStar = RockStar;
var Album = (function () {
    function Album(_title) {
        this._title = _title;
    }
    Album.prototype.toString = function () {
        return "" + this._title;
    };
    Object.defineProperty(Album.prototype, "title", {
        get: function () {
            return this._title;
        },
        set: function (title) {
            this._title = title;
        },
        enumerable: true,
        configurable: true
    });
    return Album;
}());
exports.Album = Album;
function display(tab) {
    tab.forEach(function (element) {
        console.log(element.toString());
    });
}
exports.display = display;
