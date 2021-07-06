
var operations= require( './operations.js');



console.log("Hello World!");

var args=process.argv.slice(2);

console.log(operations.add(parseInt(args[0]),parseInt(args[1])));

