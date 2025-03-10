// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2);
};
console.log(returnFirstTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo'])); 

//------------------------------------------------------------------------------------------------------------

const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2);
};
console.log(returnLastTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo'])); 

//------------------------------------------------------------------------------------------------------------

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

console.log(selectingDrivers[0](['Antonia', 'Nuru', 'Amari', 'Mo'])); 
console.log(selectingDrivers[1](['Antonia', 'Nuru', 'Amari', 'Mo'])); 

//------------------------------------------------------------------------------------------------------------

const createFareMultiplier = function(multiplier) {
    return function(fare) {
        return fare * multiplier;
    };
};

const fareQuadrupler = createFareMultiplier(4);
console.log(fareQuadrupler(10)); 

//------------------------------------------------------------------------------------------------------------

const fareDoubler = createFareMultiplier(2);
console.log(fareDoubler(10)); 

//------------------------------------------------------------------------------------------------------------

const fareTripler = createFareMultiplier(3);
console.log(fareTripler(10)); 

//------------------------------------------------------------------------------------------------------------

const selectDifferentDrivers = function(drivers, driverSelector) {
    return driverSelector(drivers);
};

console.log(selectDifferentDrivers(['Antonia', 'Nuru', 'Amari', 'Mo'], returnFirstTwoDrivers)); 

console.log(selectDifferentDrivers(['Antonia', 'Nuru', 'Amari', 'Mo'], returnLastTwoDrivers));  
