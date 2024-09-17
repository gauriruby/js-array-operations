
let numbers = [5, 3, 8, 1, 2];

function addNumber(array, number) {
    array.push(number);
    console.log(`After adding ${number}:`, array);
}

function removeNumber(array, number) {
    const index = array.indexOf(number);
    if (index > -1) {
        array.splice(index, 1);
    }
    console.log(`After removing ${number}:`, array);
}

function sortNumbers(array) {
    let sortedArray = array.slice().sort((a, b) => a - b);
    console.log("Sorted array:", sortedArray);
    return sortedArray;
}

function calculateSum(array) {
    let sum = array.reduce((acc, num) => acc + num, 0);
    console.log("Sum of numbers:", sum);
    return sum;
}

function calculateAverage(array) {
    let sum = calculateSum(array);
    let average = sum / array.length;
    console.log("Average of numbers:", average);
    return average;
}

console.log("Initial array:", numbers);

// Add a number to the array
addNumber(numbers, 4);

// Remove a number from the array
removeNumber(numbers, 3);

// Sort the array
sortNumbers(numbers);

// Calculate the sum of the numbers in the array
calculateSum(numbers);

// Calculate the average of the numbers in the array
calculateAverage(numbers);
