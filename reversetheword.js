function reverseWords(str) {
    debugger
    let stack = [];
    let word = "";
    for (let i = 0; i < str.length; i++) {
        if (str[i] != ' ') word += str[i];
        else if (word.length > 0) {
            stack.push(word);
            word = "";
        }
    }
    return stack.reverse().join(' ');
}

let str = "  hello for geeks ";
console.log(reverseWords(str));