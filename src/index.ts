/**
 * Rodrigo Augusto Silva Lima
 *  Defina uma classe denominada MyArray que contenha um método recursivo que retorne
 *  a soma de todos os elementos presentes no array.
 */


import { MyArray } from "./myArray";

const myArray1 = new MyArray([1, 2, 3, 4, 5, 6, 7, 8]);
const myArray2 = new MyArray([]);
const myArray3 = new MyArray([0]);
const myArray4 = new MyArray([8]);
const myArray5 = new MyArray([6, 7, 0, 19, 76]);

console.log("Array 1 = ", myArray1.soma());
console.log("Array 2 = ", myArray2.soma());
console.log("Array 3 = ", myArray3.soma());
console.log("Array 4 = ", myArray4.soma());
console.log("Array 5 = ", myArray5.soma());