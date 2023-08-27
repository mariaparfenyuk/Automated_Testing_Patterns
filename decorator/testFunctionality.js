class TestAction {
  perform() {
    return 'Performed test action';
  }
}

class LogDecorator {
  constructor(action) {
    this.action = action;
  }

  perform() {
    const result = this.action.perform();
    console.log(`Logged: ${result}`);
    return result;
  }
}

module.exports = { TestAction, LogDecorator };
