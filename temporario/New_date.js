const {format} = require('date-fns');

const data = new Date();
const data2 = +data
const data3 = format(new Date(), "yyyy-MM-dd - HH:mm:ss")

console.log(data);
console.log(data2);
console.log(data3);
