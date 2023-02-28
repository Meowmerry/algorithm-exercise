class Head {

  constructor(board) {
    this.node = document.createElement('img');
    this.node.setAttribute('id', 'head');
    board.appendChild(this.node);
    this.currentDirection = 'right';
    this.SPEED = 250;
    this.node.style.top = 0;
    this.node.style.left = 0;
    this.newBody = new Body(this, board);
    this.anotherNode;

    // Makes one apple, random location
    console.log(this.removeApple);
    this.newApple = new Apple(board);
    this.appleTOPpx = this.newApple.appleTop;
    this.appleLEFTpx = this.newApple.appleLeft;
    setTimeout(this.move.bind(this), this.SPEED);
  }

  move() {
    const head = this.node;
    const direction = this.currentDirection;
    let topPosition = Number(head.style.top.replace('px', ''));
    let leftPosition = Number(head.style.left.replace('px', ''));
    let topCopy = topPosition + 8.335;
    let leftCopy = leftPosition + 8.335;

    if (direction === 'right') {
      head.style.left = `${(leftPosition += 50)}px`;
    }
    if (direction === 'left') {
      head.style.left = `${(leftPosition -= 50)}px`;
    }
    if (direction === 'top') {
      head.style.top = `${(topPosition -= 50)}px`;
    }
    if (direction === 'bottom') {
      head.style.top = `${(topPosition += 50)}px`;
    }

    if (leftPosition === 700 || topPosition === 700 || leftPosition < 0 || topPosition < 0) {
      head.style.backgroundColor = 'white';
      head.style.borderLeftColor = 'black';
      alert('game over!  ' + '  score:   ' + this.newBody.bodyArray.length);
      return;
    }
    this.newBody.update(topCopy, leftCopy);

    if ((head.style.top === this.appleTOPpx && head.style.left === this.appleLEFTpx)) {
      let newObj = {
        currentObj: {}
      };
      this.anotherNode = document.createElement('img');
      this.anotherNode.setAttribute('id', 'body');
      this.anotherNode.setAttribute('src', 'src/assets/snake.jpg')
      this.anotherNode.style.height = '40px';
      this.anotherNode.style.width = '40px';
      // this.anotherNode.style.borderRadius = '1px';
      // this.anotherNode.style.position = 'absolute';
      this.anotherNode.style.top = `${topCopy}px`;
      this.anotherNode.style.left = `${leftCopy}px`;
      board.appendChild(this.anotherNode);
      newObj['currentObj'] = this.anotherNode;
      this.newBody.bodyArray.push(newObj);
      this.newBody.update(topCopy, leftCopy)
      this.newApple.apple.remove();
      this.newApple = new Apple(board);
      this.appleTOPpx = this.newApple.appleTop;
      this.appleLEFTpx = this.newApple.appleLeft;
    }
    if ((topPosition >= 0 && topPosition < 700) && (leftPosition >= 0 && leftPosition < 700)) {
      setTimeout(this.move.bind(this), this.SPEED);
    }
  }
}