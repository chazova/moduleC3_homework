const woodenFurniture = {
    material: "wood"
}

const chair = Object.create(woodenFurniture)

chair.color = "white";

// console.log(`Chair material - ${chair.material}, chair color - ${chair.color}`)
//
// for (let key in chair) {
//     if (chair.hasOwnProperty(key)) {
//         console.log(key);
//     }
// }

function printOwnProperty(obj) {
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            console.log(key + " - " + obj[key])
        }
    }
}

printOwnProperty(chair)