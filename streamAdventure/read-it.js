const { Readable } = require("stream");

class MyStream extends Readable {
  _read() {
    this.push(process.argv[2]);
    this.push(null);
  }
}

const mystream = new MyStream();
mystream.pipe(process.stdout);
