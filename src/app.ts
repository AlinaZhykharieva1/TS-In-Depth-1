import { Data } from './types';
import { Category } from './enums';
import { getBooksByCategory, getBooksByCategoryPromise, logCategorySearch, logSearchResults } from './functions';

function showHello(divName: string, name: string) {
    const elt = document.getElementById(divName);
    elt.innerText = `Hello from ${name}`;
};
showHello('greeting', 'TypeScript');


const libraryData: Data[] = [
    { lib: 'libName1', books: 1_000_000_000, avgPagesPerBook: 250 },

    { lib: 'libName2', books: 5_000_000_000, avgPagesPerBook: 300 },

    { lib: 'libName3', books: 3_000_000_000, avgPagesPerBook: 280 },
];

// Task 02
// logFirstAvailable(library);
// getBookTitlesByCategory(Category.CSS);
// logBookTitles(library);
// getBookAuthorByIndex(2);
// calcTotalPages(libraryData);

// Task 03.01-02
// const myID: string = createCustomerID('Ann', 10);
// console.log(myID);
// let idGenerator: (name: string, id: number) => string;
// idGenerator = (name: string, id: number) => `${id} - ${name}`;
// idGenerator = createCustomerID;
// console.log(idGenerator('Alina', 33));
// createCustomer('Alina');
// createCustomer('Alina', 33);
// createCustomer('Alina', 33, 'Kyiv');
// getBookTitlesByCategory();
// console.log(getBookById(1));
// const myBooks: string[] = checkoutBooks('Ann', 1, 2, 4);
// console.log(myBooks);

// Task 03.03
// console.log(getTitles('Lea Verou'));

// Task 04.01
// const myBook = {
//     id: 5,
//     title: 'Colors, Backgrounds, and Gradients',
//     author: 'Eric A. Meyer',
//     available: true,
//     category: Category.CSS,
//     year: 2015,
//     copies: 3,
//     markDamaged: (reason: string) => console.log(`Damaged: ${reason}`)
// };
// printBook(myBook);
// myBook.markDamaged(`missing back cover`)

// Task 04.02
// const logDamage: Logger = (reason: string) => console.log(`Damaged: ${reason}`);
// logDamage('missing back cover');

// Task 04.03
// const favoriteAuthor: Author = {
//     name: 'Anna',
//     email: 'anna@mail.com',
//     numBooksPublished: 3,
// };
// const favoriteLibrerian: Librerian = {
//     name: 'Alina',
//     email: 'alina@mail.com',
//     department: 'Classical literature',
//     assistCustomer(customerName: string, bookTitle: string) {
//         console.log(customerName);
//         console.log(bookTitle);
//     },
// };

// Task 04.04
// const offer: any = {
//     book: {
//         title: 'Essential TypeScript',
//     },
// };
//
// console.log(offer.magazine);
// console.log(offer.magazine?.getTitle());
// console.log(offer.book.getTitle?.());
// console.log(offer.book.authors?.[0]);

// Task 04.05
// console.log(getProperty(getAllBooks(library)[0], 'author'));
// console.log(getProperty(getAllBooks(library)[0], 'markDamaged'));
// console.log(getProperty(getAllBooks(library)[0], 'isbn'));

// Task 05.01 Not work since class become ABSTRACT!!!!
// const ref = new ReferenceItem(1,'Learn TS', 2022);
// console.log(ref);
// ref.printItem();
// ref.publisher = 'abc';
// console.log(ref.publisher);
// console.log(ref.gerID());

// Task 05.02, 06.03
// const refBook = new RefBook(1,'Learn TS', 2022, 3);
// console.log(refBook);
// refBook.printItem();
// printRefBook(refBook);
// const favoriteLibrarian = new UL.UniversityLibrarian();
// favoriteLibrarian.name = 'Alina';
// printRefBook(favoriteLibrarian);

// Task 05.03
// const refBook = new RefBook(1,'Learn TS', 2022, 3);
// console.log(refBook.printCitation());

// Task 05.04
// const favoriteLibrarian = new UL.UniversityLibrarian();
// favoriteLibrarian.assistCustomer('Ana', 'CSS for new');

// Task 05.05
// const personBook: PersonBook = {
//     category: Category.Angular,
//     email: 'Boris@com.com',
//     name: 'Anna',
//     title: 'Unknown',
//     id: 5,
//     author: 'Boris',
//     available: true
// };
// const j: TOptions = { speed: 40 };
// console.log(setDefaultConfig(j));

