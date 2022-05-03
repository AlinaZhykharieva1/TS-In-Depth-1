import { ReferenceItem } from './referenceItem';
import { positiveInteger } from '../decorators';

export default class Encyclopedia extends ReferenceItem {
    private _copies: number;

    @positiveInteger
    get copies(): number {
        return this._copies;
    }

    set copies(value: number) {
        this._copies = value;
    }

    constructor(id: number, title: string, year: number, public edition: number) {
        super(id, title, year);
        console.log('Creating new reference item ...');

    }

    override printItem(): void {
        super.printItem();
        console.log(`Edition: ${this.edition} (${this.year})`);
    }

    override printCitation() {
        console.log(`${this.title} – ${this.year}`);
    }
}
