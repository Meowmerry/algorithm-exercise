describe('functionBind', () => {
  let mattObj;
  let bobObj;

  beforeEach(() => {
    mattObj = {name: "matt", shout: function() {return this.name;}};
    bobObj = {name: "bob"};
  });

  it('should use the context it is bound to', () => {
    let boundShout = functionBind(mattObj.shout, mattObj);
    expect(boundShout()).to.be("matt");
    boundShout = functionBind(mattObj.shout, bobObj);
    expect(boundShout()).to.be("bob");
  });

 });



