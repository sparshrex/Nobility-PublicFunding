const { writeFileSync } = require("fs");
for (let i = 0; i <= 10000; i++) {
  writeFileSync("./context.txt", "hello world", { flag: "a" });
}
