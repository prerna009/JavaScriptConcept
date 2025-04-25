String.prototype.mysplit = function (specialCharacter){
    let arr = [], word = '', index = 0;
    for(let i=0;i<this.length-1;i++){
        if(this[i] === specialCharacter){
            arr[index] = word;
            index++;
            word = '';
        } 
        else {
            word+=str[i];
        }
    }

    if(word.length > 0){
        arr[index] = word;
    }
    return arr;
}

let str = 'A eoiejd. jdhs ikskd jskka. m s jnsj jj';
console.log(str.mysplit('.'));