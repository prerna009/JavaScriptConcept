let pattern="",num=5,input=23,a=1;
while(a<=input){
    let i=1;
    while(i<=num && a<=input){
        pattern+=a+" ";
        a++;
        i++;
    }
    let j=1;
    while(j<=num && a<=input){
        pattern+="* ";
        a++;
        j++;
    }
    pattern+="\n";
}
console.log(pattern);