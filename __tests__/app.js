"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ava_1 = require("ava");
var app_1 = require("../src/app");
var helloWorld;
ava_1.default.before(function (t) {
    helloWorld = new app_1.HelloWorld();
});
ava_1.default(function (t) {
    var expected = 'Hello lamine!';
    var actual = helloWorld.sayHello('lamine');
    t.is(actual, expected);
});
ava_1.default(function (t) {
    var expected = 'Hello World!';
    var actual = helloWorld.sayHello();
    t.is(actual, expected);
});
