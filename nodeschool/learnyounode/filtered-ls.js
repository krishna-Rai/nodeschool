const fs = require("fs");
const path = require("path");
fs.readdir(process.argv[2], (err, list) => {
  list.forEach((e) => {
    if (path.extname(e) === "." + process.argv[3]) console.log(e);
  });
});
