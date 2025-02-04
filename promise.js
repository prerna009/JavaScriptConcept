let myPromise = new Promise((resolve,reject)=>{
  let success = false;
  success ? resolve('Success!') : reject('Failure!');
});
myPromise.then(data=> console.log(data)).catch(err=> console.log(err));