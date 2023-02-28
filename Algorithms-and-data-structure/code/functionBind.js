/** returns a function with a context bound to this
 *
 * const mattObj = {
 *  name: 'matt',
 *  shout: function() {
 *      console.log(this.name);
 *  }
 * };
 * let boundShout = functionBind(mattObj.shout, mattObj);
 * boundShout(); -> prints 'matt;
 *
 * const kimObj = {
 *  name: 'kim',
 *  shout: function() {
 *      console.log(this.name);
 *  }
 * };
 * boundShout = functionBind(mattObj.shout, kimObj);
 * boundShout(); -> prints 'kim'
 *
 * boundShout = functionBind(mattObj.shout, {name: 'bob'});
 * boundShout(); -> prints 'bob'
 Input : function, context(object)
 Output : function


 */
// create a new method in our context objects and assign it to the passed in function
// Return a funciton which returns the invocation of our new method
function functionBind(func, context) {
    context.boundFunc = func;
    return () => context.boundFunc();
}
const mattObj = {
    name: "matt",
    shout: function () {
        return this.name;
    }
};
const boundShout = functionBind(mattObj.shout, {
    name: "Kim"
});
console.log(boundShout()) // Kim