export enum Music { JAZZ, ROCK }
export interface Musicianl {
    addAlbum(album: Album): void;
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

export class JazzMusician extends Musician {
    constructor(firstName: string, lastName: string, age: number) {
        super(firstName, lastName, age);
        this.style = Music.JAZZ;
    }

}

export class RockStar extends Musician {
    constructor(firstName: string, lastName: string, age: number) {
        super(firstName, lastName, age);
        this.style = Music.ROCK;
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