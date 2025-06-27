function demo(str) {
    let temp = '', word = [],index=0;
    for(let char of str) {
        if(char!==' ') {
            temp+=char;
        } else {
            word[index] = temp;
            index++;
            temp = '';
        }
    }

    if(temp.length > 0) {
        word[index] = temp;
        index++;
    }

    let result = '';
    for(let i=word.length-1;i>=0;i--) {
        result += word[i] + ' ';
    }
    return result;
}

const str = 'Hello World';
console.log(demo(str));