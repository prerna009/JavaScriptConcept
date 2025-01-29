//First approach
function reverseWords(str) {
    let stack = [];
    let word = "";
    for (let i = 0; i < str.length; i++) {
        if (str[i] != ' ') word += str[i];
        else if (word.length > 0) {
            stack.push(word);
            word = "";
        }
    }
    if(word.length>0){
        stack.push(word);
    }
    return stack.reverse().join(' ');
}

//second approach
var reverseWords = function(str) {
    let string='',final='';
     for(let i=str.length-1;i>=0;i--){
        if(str[i]===' '){
            final=final+string
            temp=' ';
            if(i==0 || str[i-1]==' '){
                temp='';
            }
            final = final+(final?temp:'')
            string='';     
        }else{
            string = str[i] + string;        
        }
    }
    return final + string;
};
let str = " hello world ";
console.log(reverseWords(str));