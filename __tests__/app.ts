import test from 'ava';
import { HelloWorld } from '../src/app';
let helloWorld: HelloWorld;
test.before(t => {
    helloWorld = new HelloWorld();
});
test(t => {
    let expected: string = 'Hello lamine!';
    let actual = helloWorld.sayHello('lamine');
    t.is(actual, expected);
});
test(t => {
    let expected: string = 'Hello World!';
    let actual = helloWorld.sayHello();
    t.is(actual, expected);
    
});