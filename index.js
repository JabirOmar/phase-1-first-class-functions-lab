// Code your solution in this file!
const returnFirstTwoDrivers = (aNumber) =>{
     return aNumber.slice(0, 2) 
    };

const returnLastTwoDrivers = (num) => {return num.slice(2)} 

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(num){
    return totalFare => totalFare * num
}

const fareDoubler = createFareMultiplier(2)

function fareTripler(createFareMultiplier){
    return createFareMultiplier * 3
}

function selectDifferentDrivers(drivers, callBack){
    return callBack(drivers)
}