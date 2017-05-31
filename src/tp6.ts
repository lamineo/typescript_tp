import { DisplayModule } from './UtilModule';


export enum Music { JAZZ, ROCK }
export interface Musicianl {
    addAlbum(album: Album): void;
}
export interface constructorType<T> {
    new (...args: any[]): T;
}
export function jazzMan(constructor: constructorType<JazzMusician>): constructorType<JazzMusician> {
    return class DecoratedPerson extends constructor {
        // protected additionalProperty: string = 'Hello';
        constructor(...args) {
            super(...args);
            this.style = Music.JAZZ;
        }
    }
}
export function rock(constructor: constructorType<RockStar>): constructorType<RockStar> {
    return class DecoratedPerson extends constructor {
        // protected additionalProperty: string = 'Hello';
        constructor(...args) {
            super(...args);
            this.style = Music.ROCK;
        }
    }
}

export function logMethod(target: any, propertyKey: string, descriptor: PropertyDescriptor): PropertyDescriptor {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args: any[]) {
        var result = originalMethod(...args);
        //console.log(`Method ${propertyKey} called with result ${result}`);
        DisplayModule.log(`${result}`)
        return result;
    };
    return descriptor;
}

function StyleMusic(option) {
    return (target: any) => {
        const constructor: any = function (...args) {
            target.apply(this, args);
            this.style = option.style;
            //console.log(option.style, "Constructeur exécuté");
        }
        constructor.prototype = Object.create(target.prototype);
        return <any>constructor;
    }
}
export class Musician implements Musicianl {


    private _albums: Album[];
    private _style: Music;

    constructor(public firstName: string, public lastName: string, public age: number) {
        this._albums = new Array<Album>();

    }
    set style(style: Music) {
        this._style = style;
    }
    get style(): Music {
        return this._style;
    }

    set albums(albums: Album[]) {
        this._albums = albums;
    }
    get albums(): Album[] {
        return this._albums;
    }
    addAlbum(album: Album): void {
        this._albums.push(album);
    }
    toString(): string {
        return `${this.firstName} ${this.lastName} plays ${Music[this.style]}`;
    }
}

//@jazzMan
@StyleMusic({style:Music.JAZZ})
export class JazzMusician extends Musician {
    constructor(firstName: string, lastName: string, age: number) {
        super(firstName, lastName, age);
        //this.style = Music.JAZZ;
    }

    @logMethod
    swing(): string {
        return 'I\m swinging';
    }
}

//@rock
@StyleMusic({style:Music.ROCK})
export class RockStar extends Musician {
    constructor(firstName: string, lastName: string, age: number) {
        super(firstName, lastName, age);
        //this.style = Music.ROCK;
    }

    @logMethod
    shout(): string {
        return 'I\m shouting';

    }
}

export class Album {

    constructor(private _title: string) { }
    toString(): string {
        return `${this._title}`;
    }
    set title(title: string) {
        this._title = title;
    }
    get title(): string {
        return this._title;
    }
}

export function display(tab: any): void {
    tab.forEach(element => {
        console.log(element.toString());
    });
}