//Perform rest parameters

function sumAll(...args){
    let sum=0;
    for(let arg of args) sum+=arg;
    return sum;
}
console.log(sumAll(1,5,3));
console.log(sumAll(23,21,0,89));


function showName(firstName, lastName, ...titles){
    //the rest go into titles parameter
    console.log(firstName + ' ' + lastName);
    console.log(titles[0]);
    console.log(titles[1]);
    console.log(titles.length);
}
showName('Prerna','Gupta','Sumeet','Anil');