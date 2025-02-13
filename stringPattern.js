var wordPattern = function(pattern, s) {
    let words = [];
    let word = '';

    for(let i=0;i<s.length;i++){
        if(s[i]===' '){
            words.push(word);
            word = '';
        }
        else word += s[i];
    }
    words.push(word);

    if(pattern.length !== words.length) return false;

    let charOfWord = Object.create(null);
    let wordOfChar = Object.create(null);
    for(let i=0;i<pattern.length;i++){
        let ch = pattern[i];
        let w = words[i];
        
        if((charOfWord[ch] && charOfWord[ch]!==w) || (wordOfChar[w] && wordOfChar[w]!==ch)) return false;

        charOfWord[ch] = w;
        wordOfChar[w] = ch;
    }
    return true;
};

const pattern = "abba";
const s = "dog cat cat dog";
console.log(wordPattern(pattern,s));