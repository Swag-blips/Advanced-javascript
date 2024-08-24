class Timer {
  constructor() {
    this.tick = 0;
    this.timerId = null;
  }

  start() {
    this.timerId = setInterval(() => {
      if (this.tick >= 5) {
        this.stop();
      } else {
        console.log(this.tick++);
      }
    }, 1000);
  }

  stop() {
    clearInterval(this.timerId);
  }
}

const timer = new Timer();

timer.start();
