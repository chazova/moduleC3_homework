function ElectricDevice(name, power) {
    this.name = name;
    this.power = power;
    this.isPluged = false;
}

ElectricDevice.prototype.plugIn = function () {
    console.log(this.name + " включен.");
    this.isPluged = true;
}

ElectricDevice.prototype.unplug = function () {
    console.log(this.name + " выключен.");
    this.isPluged = false;
}

function Lamp(name, power, brand, typeLamp) {
    this.name = name;
    this.power = power;
    this.brand = brand;
    this.typeLamp = typeLamp;
    this.isPluged = false;
}

Lamp.prototype = new ElectricDevice();

function PC(name, power, brand, cpu) {
    this.name = name;
    this.power = power;
    this.brand = brand;
    this.cpu = cpu;
    this.isPluged = false;
}

PC.prototype = new ElectricDevice()

const tableLamp = new Lamp("Table lamp", 10, "LG", "LED")

const miniPC = new PC("Mini PC", 100, "Acer", "Intel")

tableLamp.plugIn()
miniPC.plugIn()

console.log(tableLamp);
console.log(miniPC);

let myElectricDevice = [tableLamp, miniPC];
function sumPower(devices) {
    let sum = 0;
    for (let key of devices) {
        if (key.isPluged === true) {
            sum += key.power
        }
    }
    return sum;
}

console.log(`Потребляемая мощность всех включенных приборов - ${sumPower(myElectricDevice)} Вт`);