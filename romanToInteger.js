function convertRomanToInt(roman) {
    let result = 0;
    let values = {I:1, V:5, X :10, L:50, C:100, D:500, M : 1000};
    for (let i = 0; i < roman.length; i++) {
        let current = values[roman[i]];
        let next = values[roman[i+1]];

        if(next>current){
            result += next - current;
            i++;
        } else {
            result += current;
        }
    }
    return result;
}
const roman = 'IX';
console.log(convertRomanToInt(roman));