function isogram(string) {
    let arrayLetters = string.split('');
    return !arrayLetters.some(function(v, i,a) {
        return a.lastIndexOf(v) != i;
    });
}

console.log(isogram('abceee'));