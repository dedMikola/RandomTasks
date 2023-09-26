let arr1 = [1, 2, 3]
let arr2 = [3, 4, 5, 6]
let arr3 = [...arr1, ...arr2]
console.log([...new Set(arr3)])
