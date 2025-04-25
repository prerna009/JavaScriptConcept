Array.prototype.myjoin = function(separator){
    let flatArray = [], index = 0;
    function myJoinFunc(arr){
        for(let i=0;i<arr.length;i++){
            if(Array.isArray(arr[i])){
               myJoinFunc(arr[i]);
            } else {
                flatArray[index] = arr[i];
                index++;
            }
        }
    }
    myJoinFunc(this);
    let result = '';
    for (let i = 0; i < flatArray.length; i++) {
        result += flatArray[i];
        if (i !== flatArray.length - 1) {
            result += separator;
        }
    }
    return result;
}

const arr = [[[2,3],[9]],[1,2,3,[[5]]]];
console.log(arr.myjoin(' '));