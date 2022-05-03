/* eslint-disable no-redeclare */
import { Book, Callback, LibMgrCallback, TOptions } from './interfaces';
import { Category } from './enums';
import { BookOrUndefined, BookProperties } from './types';
import RefBook from './classes/encyclopedia';

const library: Book[] = [
    {
        id: 1, title: 'Refactoring JavaScript', author: 'Evan Burchard', available:
            true, category: Category.Javascript,
    },
    {
        id: 2, title: 'JavaScript Testing', author: 'Liang Yuxian Eugene', available:
            false, category: Category.Javascript,
    },
    {
        id: 3, title: 'CSS Secrets',
        author: 'Lea Verou', available: true, category: Category.CSS,
    },
    {
        id: 4,
        title: 'Mastering JavaScript Object-Oriented Programming',
        author: 'Andrea Chiarelli',
        available: true, category: Category.Javascript,
    }];

export function getAllBooks(books: Book[] = library) {
    return books;
}

export function logFirstAvailable(books: readonly Book[]): void {
    const title = books.find(book => book.available)?.title;

    console.log(`We have ${books.length} books`);
    console.log(`First available book is "${title}"`);
}

export function getBookTitlesByCategory(category: Category = Category.Javascript) {
    const books = getAllBooks(library);
    let booksTitles: Array<string>;
    booksTitles = books.filter(book => book.category === category).map(({ title }) => title);
    console.log(booksTitles);
    return booksTitles;
}

export function logBookTitles(books: Book[]): void {
    books.forEach(book => console.log(book?.title));
}

export function getBookAuthorByIndex(index: number): [title: string, author: string] {
    const books = getAllBooks(library);
    const { title, author } = books[index];
    return [title, author];
}

export function calcTotalPages(data: any[]): void {
    let count: bigint = BigInt(0);

    data.map(book => count += (BigInt(book.books) * BigInt(book.avgPagesPerBook)));
    console.log(count);
}

export function createCustomerID(name: string, id: number): string {
    return `${id} - ${name}`;
}

export function createCustomer(name: string, age?: number, city?: string): void {
    console.log(`Customer name: ${name}`);
    if (age) {
        console.log(`Customer age: ${age}`);
    }
    if (city) {
        console.log(`Customer city: ${city}`);
    }
}

export function getBookById(id: Book['id']): BookOrUndefined {
    const books = getAllBooks(library);
    return books.find(book => book.id === id);
}

export function checkoutBooks(customer: string, ...bookIds: number[]) {
    console.log(`Customer name is ${customer}`);
    return bookIds
        .map(id => getBookById(id))
        .filter(book => book.available)
        .map(book => book.title);
}

export function getTitles(author: string): string[];
export function getTitles(available: boolean): string[];
export function getTitles(id: number, available: boolean): string[];
export function getTitles(...args: [string | boolean] | [number,
    boolean]): string[] {
    const books = getAllBooks(library);
    let foundTitles: string[];
    if (args.length === 1) {
        const [arg] = args;
        if (typeof arg === 'string') {
            return books.filter((book) => book.author === arg).map(({ title }) => title);
        } else if (typeof arg === 'boolean') {
            return books.filter((book) => book.available).map(({ title }) => title);
        }
    } else if (args.length === 2) {
        const [idArg, availableArg] = args;
        if (typeof idArg === 'number' && typeof availableArg === 'boolean') {
            books.filter(({ id, available }) => id === idArg && available === availableArg).map(({ title }) => title);
        }
    }
    return foundTitles;
}

export function assertStringValue(value: any): asserts value is string {
    if (typeof value !== 'string') {
        throw new Error();
    }
}

export function assertRefBookInstance(condition: any): asserts condition {
    if (!condition) {
        throw new Error('It is not an instance of RefBook');
    }
}

export function bookTitleTransform(title: any): string | never {
    assertStringValue(title);

    return [...title].reverse().join('');
}

export function printBook(book: Book): void {
    console.log(`${book.title} by ${book.author}`);
}

export function getProperty(book: Book, property: BookProperties): any {
    const value = book[property];
    return typeof value === 'function' ? value.name : value;
}

export function setDefaultConfig(options: TOptions): TOptions {
    options.durations ??= 100;
    options.speed ??= 60;
    return options;
}

export function printRefBook(data: any): void {
    assertRefBookInstance(data instanceof RefBook);
    data.printItem();
}

export function purge<T>(inventory: T[]): T[] {
    return inventory.slice(0, 2);
}

export function getObjectProperty<TObject, TKey extends keyof TObject>(obj: TObject, key: TKey): TObject[TKey] | string {
    const value = obj[key];
    return typeof value === 'function' ? value.name : value;
}

export function getBooksByCategory(category: Category, callback: LibMgrCallback): void {

    setTimeout(() => {
        try {
            const titles = getBookTitlesByCategory(category);

            if (titles.length > 0) {
                callback(null, titles);
            } else {
                throw new Error('No books found');
            }

        } catch (err) {
            callback(err, null);
        }
    }, 2000);
}

export function logCategorySearch(err: Error | null, titles: string[] | null): void {
    if (err) {
        console.log(err.message);
    } else {
        console.log(titles);
    }
}

export function getBooksByCategoryPromise(category): Promise<string[]> {
    const p = new Promise<string[]>((resolve, reject) => {

        setTimeout(() => {
            const titles = getBookTitlesByCategory(category);

            if (titles.length > 0) {
                resolve(titles);
            } else {
                reject('No books found');
            }
        }, 2000);
    });
    return p;
}

export async function logSearchResults(category: Category): Promise<void> {
    const result: Awaited<ReturnType<typeof getBooksByCategoryPromise>> = await getBooksByCategoryPromise(category);
    console.log(result.length);
}
