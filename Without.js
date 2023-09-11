// Напишите функцию, которая возвращает новый объект без указанных значений.


const without = function(object, ...args){
    for (const property in object) {
        args.includes(property) ? delete object[property] : null
    }
    return object
};
