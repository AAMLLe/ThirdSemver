var colors = require('colors');

exports.printMsg = function() {
 console.log("Here I am!".green);
}

exports.anotherMsg = function(msg) {
 console.log(msg.blue);
}

exports.anotherMsg = function(msg, color, repeatTimes) {
 console.log(msg.color);
 // console.log('anotherMsg done');
}

exports.welcomeMsg = function() {
console.log("ふぁんど".darkGreen);
}

exports.welcomeMsg = function(color, description) {
console.log(description.color);
}

exports.welcomeMsg = function(color) {
console.log("ふぁんど".color);
}
