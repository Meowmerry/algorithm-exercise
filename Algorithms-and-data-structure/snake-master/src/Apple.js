class Body {
  // set up body instructions.
  constructor(el) {
    this.snakeBody = []; //or can be an image that we keep appending to the head
    this.length = 0;
    this.top = 0;
    this.left = 0;
    this.board = el;
  }

  // each time eats an apple, will get bigger by one unit
  // create a fucn to update body each time eat apple, accept oldTop, oldLeftl/
  update(oldTop, oldLeft) {
    this.top = oldTop;
    this.left = oldLeft;
    let newTop = `${this.top}px`;
    let newLeft = `${this.left}px`;
    let tempTop;
    let tempLeft;
    for (let i = 0; i < this.snakeBody.length; i += 1) {
      tempTop = this.snakeBody[i].current.style.top;
      tempLeft = this.snakeBody[i].current.style.left;
      this.snakeBody[i].current.style.top = newTop;
      this.snakeBody[i].current.style.left = newLeft;
      newTop = tempTop;
      newLeft = tempLeft;
    }
  }
}