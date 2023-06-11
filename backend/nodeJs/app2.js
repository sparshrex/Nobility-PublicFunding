const { readFile, writeFile } = require("fs");
const util = require("util");
const readFilePromise = util.promisify(readFile);
const writeFilePromise = util.promisify(writeFile);
// const readData = (path) => {
//   return new Promise((resolve, reject) => {
//     readFile(path, "utf-8", (err, data) => {
//       if (err) reject(err);
//       else resolve(data);
//     });
//   });
// };
// readData("./content.txt")
//   .then((result) => console.log(result))
//   .catch((err) => console.log(err));
const fileHandling = async () => {
  const first = await readFilePromise("./content.txt", "utf-8");
  console.log(first);
  const second = await writeFilePromise("./content.txt", "updatedData");
  console.log(first);
  //   console.log(second);
};

fileHandling();
