// import type { LoginSchema } from 'lib/schemas'

declare global {
    namespace App {
        // interface Error {}
        // interface Locals {}
        // interface PageData {}
        // interface PageState {}
        // interface Platform {}
    }

    type MaybePromise<T> = Promise<T> | T;
}

export {};
