function convertIntToRoman(num) {
    const numberLiterals = [
        { value: 1000, Symbol: 'M' },
        { value: 900, Symbol: 'CM' },
        { value: 500, Symbol: 'D' },
        { value: 400, Symbol: 'CD' },
        { value: 100, Symbol: 'C' },
        { value: 90, Symbol: 'XC' },
        { value: 50, Symbol: 'L' },
        { value: 40, Symbol: 'XL' },
        { value: 10, Symbol: 'X' },
        { value: 9, Symbol: 'IX' },
        { value: 5, Symbol: 'V' },
        { value: 4, Symbol: 'IV' },
        { value: 1, Symbol: 'I' },
    ];
    let result = '';
    for (const { value, Symbol } of numberLiterals) {
        while (num >= value) {
            result += Symbol;
            num -= value;
        }
    }
    return result;
}
const num = 89;
console.log(convertIntToRoman(num));