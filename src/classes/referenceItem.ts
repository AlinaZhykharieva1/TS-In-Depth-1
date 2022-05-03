/* eslint-disable no-underscore-dangle */
import { timeout } from '../decorators';

abstract class ReferenceItem {
    // title: string;
    // year: number;
    // constructor(newTitle: string, newYear: number) {
    //     console.log('Creating new reference item ...');
    //
    //     this.title = newTitle;
    //     this.year = newYear;
    // }
    private _publiser: string;
    #id: number;
    static department: string = 'Research';

    get publisher(): string {
        return this._publiser.toUpperCase();
    }

    set publisher(newPublisher) {
        this._publiser = newPublisher;
    }

    constructor(id: number, public title: string, protected year: number) {
        console.log('Creating new reference item ...');
        this.#id = id;
    }

    @timeout(5000)
    printItem(): void {
        console.log(`${this.title} was published in ${this.year}`);
        console.log(`Department - ${ReferenceItem.department}`);
        console.log(`${Object.getPrototypeOf(this).constructor.department}`);
    }

    gerID(): number {
        return this.#id;
    }

    abstract printCitation(): void;
}

export { ReferenceItem };
