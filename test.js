//console.log("Only works if you've done `npm install mhash`");
//var hash = require("mhash");

var hash = require("./index");
console.log(hash("md2", "testing"));

console.log("\nNext should be: 0c1e02ff");
console.log(hash("adler32", "testing"));
