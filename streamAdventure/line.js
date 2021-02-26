const { Transform } = require("stream");
const split2 = require('split2')


class MyTransform extends Transform {
  _transform(chunk, enc, cb) {
      chunk=chunk.toString();
      if (this.currentLine % 2 == 0) chunk = chunk.toUpperCase();
      else chunk = chunk.toLowerCase();
      this.push(chunk);
      this.currentLine++;
      cb();
  }
}

const myTransform = new MyTransform();
myTransform.currentLine = 1;
process.stdin.pipe(split2()).pipe(myTransform).pipe(process.stdout);

