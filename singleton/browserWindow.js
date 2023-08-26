class BrowserWindow {
  constructor() {
    if (BrowserWindow.instance) {
      return BrowserWindow.instance;
    }

    this.window = null;
    this.isClosed = true;

    BrowserWindow.instance = this;
  }

  open() {
    this.isClosed = false;
  }

  close() {
    this.isClosed = true;
  }

  static getInstance() {
    if (!this.instance) {
      this.instance = new BrowserWindow();
    }
    return this.instance;
  }
}

const browserWindow1 = BrowserWindow.getInstance();
const browserWindow2 = BrowserWindow.getInstance();

console.log(browserWindow1 === browserWindow2);
