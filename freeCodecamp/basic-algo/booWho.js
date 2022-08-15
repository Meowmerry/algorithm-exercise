/*
Boo who
Check if a value is classified as a boolean primitive. 
Return true or false.
Boolean primitives are true and false.
*/
/* =============  SOLUTION 1 ================ */
function booWho(bool) {
    if(typeof bool === 'boolean') return true;
    else return false
}
  
console.log( booWho(null));