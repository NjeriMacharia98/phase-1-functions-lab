// Code your solution in this file!
function distanceFromHqInBlocks (location){
    return location <42 ? 42 -location : location -42;
}

function distanceFromHqInFeet (location) {
    return distanceFromHqInBlocks (location) * 264
}

function distanceTravelledInFeet (start,destination) {
    return destination >start
    ? (destination-start)* 264
    : (start-destination) * 264;
}
function calculatesFarePrice (start, destination) {
    const distanceinfeet = distanceTravelledInFeet (start, destination);
    if (distanceinfeet <= 400) {
        return 0;
    } else if (distanceinfeet<2000) {
        return (distanceinfeet-400) *0.02;
    } else if (distanceinfeet>2000 && distanceinfeet<2500) {
        return 25;
    } else if (distanceinfeet>2500){
        return  "cannot travel that far"
    }
}