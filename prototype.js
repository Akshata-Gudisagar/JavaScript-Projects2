var passenger = {
    name: "Akshata"
};
console.log("name" in passenger);
console.log(passenger.hasOwnProperty("name"));
console.log("hasOwnProperty" in passenger);
console.log(passenger.hasOwnProperty("hasOwnProperty"));

console.log(Object.prototype.hasOwnProperty("hasOwnProperty"));