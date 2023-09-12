// Напишите функцию, которая поверхностно сравнивает два объекта.


const isEqual = function(firstObject, secondObject){
    return JSON.stringify(firstObject) === JSON.stringify(secondObject)
};

const data = { a: 1, b: 1 };
const data2 = { a: 1, b: 1 };
const data3 = { a: 1, b: 2 };
console.log(isEqual(data, data2)); // true
console.log(isEqual(data, data3)); // false
