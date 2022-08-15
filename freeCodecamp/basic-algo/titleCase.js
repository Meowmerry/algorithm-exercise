/*
Title Case a Sentence
Return the provided string with the first letter of each word capitalized. 
Make sure the rest of the word is in lower case.

For the purpose of this exercise, you should also capitalize connecting words like the and of.
*/
/* =============  SOLUTION 1 ================ */
function titleCase(str) {
  return str
    .split(" ")
    .map((word) => `${word[0].toUpperCase()}${word.slice(1).toLowerCase()}`)
    .join(" ");
}

console.log(titleCase("I'm a little tea pot")); //I'm A Little Tea

function titleCase(str) {
  const newTitle = str.split(" ");
  const updatedTitle = [];
  for (let st in newTitle) {
    updatedTitle[st] =
      newTitle[st][0].toUpperCase() + newTitle[st].slice(1).toLowerCase();
  }
  return updatedTitle.join(" ");
}

function titleCase(str) {
  return str
    .toLowerCase()
    .split(" ")
    .map((val) => val.replace(val.charAt(0), val.charAt(0).toUpperCase()))
    .join(" ");
}

titleCase("I'm a little tea pot");

function titleCase(str) {
  return str.toLowerCase().replace(/(^|\s)\S/g, (L) => L.toUpperCase());
}
