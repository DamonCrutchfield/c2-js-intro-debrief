/* 

GenBuzz

Create variable myNumber
Check that the value of the myNumber is of type number
If myNumber is not a number, print 'This is not a number' to the console.
If value of myNumber is a multiple of 3 print 'Gen' to the console
If value of myNumber is a multiple of 5 print 'Buzz' to the console
If the value of myNumber is a multiple of both 3 and 5 (ex. 15) print GenBuzz to the console
If the value of myNumber is any other number print the value of myNumber to the console.

*/

const myNumber;

typeof myNumber !== 'number' ? console.log('This is not a number'):
myNumber % 3 === 0 && myNumber % 5 === 0 ? console.log('Genbuzz'):
myNumber % 3 === 0 ? console.log('Gen'):
myNumber % 5 === 0 ? console.log('Buzz'):
console.log(myNumber);

/*

E-Commerce Item list

Use a swtich statement to print the price of the each item in the store to the console.
Ex. If the value of the variable is 'shoes' then, the statement Shoes are $50 should be printed to the console.
Reference: Codecademy lesson 10

Items:

Shoes- $50
Jeans- $25
Hat- $12
Socks- $2
If the variable input is not an item in the store, then print 'Invalid Item' to the console.
Print a random integer (whole number) between 50 and 100 to the console

Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random

*/

const item;

switch (item) {
    case 'Shoes':
        console.log(`Shoes are $${Math.floor(Math.random()*101)}`);
        break;
    case 'Jeans':
        console.log(`Jeans are $${Math.floor(Math.random()*101)}`);
        break;
    case 'Hat':
        console.log(`Hat is $${Math.floor(Math.random()*101)}`);
        break;
    case Socks:
        console.log(`Socks are $${Math.floor(Math.random()*101)}`);
        break;
    default:
        console.log('Invalid Item');
}