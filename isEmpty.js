// Напишите функцию, которая делает поверхностную проверку объекта на пустоту.



const isEmpty = function(object){
    let arr = Object.values(object)
    return arr.filter(item => item !== undefined).length !== 0;
};
