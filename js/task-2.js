function makeArray(firstArray, secondArray, maxLength) {
    const mergedArray = firstArray.concat(secondArray);
    const result = [];
    const length = maxLength > mergedArray.length ? mergedArray.length : maxLength;
    for (let i = 0; i < length; i++) {
        result.push(mergedArray[i]);
    }

    return result;
}

console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3)); // ["Mango", "Poly", "Ajax"]
console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4)); // ["Mango", "Poly", "Houston", "Ajax"]
console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3)); // ["Mango", "Ajax", "Chelsea"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2)); // ["Earth", "Jupiter"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4)); // ["Earth", "Jupiter", "Neptune", "Uranus"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0)); // []
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 10));