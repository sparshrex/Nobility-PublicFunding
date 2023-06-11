const { createReadStream } = require("fs");
const stream = createReadStream("./context.txt");
stream.on("data", (response) => {
  console.log(response);
});
