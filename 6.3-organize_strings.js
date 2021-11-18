function organizeString(string1, string2) {
    let towStrings = string1 + string2;
    let result = '';
    for (let i=0; i < towStrings.length; i++) {
        if (result.indexOf(towStrings[i]) < 0 ) {
            result += towStrings[i];
        }
    }
    return result;
}

console.log(organizeString("asd", "asd"));