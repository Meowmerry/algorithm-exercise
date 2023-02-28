describe('LinkedList', () => {
  let list;

  beforeEach(() => {
    list = new LinkedList();
  });

  it('should have a push method', () => {
    expect(list.push).to.be.a('function');
  });

  it('should have head set to null when list is made', () => {
    expect(list.head).to.eql(null);
  });

  it('should push first element to head', () => {
    list.push(5);
    expect(list.head.value).to.eql(5);
    expect(list.head.next).to.eql(null);
  });

  it('should push multiple elements', () => {
    list.push(0);
    list.push(1);
    list.push(2);
    list.push(3);
    expect(list.head.value).to.eql(0);
    expect(list.head.next.value).to.eql(1);
    expect(list.head.next.next.value).to.eql(2);
    expect(list.head.next.next.next.value).to.eql(3);
    expect(list.head.next.next.next.next).to.eql(null);
  });

  it('should return true if list contains a value', () => {
    list.push(3);
    list.push(7);
    list.push(6);
    list.push(4);
    expect(list.contains(3)).to.eql(true);
    expect(list.contains(7)).to.eql(true);
    expect(list.contains(6)).to.eql(true);
    expect(list.contains(4)).to.eql(true);
  });

  it('should return false if list doesn\'t contain value', () => {
    list.push(3);
    list.push(7);
    list.push(4);
    expect(list.contains(2)).to.eql(false);
    expect(list.contains(6)).to.eql(false);
  });

  // remove x to activate test
  it('should have addToHead method', () => {
    expect(list.addToHead).to.be.a('function');
  });

  // remove x to activate test
  it('should add value to head', () => {
    list.push(0);
    list.push(1);
    list.push(2);
    expect(list.head.value).to.eql(0);
    expect(list.head.next.value).to.eql(1);
    expect(list.head.next.next.value).to.eql(2);
    expect(list.head.next.next.next).to.eql(null);
    list.addToHead(3);
    expect(list.head.value).to.eql(3);
    expect(list.head.next.value).to.eql(0);
    expect(list.head.next.next.value).to.eql(1);
    expect(list.head.next.next.next.value).to.eql(2);
    expect(list.head.next.next.next.next).to.eql(null);
    list.addToHead(4);
    expect(list.head.value).to.eql(4);
    expect(list.head.next.value).to.eql(3);
    expect(list.head.next.next.value).to.eql(0);
    expect(list.head.next.next.next.value).to.eql(1);
    expect(list.head.next.next.next.next.value).to.eql(2);
    expect(list.head.next.next.next.next.next).to.eql(null);
  });

  it('the constructor should take a variable number of arguments. It will add each of the arguments to the list upon instantiation', () => {
    const newList = new LinkedList(5, 1, 2, 6, 8);
    expect(newList.head.value).to.eql(5);
    expect(newList.head.next.value).to.eql(1);
    expect(newList.head.next.next.value).to.eql(2);
    expect(newList.head.next.next.next.value).to.eql(6);
    expect(newList.head.next.next.next.next.value).to.eql(8);
    expect(newList.head.next.next.next.next.next).to.eql(null);
  });

  it('should insert node at as the head', () => {
    list.insert(5, 0);
    expect(list.head.value).to.eql(5);
  });

  it('should insert node at as the tail and the tail node remains unchanged', () => {
    list.push(1);
    list.push(2);
    list.push(3);
    list.push(4);
    list.insert(8, 3);
    expect(list.head.next.next.next.next.value).to.eql(4);
  });

  it('should insert node at any given position', () => {
    list.push(1);
    list.push(2);
    list.push(3);
    list.push(4);
    list.insert(8, 3);
    expect(list.head.next.next.next.value).to.eql(8);
  });
});

// remove x to activate test
describe('Doubly Linked List', () => {
  let list;

  beforeEach(() => {
    list = new LinkedList();
  });

  it('nodes should have back property', () => {
    const node = new Node(0);
    expect(node).to.have.property('back');
  });

  it('should link back reference to previous node when node is pushed to list', () => {
    list.push(0);
    list.push(1);
    list.push(2);
    expect(list.head.value).to.eql(0);
    expect(list.head.next.value).to.eql(1);
    expect(list.head.next.next.value).to.eql(2);
    expect(list.head).to.equal(list.head.next.back);
    expect(list.head.next).to.equal(list.head.next.next.back);
  });
});
