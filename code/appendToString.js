/* 
appendToString
Write a function called appendToString, which accepts two strings.
The function should return a new string which consists of the second string appended to the first string.
Examples:
appendToString("Hello", " World!"); // "Hello World!"
appendToString("Foo", "bar"); // "Foobar"
appendToString("bar", "Foo"); // "barFoo"
appendToString("", "test"); // "test"
appendToString("other test", ""); // "other test"
*/
const appendToString = (str1, str2) => str1 + str2;
console.log(appendToString("Hello", " World!")); // "Hello World!"
console.log(appendToString("Foo", "bar")); // "Foobar"
console.log(appendToString("bar", "Foo")); // "barFoo"
console.log(appendToString("", "test")); // "test"
console.log(appendToString("other test", "")); // "other test"
