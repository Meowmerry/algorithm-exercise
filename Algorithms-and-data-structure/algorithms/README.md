# Algorithms

## Summary
### Big-O Notation
![Big O Notation Graph](./docs/assets/images/bigonotation.jpeg)


Big-O notation is used to compare the efficiency of algorithms and data structures. It provides an upper bound on worst-case runtime and an approximation of how things scale.
In general, we find these approximations by counting operations. 

#### Constant time operations (aka O(1), 1 unit of time)
- declarations/assignments (`let num = 0`) 
- comparisons (`num > 0`) 
- object accesses (`arr[0]`)
- simple mathematical operations (+, -, &amp;, /)

#### Examples
__Constant time O(1)__
```javascript
let num = 0;
function increment() {
    num = num + 1;
}
```
__linear time O(n), where n is the length of the array__
```javascript
const arr = [0, 1, 2, 3];
function increment(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i] + 1;
    }
}
```
__quadratic time O(n^2), where n is the length of the array__
```javascript
const arr = [0, 1, 2, 3];
function sums(arr) {
    const results = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            results.push(arr[i] + arr[j]);
        }
    }
}
```

Big-O is used to approximate how algorithms scale when input-size (array length, number of items in
an object, string length, or whatever) grows towards infinity, so you
can get rid of constant factors and additive terms with smaller orders of
growth. We only want to keep the term that will
dominate the function as input-size grows. For example, we say 5n + 2 is O(n) because the
coefficient and constant become negligible when n is large.

### Recursion
When attempting to solve an algorithm, there are generally two routes you can take: the iterative or the
recursive route. A recursive function is simply a function that calls itself. Instead of using
a loop to repeat steps and solve the problem iteratively, you can write a recursive function that
will use itself to break down the problem into smaller parts and piece together the solution.

##### Remember the 3 crucial parts of a recursive function:
1. Base Case
    - handle the simplest input
2. Recursive Call
    - call the function on a simpler input
    - take a "leap of faith"
        - assume your recursive call with work and use it to solve the bigger problem
3. Return
    - return your result so that you have something to use during your leap of faith

### Sorting Algorithms
##### Bubble Sort O(n^2)
![bubble_sort](./docs/assets/images/bubble_sort.gif) <br>
Bubble sort is terribly inefficient, but it has a cute name and is probably the most intuitive. It
iterates through the array as many times as needed; it knows to stop once no more changes need to be
made (aka the array is sorted). At each iteration, it swaps
neighboring elements if they are out of order, and essentially "bubbles" one (biggest, unsorted)
element to its correct position.

##### Insertion Sort O(n^2)
![insertion_sort](./docs/assets/images/insertion_sort.gif) <br>
Like bubble sort, insertion sort also assembles a sorted array one element at a time. It takes the
next item in the unsorted portion of the array and places it in its correct position in the sorted portion of the array.

##### Merge Sort O(nlogn)
![merge_sort](./docs/assets/images/merge_sort.gif) <br>
Merge sort is a recursive divide-and-conquer algorithm. It recursively splits the array into two
halves and merges them back together in sorted order. Since it is done recursively, the array is
broken down until each element is in its own individual array. Then pairs of these one-element
arrays are merged so that there is a collection of two-element, sorted arrays. These are then merged
in pairs and so on, until all the elements have been pieced back together into one fully sorted
array.
