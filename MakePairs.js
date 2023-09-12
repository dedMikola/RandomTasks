// Напишите функцию, которая возвращает вложенный массив вида [[key, value], [key, value]].



const makePairs = function(object){
    return Object.entries(object)
};

const data = { a: 1, b: 2 };
console.log(makePairs(data)); // [['a', 1], ['b', 2]]
