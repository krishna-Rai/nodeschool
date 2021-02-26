const { Transform } = require("stream");

class MyTransform extends Transform {
  _transform(chunk, enc, cb) {
    this.push(chunk.toString().toUpperCase());
    cb();
  }
}

const myTransform = new MyTransform();
process.stdin.pipe(myTransform).pipe(process.stdout);
