function getExtremeelements(array) {
    const firstElement = array[0];
    const lastElementIndex = array.length - 1;
    const lastElement = array[lastElementIndex];
    return [firstElement, lastElement];
}
console.log(getExtremeelements(["cat", "dog", "dug", "hors"]));