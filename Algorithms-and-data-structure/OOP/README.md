# Arrays

The array is one of the most widely used data structures in programming. Together with objects, these collections are the workhorses of iteration in JavaScript (technically an array is an object).

## Summary

This challenge will test your understanding on how arrays work. We will be building a constructor (a function that creates objects) that returns instances with a push, pop, unshift, and shift method that behave similarly to the native array methods. This can also be referred to as an array _class_. Classes can be thought of as _data types_. For example, `String`, `Number`, and `Date` are classes built into the JS language along with arrays. They are classes that have instances. Each instance of the class shares the same methods/functions. To implement your own class, you want your instances to have access to those methods. This is accomplished via the _prototype chain_. This can be done with prototypical inheritance (i.e. using `Object.create`) or with pseudo-classical inheritance (i.e. using the `new` keyword on a constructor function). Check out [this Medium article on Javascript Prototypal Inheritance](https://medium.com/@kevincennis/prototypal-inheritance-781bccc97edb) for more information.

## How do I get started?

1. Fork this repo

- click on fork button on the top right of the page
  <br><img src="./docs/assets/images/fork_button.jpg" width="300px"></img>
- In the modal that is created, click on your github handle to fork to your repo

2. Clone the repo

- Click on the green "code" button on right side of the screen to get the repository url. Copy it!
  <br><img src="./docs/assets/images/code-button.png" width="300px"></img>
- type the following line into your command line and insert your copied url as shown below:

```
git clone the-github-url-you-just-copied
```

3. Complete the skills builder

- add the necessary lines of code inside the ArrayClone constructor (function) in `src/Array.js.`

## Challenges

#### Implement the following methods and properties

_Note: be sure to do each of these in place by updating the existing contents._

- [ ] `length` is a property that holds the size (number of elements) in the array.
- [ ] `push` is a method that adds the inputted values to the end of the array.
- [ ] `pop` is a method that removes the last element from the array and returns it
- [ ] `shift` is a method that removes the first element from the array, returns it, and _shifts_ the remaining elements one to the left so that there isn't an empty space at index 0.
- [ ] `unshift` is a method that adds the inputted values at the beginning of the array.

#### Bonus

- [ ] To behave more like the real built-in Array object, refactor your `push` and `unshift` methods to accept an unknown number of parameters in one call.

<img src="./docs/assets/images/array-push-pop.png" height="200px">

## How do I test if my answer is correct?

- To test your functions, open index.html in your browser. (Some function tests here depend on previous functions to be working properly first.)

- NOTE: While completing the challenges, if all tests that previously passed ALL suddenly fail, there is most likely a syntax error in your code. Open Chrome Dev Tool's to locate the cause of the error.
