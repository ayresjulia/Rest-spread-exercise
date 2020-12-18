//Given this function:
function filterOutOdds() {
  var nums = Array.prototype.slice.call(arguments);
  return nums.filter(function(num) {
    return num % 2 === 0
  });
}

//Refactor a function to use the rest operator & an arrow function:
/* Write an ES2015 Version */
const filterOutOdds = (...args) => args.filter(num => num % 2 === 0 );

//findMin
const findMin = (...args) => Math.min(...args);

//mergeObjects
const mergeObjects = (firstObj, secondObj) => ({...firstObj,...secondObj});

//doubleAndReturnArgs
const doubleAndReturnArgs = (arr,...args) => [...arr, ...args.map(num => num *2)];

//Slice and Dice!
/** remove a random element in the items array
and return a new array without that item. */
const removeRandom = (items) => {
    let randomIndex = Math.floor(Math.random() * (items[items.length-1] - items[0]) + items[0]);
    return [...items.slice(0, randomIndex), ...items.slice(randomIndex + 1)];
};

/** Return a new array with every item in array1 and array2. */
const extend = (array1, array2) => {
    return [...array1, ...array2];
};

/** Return a new object with all the keys and values
from obj and a new key/value pair */

const addKeyVal = (obj, key, val) => {
    return {...obj, [key] : val};
};

/** Return a new object with a key removed. */
const removeKey = (obj, key) => {
    let newObj = {...obj};
    delete newObj[key];
    return newObj;
};

/** Combine two objects and return a new object. */
const combine = (obj1, obj2) => {
    return {...obj1, ...obj2};
};

/** Return a new object with a modified key and value. */
function update(obj, key, val) {
    return {...obj, [key] : val};
}
