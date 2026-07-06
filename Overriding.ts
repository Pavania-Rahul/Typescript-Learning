class Vehicle{
 
    running():void{
        console.log("Vehicle is running");
    }
}

class Car extends Vehicle{
   

    running(): void {                        //Overriding
        console.log("Car is running");
    }

     
}

class Truck extends Vehicle{
    
    running(): void {                         //Overriding
        console.log("Truck is running");
    }

}

var vehicle = new Car();
vehicle.running();

var vehicle = new Truck();
vehicle.running();
