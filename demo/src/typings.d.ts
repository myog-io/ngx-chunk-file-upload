// Typings reference file, you can add your own global typings here
// https://www.typescriptlang.org/docs/handbook/writing-declaration-files.html
// tslint:disable
declare const System: any;
declare const ENV:string;
// google code-prettify
declare const PR:any;

// declare const require:any;
// declare const global:any;

declare module jasmine {
  // tslint:disable
  interface Matchers<T> {
    toHaveCssClass(expected: Expected<T>): boolean;
  }
}
