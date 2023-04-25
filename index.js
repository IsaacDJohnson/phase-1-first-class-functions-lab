// Code your solution in this file!
const returnFirstTwoDrivers = function (drivers){
    const n = 2
    let newArray = drivers.slice(0, n)
        return newArray
}

function returnLastTwoDrivers(drivers){
    let newArray = drivers.slice(-2)
        return newArray
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(integer){
    return function (){
        return 5 * integer
    }
}


const fareDoubled = fareDoubler(createFareMultiplier)
const fareTripled = fareTripler(createFareMultiplier)
function fareDoubler(a){
    let result = a * 2
    return result
}

function fareTripler(a){
    let result = a * 3
    return result
}

function selectDifferentDrivers(drivers, cb){
    let result = cb(drivers)
    return result
}
