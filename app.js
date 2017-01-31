var fs = require("fs");
var data = fs.readFileSync("x.txt");
console.log("Synchronous read: " + data.toString());
