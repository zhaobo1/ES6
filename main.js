let cat = import Cat from './a';

import Cat, { say, type } from './a';
let says = say();//hello;
console.log(`The ${type} say ${says} To ${Cat}`);//The dog say hello To A cat;
console.log(cat);