function Doctor(name){
    this.name = name;

}

Doctor.prototype.treat = function(){
    return "treated";
};

Doctor.prototype.toString = function(){
    return "[Doctor"+this.name+"]";
};

function Surgeon(name,type){
    Doctor.call(this,name);
    this.name = name;
    this.type = type;
}

Surgeon.prototype = new Doctor();
Surgeon.prototype.constructor = Surgeon;

Surgeon.prototype.toString = function(){
    return "[Surgeon"+this.name+" type"+this.type+"]";
};

var doctor = new Doctor("Akshata");
var surgeon = new Surgeon("Vaish","Dental");

console.log(doctor.treat());
console.log(surgeon.treat());

console.log(doctor.toString());
console.log(surgeon.toString());

console.log(doctor instanceof Doctor);
console.log(doctor instanceof Object);

console.log(surgeon instanceof Doctor);
console.log(surgeon instanceof Surgeon);
console.log(surgeon instanceof Object);






    
