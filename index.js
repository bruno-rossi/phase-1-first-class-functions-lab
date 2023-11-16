// Code your solution in this file!

// index.js
//     returnFirstTwoDrivers()
//       1) should return a new array containing the first two drivers from the passed-in array
//     returnLastTwoDrivers()
//       2) should return an array of the last two drivers
//     selectingDrivers
//       3) has the `returnFirstTwoDrivers` function to as its first element
//       4) has the `returnLastTwoDrivers` function to as its last element
//       5) allows us to invoke either function from the array
//     createFareMultiplier()
//       6) returns a function
//       7) should multiply a given value using the created multiplier
//     fareDoubler()
//       8) is a function
//       9) doubles fares
//     fareTripler()
//       10) is a function
//       11) triples fares
//     selectDifferentDrivers(arrayOfDrivers, function)
//       12) returns the first two drivers when passed returnFirstTwoDrivers() as the second argument
//       13) returns the last two drivers when passed returnLastTwoDrivers() as the second argument


// returnFirstTwoDrivers() — Declare the variable returnFirstTwoDrivers with const and assign an anonymous function to it. The assigned function should take one argument, an array containing the names of Scuber's drivers, and return a new array containing the first two drivers in the array:

const returnFirstTwoDrivers = function(drivers) { 
    return drivers.slice(0, 2);
}

returnFirstTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo']);


// returnLastTwoDrivers() — Declare a variable with const that is assigned an anonymous function. The assigned function should take one argument, an array containing the names of Scuber's drivers, and return a new array containing the last two drivers in the array:

const returnLastTwoDrivers = (drivers) => { return drivers.slice(2)};

returnLastTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo']);

// selectingDrivers — This is an array containing two elements: the two functions that we previously defined (returnFirstTwoDrivers() and returnLastTwoDrivers()).

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

// createFareMultiplier() — This is a higher-order function that takes in one argument, an integer, and returns a function that will multiply a fare for a ride accordingly. For example, if createFareMultiplier() receives an argument of 4, it will return a function that takes in a fare as an argument and quadruples the fare.

const createFareMultiplier = function (multiplyValue) {
    return function(value) {
        return multiplyValue * value;
    };
};

// fareDoubler() — Declare a variable with const and assign a function returned by createFareMultiplier() to it. Invoke createFareMultiplier() in such a way that the new fareDoubler() function accepts a fare as its lone argument and doubles it.

const fareDoubler = createFareMultiplier(2);

// fareTripler() — Declare a variable with const and assign a function returned by createFareMultiplier() to it. Invoke createFareMultiplier() in such a way that the new fareTripler() function accepts a fare as its lone argument and triples it.

const fareTripler = createFareMultiplier(3);


// selectDifferentDrivers() — This function takes two arguments, an array of the names of Scuber's drivers and either the returnFirstTwoDrivers() or returnLastTwoDrivers() function. Based on these two arguments, selectDifferentDrivers() will return either the first two drivers or the last two drivers.

const selectDifferentDrivers = function (drivers, driversToReturn) {
    return driversToReturn(drivers);
};