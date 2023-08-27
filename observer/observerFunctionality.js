class TestSubject {
  constructor() {
    this.observers = [];
    this.state = 'initial';
  }

  addObserver(observer) {
    this.observers.push(observer);
  }

  setState(newState) {
    this.state = newState;
    this.notifyObservers();
  }

  notifyObservers() {
    this.observers.forEach(observer => {
      observer.update(this.state);
    });
  }
}

class TestObserver {
  constructor(name) {
    this.name = name;
  }

  update(newState) {
    console.log(`Observer ${this.name} received update. New state: ${newState}`);
  }
}

module.exports = { TestSubject, TestObserver };
