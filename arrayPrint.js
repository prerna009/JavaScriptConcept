const mp1 = new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve('promise 1')
    }, 2000);
})
const mp2 = new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve('promise 2');  
    }, 2000);
})
async function abc(){
    console.log("start");
    const res1 = await mp1;
    console.log(res1);
    const res2 = await mp2;
    console.log(res2);
    console.log("end");
    console.log(res1); 
}

abc();
console.log("saikumar");

//Output
// start
// saikumar
// promise 1
// promise 2
// end
// promise 1
