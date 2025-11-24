function getEngravingPrice(message, pricePerWort) {
    const words = message.split(' ');
    const totalPrice = words.length * pricePerWort;
    return totalPrice;  
}
console.log(getEngravingPrice('Proin sociis natoque et magnis parturient montes mus', 10)); // 80
console.log(getEngravingPrice('Proin sociis natoque et magnis parturient montes mus', 20)); // 160

function createArrayofNumbers(min, max) {
    const numbers = [];
    for (let i = min; i <= max; i += 1) {
        numbers.push(i);
    }       
    return numbers;
}
console.log(createArrayofNumbers(1, 3)); // [1, 2, 3]
console.log(createArrayofNumbers(14, 17)); // [14, 15, 16, 17]

function checkStorage(storage, item) {
    const lowerCaseItem = item.toLowerCase();
    if (storage.includes(lowerCaseItem)) {
        return '${item} is awalable to order!';
    } else {
        return 'Sorry, ${item} is out of stock.';   
    }
}
console.log(checkStorage(['apple', 'banana', 'orange'], 'banana')); // 'banana is awalable to order!'
console.log(checkStorage(['apple', 'banana', 'orange'], 'grape')); // 'Sorry, grape is out of stock.'
