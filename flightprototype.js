function Flight(airlines,flightNumber){
    this.airlines = airlines;
    this.flightNumber = flightNumber;
   
}
Flight.prototype = {

    constructor: Flight,

   display: function(){
        console.log(this.airlines);
        console.log(this.flightNumber);
    },
    toString: function(){
        return "[Flight"+this.airlines+","+this.flightNumber+"]";
    }
};


var flight1 = new Flight("American Airlines","AA123");
    var flight2 = new Flight("Indian Airlines","IND123");

    flight1.display();
    flight2.display();

    console.log(flight1.toString());
    console.log(flight2.toString());

    console.log(flight1 instanceof Flight);
    console.log(flight1.constructor===Flight)
    console.log(flight1.constructor===Object)
