import { Author, Book, Person } from './interfaces';
import { createCustomer, getBooksByCategory } from './functions';


export type BookProperties = keyof Book;
export type PersonBook = Person & Book;
export type BookOrUndefined = Book | undefined;
export type Data = {
    lib: string;
    books: number;
    avgPagesPerBook: number;
};
export type  BookRequiredFields = Required<Book>;
export type UpdatedBook = Partial<Book>;
export type AuthorWoEmail = Omit<Author, 'email'>;
export type СreateCustomerFunctionType = typeof createCustomer;
type fn = (p1: string, p2: number, p3: boolean) => symbol;
type Param1<T> = T extends (p1: infer R, p2: number, p3: boolean) => symbol ? R : number;
type Param2<T> = T extends (p1: infer R, p2: infer R, p3: boolean) => symbol ? R : number;
type Param3<T> = T extends (p1: infer R, p2: infer R, p3: infer R) => symbol ? R : number;

type P1 = Param1<fn>;
type P2 = Param1<fn>;
type P3 = Param1<fn>;

type Unpromisify<T> = T extends Promise<infer R> ? R : never;
type FRT = ReturnType<typeof getBooksByCategory>;
type RT = Unpromisify<FRT>;
