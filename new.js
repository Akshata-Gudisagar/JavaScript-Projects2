var myObj = {

};
console.log(myObj.toString());

myObj.toString = function(){
    return "My toString Method";
};

console.log(myObj.toString());

delete myObj.toString

console.log(myObj.toString());

delete myObj.toString

console.log(myObj.toString());

