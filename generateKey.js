// Реалізуйте функцію generateKey(length, characters), яка повертає рядок випадкових символів із набору characters.


function generateKey(lengthKey){
    const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
    let newKey = '';
    for (let i = 0; i < lengthKey; i++) {
        newKey += characters[Math.floor(Math.random() * characters.length)];
    }
    return newKey
}
