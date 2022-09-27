const Car = function(company, model, topSpeed){
    this.company = company;
    this.model = model;
    this.topSpeed = topSpeed;
}

Car.prototype.getInfo= function(){
    return `Company: ${this.company} \nModel: ${this.model} \nTop speed: ${this.topSpeed} km/hr`;
}

const carOne = new Car("BMW", "G-Matic", 200);

console.log(carOne.getInfo());