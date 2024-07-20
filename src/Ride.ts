class Ride{
    // activeRide:number = 0;
    //We cant override activeRides as now its private

    private static _activeRide:number = 0;

    start() {Ride._activeRide++};
    stop(){Ride._activeRide--};

    static get activeRides (){
        return Ride._activeRide;
    }
}

let ride1 = new Ride();
ride1.start();


let ride2 = new Ride();
ride2.start();

console.log(Ride.activeRides);


//here we have 2 separate obj and each obj is separate space and indepenedently tracking and 
// we need a single or global place where we can keep track of active rides where we have only 1 instance of it in memory
//static belong sto class and not obj