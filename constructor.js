function Flight(airlines,flightNumber){
    this.airlines = airlines;
    this.flightNumber = flightNumber;
   
    this.display=function(){
        console.log(this.airlines);
        console.log(this.flightNumber);
    };

}
var flight1 = new Flight("American Airlines","AA123");
    var flight2 = new Flight("Indian Airlines","IND123");

    flight1.display();
    flight2.display();

    console.log(flight1 instanceof Flight);
    console.log(flight2 instanceof Flight);

    console.log(flight1.constructor === Flight);
    console.log(flight1.constructor === Flight);