// Task 06.05
// const flag = true;
// if (flag) {
//     import('./classes')
//         .then( module => {
//             new module.Reader();
//             console.log();
//         })
//         .catch(err => console.log(err));
// }
// if (flag) {
//     const module = await import('./classes');
//     const reader = new module.Reader();
//     console.log(reader);
// }

// Task 06.06
// let lib: Library = new Library();
// let lib: Library = {
//     id: 5,
//     name: 'Dan',
//     address: 'fghhgfh',
// };
// console.log(lib);

// Task 07.01
// const inv = [
//     { id: 10, title: 'The C Programming Language', author: 'K & R', available: true, category: Category.Software },
//     { id: 11, title: 'Code Complete', author: 'Steve McConnell', available: true, category: Category.Software },
//     { id: 12, title: '8-Bit Graphics with Cobol', author: 'A. B.', available: true, category: Category.Software },
//     { id: 13, title: 'Cool autoexec.bat Scripts!', author: 'C. D.', available: true, category: Category.Software }
// ];
// const result: Book[] | number = purge(inv);
// console.log(purge([1, 5, 6,8]));
// console.log(result);

// const bookShelf = new Self<Book>();
// inv.forEach(book => bookShelf.add(book));
// console.log(bookShelf.getFirst());

// Task 07.02 - 07.03
// const magazine: Magazine[] = [
//     { title: 'Programming Language Monthly', publisher: 'Code Mags' },
//     { title: 'Literary Fiction Quarterly', publisher: 'College Press' },
//     { title: 'Five Points', publisher: 'GSU' }
// ];
//
// const magazineShelf = new Self<Magazine>();
// magazine.forEach(mag => magazineShelf.add(mag));
// console.log(magazineShelf.getFirst());
// magazineShelf.printTitles();
// console.log(magazineShelf.find('Five Points'));
// getObjectProperty(getAllBooks()[0], 'author');

// Task 07.04
// const bookRequiredFields: BookRequiredFields = {
//     id: 1,
//     author: 'Anna',
//     available: false,
//     category: Category.CSS,
//     markDamaged: null,
//     pages: 100,
//     title: 'Unknown',
// };
//
// const updatedBook: UpdatedBook = {
//     id: 1,
//     author: 'Anna',
// };
// const p: Parameters<СreateCustomerFunctionType> = ['Anna', 30, 'Kyiv'];
// createCustomer(...p);

// Task 08.01
// const obj = new UL.UniversityLibrarian();
// console.log(obj);
// obj.assistCustomer = null;
// UL.UniversityLibrarian['a'] = 1;
// UL.UniversityLibrarian.prototype['b'] = 1;

// Task 08.02
// const obj = new UL.UniversityLibrarian();
// console.log(obj);
// obj.name = 'Ana';
// obj['printLibrerian']();

// Task 08.03
// const obj = new UL.UniversityLibrarian();
// console.log(obj);
// const proto = Object.getPrototypeOf(obj);
// console.log(proto);
// proto.assistFaculty = null;
// proto.teachCommunity = null;

// Task 08.04
// const enc = new RefBook(1,'Learn TS', 2022, 3);
// enc.printItem();

// Task 08.05
// const obj = new UL.UniversityLibrarian();
// console.log(obj);
// obj.assistCustomer('Boris', 'Learn JS');

// Task 08.06
// const obj = new UL.UniversityLibrarian();
// console.log(obj);
// obj.assistCustomer('Boris', 'Learn JS');

// Task 08.07
// const enc = new RefBook(1,'Learn TS', 2022, 3);
// enc.copies = 10;
// console.log(enc);

// Task 09.01
// console.log('Begin');
// getBooksByCategory(Category.Javascript, logCategorySearch);
// getBooksByCategory(Category.Software, logCategorySearch);
// console.log('End');

// Task 09.02
// console.log('Begin');
// getBooksByCategoryPromise(Category.Javascript)
//     .then(titles =>  Promise.resolve(titles.length))
// getBooksByCategoryPromise(Category.Software)
//     .then(titles =>  Promise.resolve(titles.length))
// console.log('End');

// Task 09.03
// console.log('Begin');
// logSearchResults(Category.Software).catch(console.log);
// console.log('End');
