//Example 1 - Promise.all()
const promise1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, "Promise 1");
});

const promise2 = 23;

const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 500, "Promise3");
});

Promise.all([promise1, promise2, promise3])
    .then((values) => console.log(values))
    .catch((err) => console.log(err));

//Example 2  -  Promise.all()
const pro1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("one"), 1000);
});

const pro2 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("two"), 2000);
});

const pro3 = new Promise((resolve, reject) => {
    setTimeout(() => reject("rejected"), 3000);
});

Promise.all([pro1, pro2, pro3])
    .then((values) => console.log(values))
    .catch((err) => console.log(err));

//Example of Promise.any()

const slowlyDown = new Promise((resolve, reject) => {
    setTimeout(() => reject("Done slowly"), 100);
});

const quicklyDown = new Promise((resolve, reject) => {
    setTimeout(() => reject("Done quickly"), 200);
});

const rejection = new Promise((resolve, reject) => {
    setTimeout(() => reject("Rejected"), 100);
});

Promise.any([slowlyDown, quicklyDown, rejection])
    .then((values) => console.log(values))
    .catch((err) => console.log(err));

//Example - Promise.prototype.finally()

const add = (a, b) => new Promise((resolve, reject) => {
    if (typeof a == "number" && typeof b == "number") {
        resolve(a + b);
    } else {
        reject("Not a number");
    }
});
add(4, 5)
    .then((response) => console.log(response))
    .catch((err) => console.log(err))
    .finally(() => console.log("Numbers are added"));

//Example - Promise.race()
const p1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("race 1"), 5000)
});

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("race 2"), 4000);
});

const p3 = new Promise((resolve, reject) => {
    setTimeout(() => reject("rejected race 3"), 3000);
});

const p4 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("race 4"), 1000);
});

Promise.race([p1,p2, p3, p4])
    .then((value) => console.log(value))
    .catch((err) => console.log(err));

