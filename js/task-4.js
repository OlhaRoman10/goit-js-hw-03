const planets = ['Earth', 'Mars', 'Venus'];

console.log(planets[0]); // 'Earth'
console.log(planets[1]); // 'Mars'
console.log(planets[2]); // 'Venus'

function getExtremeelements(array) {
    const firstElement = array[0];
    const lastElementIndex = array.length - 1;
    const lastElement = array[lastElementIndex];
    return [firstElement, lastElement];
}
console.log(getExtremeelements(["cat", "dog", "dug", "hors"]));
