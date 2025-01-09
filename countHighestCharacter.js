function countChar(str){
    debugger
    let temp=str.toLowerCase();
    let count=1,max=0,maxChar="";
    for(let i=0;i<temp.length;i++){
        if(temp[i]===temp[i+1]){
            count++;
        }
        else{
            count=1;
        }
        if(count>max){
            max=count;
            maxChar=temp[i];
        }
    }
    return maxChar;
}

const str="aabbbbbbaaaaasa";
console.log(countChar(str));