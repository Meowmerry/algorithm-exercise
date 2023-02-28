There are some key distinctions between primitive and composite data types in terms of how they are stored and accessed in memory. Namely, in JavaScript, primitive data types are passed by **value**, whereas composite data types are passed by **reference**.

It’s crucial to understand what this means. Knowing how different data types behave under the hood will help you to avoid a number of unpleasant surprises and unintended consequences. So let’s take a look!

<h3>What does it mean to ‘pass by value’?</h3>

Let’s declare a variable—we’ll call it `tree`—and assign it the value of a <em>string</em>.

`let tree = ‘oak’;`

The label `tree` now refers to the string ‘oak’, and that string will be stored someplace in memory. In the diagram below, let’s say that it lives at the address 128.

<img src="/docs/assets/images/value-img1.png" width="50%" height="50%"/>

Now, let’s declare another variable—

`let table = tree;`

—and assign it to equal our first string, `tree`. In memory, we now have two distinct variables, `tree` and `table`, both of which are storing the string “oak”.

<img src="/docs/assets/images/value-img2.png" width="50%" height="50%"/>

When we initialized `table` in the snippet above, what we’ve effectively done was to create a copy of `tree`’s value and assign it to the label `table`.

But let’s say we now want our `table` to be made of maple wood rather than oak, so we reassign it accordingly. If we were to now console.log our two variables, we’d see that `table` is now ‘maple’, while `tree` has remained the same. Because `table` was never anything more than a copy of `tree`, nothing we do to it will ever have any effect on `tree`.

<img src="/docs/assets/images/value-img3.png" width="50%" height="50%"/>

This is what it means for something to be passed by value. The label assigned to that variable refers to the value that it holds.

<h3>What does it mean to ‘pass by reference’?</h3>

Composite data types, such as objects or arrays (which, if you’ll recall, are essentially just a specific type of object), are a bit more complicated. Composites are not passed by value, but rather, by <em>reference</em>. What does this mean, and how does it contrast with how JavaScript treats primitives?

Let’s create an <em>object</em>. We’ll call it `lamp`. And then, much like we did above with our strings     `tree` and `table`, we’ll declare a second variable and assign it to equal `lamp`.

`let lamp = { voltage: 100, on: false };`<br>
`let flashlight = lamp;`

`flashlight` also now lives in memory, but the way it’s being stored is somewhat different. The label we’ve assigned to it does not refer to the actual content of the object; rather, it directs us to the specific <em>memory address</em> at which the object is being stored.

<img src="/docs/assets/images/reference-img1.png" width="50%" height="50%"/>

Now, what will happen if we try to change the ‘on’ property on `flashlight`? If we console.log `flashlight`, we’d see that `on` has indeed been updated to reflect the change that we’ve made. If we console.log `lamp`, however…

`flashlight.on = true;`<br>
`console.log(flashlight);` *`// { voltage: 100, on: true }`*<br>
`console.log(lamp);` *`// { voltage: 100, on: true }`*

It looks like the ‘on’ property on `lamp` is now set to true as well! What’s happened here?

Understand that when you assigned `flashlight` to equal `lamp`, what you actually did was to give `flashlight` the value of *the specific memory address that `lamp` was referencing*. The object in question has, in fact, only been stored once—but now it has two labels pointing to it. Thus, if you use either one of those variable names to mutate this object, the changes will be reflected in the other variable name as well. Because technically, `flashlight` and `lamp` are the same.

<img src="/docs/assets/images/reference-img2.png" width="50%" height="50%"/>

If you wish to instead make a *separate copy* of an object or array, you must do so very explicitly. JavaScript gives us a few ways to do this. We could do so using the spread operator syntax {…object}, or Object.assign({}, object), or in the case of arrays, calling array.slice() without any arguments. (Note that things become rather more complicated when dealing with composites that are *nested within* each other, i.e. multidimensional arrays or objects. In this case, these methods alone will not be enough; since every inner array or object will *also* be passed by reference, we need to take extra caution to ensure that we’re explicitly copying all of them!)

Let’s ask another question now: what would happen if we were to reassign `flashlight` to something else entirely, as in the code snippet below? What would the value of our `lamp` be now, if we were to console.log it?

`let flashlight = { color: ‘violet’ };`<br>
`console.log(lamp);` *`// { voltage: 100, on: true }`*

That’s right—this time, `lamp` hasn’t changed! When we *reassign* `flashlight` (as opposed to mutating it), all we’re changing is the value of that particular label. So while `flashlight` is now associated with a different object somewhere else in memory, `lamp` hasn’t been affected, and it still references what it originally did.

<img src="/docs/assets/images/reference-img3.png" width="50%" height="50%"/>

As a final example, let’s declare one more variable, called `crayon`, and assign it to the value of `flashlight`’s ‘color’ property. After confirming that `crayon`’s value is indeed the string ‘violet’, we’ll change it to the string `lavender`. What will happen when we console.log `flashlight.color`?

`let flashlight = { color: ‘violet’ };`<br>
`let crayon = flashlight.color;`<br>
`console.log(crayon);` *`// ‘violet’`*<br>
`crayon = 'lavender';`<br>
`console.log(crayon);` *`// 'lavender'`*<br>
`console.log(flashlight.color);` *`// ‘violet’`*<br>

Again, nothing has happened! Our object hasn’t changed. Its ‘color’ property is a string, which, again, is passed by value—so in assigning `crayon` to `flashlight.color`, we’ve actually just made a copy.

And so we’ve come full circle!

