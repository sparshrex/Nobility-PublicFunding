const http = require("http");
const { createReadStream } = require("fs");
const server = http.createServer((req, res) => {
  // res.write("first server");
  const text = createReadStream("./context.txt");
  text.on("open", () => {
    text.pipe(res);
  });
  text.on("error", (err) => res.end(err));
  // res.end(text);
});
server.listen(3000);
