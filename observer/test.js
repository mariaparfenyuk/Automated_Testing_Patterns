const { TestSubject, TestObserver } = require('./observerFunctionality');

describe('Observer Pattern in Testing', () => {
  it('should notify observers when subject state changes', () => {
    const subject = new TestSubject();
    const observer1 = new TestObserver('Observer 1');
    const observer2 = new TestObserver('Observer 2');

    subject.addObserver(observer1);
    subject.addObserver(observer2);

    const consoleSpy = jest.spyOn(console, 'log');

    subject.setState('updated state');

    expect(consoleSpy).toHaveBeenCalledWith('Observer Observer 1 received update. New state: updated state');
    expect(consoleSpy).toHaveBeenCalledWith('Observer Observer 2 received update. New state: updated state');

    consoleSpy.mockRestore();
  });
});
