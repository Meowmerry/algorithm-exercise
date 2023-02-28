/**
 * Recursively flattens a nested array.
 * flattenDeep([1, [2, 3, [4]]]); → [1, 2, 3, 4]
 */

// Solution 1
function flattenDeep(array) {
  return array.reduce(
    (acc, curr) => acc.concat(Array.isArray(curr) ? flattenDeep(curr) : curr),
    []
  );
}
console.log(flattenDeep([1, [2, 3, [4]]]))
// Solution 2
function flattenDeep(array) {
  let output = [];
  for (let i = 0; i < array.length; i += 1) {
    if (Array.isArray(array[i])) {
      output = output.concat(flattenDeep(array[i]));
    } else {
      output.push(array[i]);
    }
  }
  return output;
}

// Solution 3  , Time Complexity : O(n)
function flattenDeep(array) {
  const flat = [];
  for (let element of array) {
    Array.isArray(element)
      ? flat.push(...flattenDeep(element))
      : flat.push(element);
  }
  return flattenDeep;
}
