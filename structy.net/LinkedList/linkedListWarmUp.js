class Node {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}
let head1 = new Node('a', new Node('b', new Node('c', new Node('d', new Node('e')))));
