//Example 1

for(let i=0;i<5;i++){
    setTimeout(()=>{
        console.log(i);
    },7000); //7s delay
}

//Example 2
let j=0;
for(j=0;j<5;j++){
    setTimeout(()=>{
        console.log(j);
    },3000); //3s delay
}

//Example 3
for(var k=0;k<5;k++){
    setTimeout(()=>console.log(k),300);//3ms delay
}

//Example 4
var k;
for(k=0;k<5;k++){
    setTimeout(()=>console.log(k),100); //1ms delay
}

//Example 5
function x(){
    let i=1;
    setTimeout(function (){
        console.log(i); 
    },1000); //it run after waiting 1s
    console.log("JavaScript Language"); //it run first
}
x();

//Example 6
function y(){
    for(var i=1;i<=5;i++){
        setTimeout(function(){
            console.log(i);
        },i*1000);
    }
    console.log("JavaScript");
}
y();

//Example 7
function z(){
    for(var i=1;i<=5;i++){
        function close(i){
            setTimeout(function(){
                console.log(i);
            },i*1000);
        }
        close(i);
    }
    console.log("Namaste");
}
z();