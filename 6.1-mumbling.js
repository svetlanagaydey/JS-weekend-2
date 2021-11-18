function mumbling(string) {
   // let resultStr = '';
    let resaultArray = [];

    for (let i=0; i < string.length; i++) {
        
        let resultStr = string[i].toUpperCase();
    
        for (let j = 1; j <= i; j++) {
            resultStr += string[i].toLowerCase();
        }
        resaultArray.push(resultStr);
       console.log(resultStr);
    }
    console.log(resaultArray);
    return resaultArray.join('-');
}

console.log(mumbling('abcd'));