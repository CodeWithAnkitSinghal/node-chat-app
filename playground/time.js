const moment = require('moment');

// var date = new Date();
// console.log(date.getMonth());

var date = moment();
console.log(date.format('hh:mm a'));