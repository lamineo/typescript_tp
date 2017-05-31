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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var UtilModule_1 = require("./UtilModule");
var Music;
(function (Music) {
    Music[Music["JAZZ"] = 0] = "JAZZ";
    Music[Music["ROCK"] = 1] = "ROCK";
})(Music = exports.Music || (exports.Music = {}));
function jazzMan(constructor) {
    return (function (_super) {
        __extends(DecoratedPerson, _super);
        // protected additionalProperty: string = 'Hello';
        function DecoratedPerson() {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var _this = _super.apply(this, args) || this;
            _this.style = Music.JAZZ;
            return _this;
        }
        return DecoratedPerson;
    }(constructor));
}
exports.jazzMan = jazzMan;
function rock(constructor) {
    return (function (_super) {
        __extends(DecoratedPerson, _super);
        // protected additionalProperty: string = 'Hello';
        function DecoratedPerson() {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var _this = _super.apply(this, args) || this;
            _this.style = Music.ROCK;
            return _this;
        }
        return DecoratedPerson;
    }(constructor));
}
exports.rock = rock;
function logMethod(target, propertyKey, descriptor) {
    var originalMethod = descriptor.value;
    descriptor.value = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var result = originalMethod.apply(void 0, args);
        //console.log(`Method ${propertyKey} called with result ${result}`);
        UtilModule_1.DisplayModule.log("" + result);
        return result;
    };
    return descriptor;
}
exports.logMethod = logMethod;
function StyleMusic(option) {
    return function (target) {
        var constructor = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            target.apply(this, args);
            this.style = option.style;
            //console.log(option.style, "Constructeur exécuté");
        };
        constructor.prototype = Object.create(target.prototype);
        return constructor;
    };
}
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
//@jazzMan
var JazzMusician = (function (_super) {
    __extends(JazzMusician, _super);
    function JazzMusician(firstName, lastName, age) {
        return _super.call(this, firstName, lastName, age) || this;
        //this.style = Music.JAZZ;
    }
    JazzMusician.prototype.swing = function () {
        return 'I\m swinging';
    };
    return JazzMusician;
}(Musician));
__decorate([
    logMethod
], JazzMusician.prototype, "swing", null);
JazzMusician = __decorate([
    StyleMusic({ style: Music.JAZZ })
], JazzMusician);
exports.JazzMusician = JazzMusician;
//@rock
var RockStar = (function (_super) {
    __extends(RockStar, _super);
    function RockStar(firstName, lastName, age) {
        return _super.call(this, firstName, lastName, age) || this;
        //this.style = Music.ROCK;
    }
    RockStar.prototype.shout = function () {
        return 'I\m shouting';
    };
    return RockStar;
}(Musician));
__decorate([
    logMethod
], RockStar.prototype, "shout", null);
RockStar = __decorate([
    StyleMusic({ style: Music.ROCK })
], RockStar);
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
