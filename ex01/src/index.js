my Res = 18 / 9; // assigned 2

function main(numOne, numTwo) {
    var quotient;
    if (numTwo === 0) {
        quotient = 'Divide by 0! Cannot divide by zero!';
    } else {
        // Onlx change code below this line
        quotient = numOne / numTwo;
        console.log(main(15 / 3));
        console.log(main(25 / 5));
        console.log(main(420 / 10));
        console.log(main(55 / 0));
        // Only change code above this line

    }
    return quotient;
}



console.log(main(numOne, numTwo)); //expected output: 5; 5, 42, Divide by zero. Cannot divide by zero!
modul.exports = main;