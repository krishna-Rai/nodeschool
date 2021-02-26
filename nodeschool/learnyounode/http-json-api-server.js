const http = require("http");
const url = require()
http
  .createServer((req, res) => {
    console.log(req.url);
    

    if (url.pathname == "/api/parsetime") {
      const iso = url.searchParams.iso;
      const date = new Date(iso);
      const result = {
        hour: date.getHours(),
        minute: date.getMinutes(),
        second: date.getMinutes(),
      };
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(result));
    } else if (url.pathname == "/api/unixtime") {
      const iso = url.searchParams.iso;
      const date = new Date(iso);
      res.end(
        JSON.stringify({
          unixtime: date.getUTCMilliseconds(),
        })
      );
    }
  })
  .listen(process.argv[2]);
