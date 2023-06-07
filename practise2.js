const woodenFurniture = {
    material: "wood"
}

const chair = Object.create(woodenFurniture)

chair.color = "white";

function checkProperty(prop, obj) {
    return obj.hasOwnProperty(prop)
}

console.log(checkProperty('color', chair));
console.log(checkProperty('color', woodenFurniture));