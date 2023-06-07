class ElectricDevice {
    constructor(name, power) {
        this.name = name;
        this.power = power;
        this.isPluged = false;
    }

    plugIn() {
        console.log(this.name + " включен.");
        this.isPluged = true;
    }

    unplug() {
        console.log(this.name + " выключен.");
        this.isPluged = false;
    }
}

class Lamp extends ElectricDevice {
    constructor(name, power, brand, typeLamp) {
        super(name, power);
        this.brand = brand;
        this.typeLamp = typeLamp;
        this.isPluged = false;
    }
}

class PC extends ElectricDevice {
    constructor(name, power, brand, cpu) {
        super(name, power);
        this.brand = brand;
        this.cpu = cpu;
        this.isPluged = false;
    }
}

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
