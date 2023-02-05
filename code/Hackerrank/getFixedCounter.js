const counter = (function counter() {
  let value = 0;
  return {
    getValue: function () {
      return value;
    },
    changeBy: function (k) {
      value += k;
    },
  };
})();

function getFixedCounter(k) {
  // write your code here
  const stepCount = counter;
  // return a new object, representing a step counter with the initial value of 0 and with three methods:
  // increment(): increments the current value by k
  // decrement(): decrements the current value by k
  // getValue(): return the currrentvalue
  return {
    increment: () => {
      stepCount.changeBy(k);
    },
    decrement: () => {
      stepCount.changeBy(-k);
    },
    getValue: () => {
     return stepCount.getValue();
    },
  };
}
console.log(counter.getValue());
counter.changeBy(10);
counter.changeBy(20);
console.log(counter.getValue());
