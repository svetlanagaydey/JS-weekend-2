let stringArray = ['this', 'is', 'santa', 'klaus'];
let numberArray = [1, 2, 3, 4];

function multiply2(params) {
    return  params.map( el => { return el * 2} );
}

function multiply3(params) {
    const temp = []
    params.forEach(el => {temp.push(el*3)});
    return temp;
}

function filterLength(params) {
    return params.filter(el => el.length > 2);
}

function filterOwn(params) {
    return params.filter(el => el % 2 == 0);
}

console.log(multiply2(numberArray));
console.log(multiply3(numberArray));
console.log(filterLength(stringArray));
console.log(filterOwn(numberArray));

console.log('----------------');

function multiplyFor(array) {
    let result = [];
    for (let i=0; i < array.length; i++) {
        result.push(array[i] * 10);
    }
    return result;
}

console.log(multiplyFor(numberArray));
