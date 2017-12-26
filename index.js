var colors = require('colors');

exports.printMsg = function() {
 console.log("Here I am!".green);
}

exports.anotherMsg = function(msg) {
 console.log(msg.blue);
}

exports.anotherMsg = function(msg, color, repeatTimes) {
 console.log(msg.color);
}

// exports.welcomeMsg = function() {
// console.log("ふぁんど".yellow);
// }

exports.welcomeMsg = function(color) {
console.log("ふぁんど".color);
}

exports.fwMsg = function(color) {
console.log("さよなら".color);
}
