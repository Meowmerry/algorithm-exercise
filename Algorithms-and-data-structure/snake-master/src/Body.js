//each time eats an apple, will get bigger by one unit
class Body {

    bodyNode;
    list;
    length;
    update;
    bodyArray;
    add;
    topCopy;
    leftCopy;
    board;

    constructor(board) {

        console.log('Body constructor')

        this.bodyArray = [];
        this.topCopy = 0;
        this.leftCopy = 0;
        this.board = board;
        this.update = function (topOld, leftOld, topNew, leftNew) {
            this.topCopy = topOld;
            this.leftCopy = leftOld;
            let oldTop = `${this.topCopy}px`;
            let oldLeft = `${this.leftCopy}px`;
            let tmpLeft;
            let tmpTop;
            for (let i = 0; i < this.bodyArray.length; i++) {
                tmpLeft = this.bodyArray[i].currentObj.style.left;
                tmpTop = this.bodyArray[i].currentObj.style.top;
                this.bodyArray[i].currentObj.style.left = oldLeft;
                this.bodyArray[i].currentObj.style.top = oldTop;
                oldTop = tmpTop;
                oldLeft = tmpLeft;
            }
        }
    }
}