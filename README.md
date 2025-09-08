1) What is the difference between var, let, and const?
*Answer:* "var" is a function scoped, hoisted(meaning: if its used before declaration it will hoist but the value will be undefined),re-declarable & re-assignable variable declaration.()

"let" on the other hand block-scoped, TDZ hoisted(temporal dead zone, meaning: if its used before declaration it will throw an error), re-assignable but not re-declarable variable declaration.

at last "const" is a block-scoped, TDZ hoisted(temporal dead zone, meaning: if its used before declaration it will throw an error),not re-assignable & not re-declarable variable declaration.


2) What is the difference between map(), forEach(), and filter()?
*Answer:* all of three are looping method, the difference is the return value they provided; 
forEach() doesn't return new array. can use instead of traditional for-of loop.
map() it returns a new array by without changing the array provided
filter() also provide a new array but based on the condition provided by the developer   


3) What are arrow functions in ES6?
*Answer:* array function is a modern way to write function which is introduced by ECMAScript in 2015, it doesn't required to write return if it contains single expression



4) How does destructuring assignment work in ES6?
*Answer:* Destructuring is a shortcut and clean and convenient way to declare variable. In another word its a shortcut way to extract value from array or object and declare them into a variable

Destructuring:

const arr =[1,2,3]
const[a,b,c] = arr;

5) Explain template literals in ES6. How are they different from string concatenation?

*Answer:* Template literals are strings enclosed in backticks (``) that allow writing multi-line strings and embedding dynamic values directly. Unlike traditional string concatenation, we don’t need "+" to combine variables or "\n" for new lines;dynamic expressions can be inserted using ${…}.