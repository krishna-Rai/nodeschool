const http = require("http");
let data = "";
http.get(process.argv[2], (response) => {
  response.setEncoding("utf8");
  response.on("data", (chunk) => {
    data += chunk;
  });
  response.on("end", () => {
    console.log(data.length);
    console.log(data);
  });
});
