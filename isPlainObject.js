// Напишите функцию, которая проверяет, является ли элемент именно простым объектом, а не массивом, null и т.п.



const isPlainObject = function(element){
    return Object.keys(element).length > 0
};
