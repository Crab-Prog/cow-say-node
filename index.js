const userInfo = require('./information');
console.log(`Hi, my name is ${userInfo.name} and I'm in the ${userInfo.campus} campus`);

let cowsay = require("cowsay");

console.log(cowsay.think({
    text : `Hi, my name is ${userInfo.name} and I'm in the ${userInfo.campus} campus`,
    e : "oO",
    T : "U ",
}));