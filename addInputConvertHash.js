function convertInputToHash(input) {
    const data = input.toString();
    const convertHash = data.length - 4;
    let temp = '';
    for(let i = 0;i < data.length;i++) {
        if (i < convertHash) {
            temp+= '#';
        } else {
            temp+= data[i];
        }
    }
    return temp;
}

const number = 1;
console.log(convertInputToHash(number));