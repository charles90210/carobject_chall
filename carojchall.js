//define variable for the function with car information.

var ourCar = carInformation("bmw", "x6M", 2016, "black")
//creating a function here with arguements about the car.
function carInformation (carMake, carModel, carYear, carColour) {
  //this returns the function
  return {
    //this calls the make,model,year and color of the car.
    make: carMake,
    model: carModel,
    year: carYear,
    colour: carColour,
    //this is a function inside a function getting prior data
    getData: function() {
      //this prints the variables make, model, year and color in a string.
      return this.make + " " + this.model +
      " " + this.year + " " + this.colour;}
  };
}

//challenge 2:

var ourCar = carInformation("bmw", "x6M", 2016, "black")
function carInformation (carMake, carModel, carYear, carColour) {
  var speed = 110;
  return {
    make: carMake,
    model: carModel,
    year: carYear,
    colour: carColour,
    getData: function() {
      return this.make + " " + this.model +
      " " + this.year + " " + this.colour;},
      getSpeed: function() { return speed; },
      accelerate: function() {speed = speed+10},
      brake: function() {speed = speed-7},
  };
}

//challenge 3:

var ourCar = carInformation("bmw", "x6M", 2016, "black")
function carInformation (carMake, carModel, carYear, carColour) {
  var speed = 110;
  return {
    make: carMake,
    model: carModel,
    year: carYear,
    colour: carColour,
    getData: function() {
      return this.make + " " + this.model +
      " " + this.year + " " + this.colour;},
      getSpeed: function() { return speed; },
      accelerate: function() {speed = speed+10},
      brake: function() {speed = speed-7},
  };
}

function carSpeed(ourCar) {
  var startingSpeed = 0;
  while (startingSpeed < 85) {
    startingSpeed = startingSpeed+1;
    console.log(startingSpeed)
    if (startingSpeed === 85){
    alert("Hey Kid, Slow Down!");}
  }
  while (startingSpeed > 0) {
    startingSpeed = startingSpeed-1;
    console.log(startingSpeed)
  }
}
