var project={
    name: "Road Work"
};

console.log(project.hasOwnProperty("name"));
var prototype= Object.getPrototypeOf(project);
console.log(prototype===Object.prototype);