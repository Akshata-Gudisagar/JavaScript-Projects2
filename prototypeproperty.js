var myObj = {

};
var prototype= Object.getPrototypeOf(myObj);

console.log(prototype==Object.prototype);
console.log(Object.prototype.isPrototypeOf(myObj));