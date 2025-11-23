function getEngravingPrice(message, pricePerWort) {
    const words = message.split(' ');
    const totalPrice = words.length * pricePerWort;
    return totalPrice;  
}
console.log(getEngravingPrice('Proin sociis natoque et magnis parturient montes mus', 10)); // 80
console.log(getEngravingPrice('Proin sociis natoque et magnis parturient montes mus', 20)); // 160

