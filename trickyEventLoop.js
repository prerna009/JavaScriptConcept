async function async1() {
  console.log("async1 start");
  await async2();
  console.log("async1 end");
} 
async function async2() {
  console.log("async2");
}
// async2() returns a resolved promise (because an async function without await returns a promise resolved with its return value).
// await pauses async1 at this point and schedules the rest (console.log("async1 end")) as a microtask.
 
console.log("script start");
setTimeout(function () {
  console.log("setTimeout"); //This schedules a macrotask to run after the current call stack is empty and all microtasks are done. No output yet.
}, 0);
 
async1();
new Promise(function (resolve) {
  console.log("promise1");
  resolve();
}).then(function () {
  console.log("promise2");
});
console.log("script end");

// Final output order:
// script start — synchronous
// async1 start — synchronous
// async2 — synchronous inside await call
// promise1 — synchronous
// script end — synchronous
// async1 end — microtask (from await)
// promise2 — microtask (from .then)
// setTimeout — macrotask