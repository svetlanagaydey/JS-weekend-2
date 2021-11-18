function counting_duplicates(string) {
    let objectFromString = {};
   
    for (let i = 0; i < string.length; i++) {
        if (objectFromString[string[i]] !== undefined) {
            objectFromString[string[i]] = objectFromString[string[i]] + 1;
        } else {
            objectFromString[string[i]] = 1;
        }
    }
    let arrayDuplbcatesCount = Object.values(objectFromString);
    let countDuplicatesGlobal = arrayDuplbcatesCount.filter(el => el > 1).length;
    return countDuplicatesGlobal;
}
console.log(counting_duplicates('asdfaaaa'));