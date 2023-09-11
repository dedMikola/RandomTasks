// 1.Дан масив [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47]
// Знайти суму та кількість позитивних елементів.
const arr = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];
console.log(`Количество позитивных элементов: ${arr.filter(item => item > 0).length}`);
console.log(`Сумма позитивных элементов: ${arr.reduce((accum, item) => item > 0 ? accum += item : null, 0)}\n`);

// 2.Знайти мінімальний елемент масиву та його порядковий номер.
console.log(`Мінімальний елемент масиву: ${Math.min(...arr)}`);
console.log(`Порядковий номер: ${arr.indexOf(Math.min(...arr))}\n`);

// 3.Знайти максимальний елемент масиву та його порядковий номер.
console.log(`Максимальний елемент масиву: ${Math.max(...arr)}`);
console.log(`Порядковий номер: ${arr.indexOf(Math.max(...arr))}\n`);

// 4.Визначити кількість негативних елементів.
console.log(`Количество негативних элементов: ${arr.filter(item => item < 0).length}\n`);

// 5.Знайти кількість непарних позитивних елементів.
console.log(`Количество непарних элементов: ${arr.filter(item => item % 2 !== 0).length}\n`);

// 6.Знайти кількість парних позитивних елементів.
console.log(`Количество парних элементов: ${arr.filter(item => item % 2 === 0).length}\n`);

// 7.Знайти суму парних позитивних елементів.
console.log(`Сума парних позитивних елементів: ${arr.filter(item => item > 0 && item % 2 === 0)
    .reduce((accum, item) => accum += item)}\n`);

// 8.Знайти суму непарних позитивних елементів.
console.log(`Сума непарних позитивних елементів: ${arr.filter(item => item > 0 && item % 2 !== 0)
    .reduce((accum, item) => accum += item)}\n`);

// 9.Знайти добуток позитивних елементів.
console.log(`Добуток позитивних елементів: ${arr.filter(item => item > 0)
    .reduce((accum, item) => accum *= item)}\n`);

// 10.Знайти найбільший серед елементів масиву, остальні обнулити.
console.log(`Найбільший серед елементів масиву, остальні обнулити: ${arr.map((item, index) => {
    return item !== Math.max(...arr) ? arr[index] = 0 : arr[index] = item })}`)
