var isEmpty = function(obj) {
    return Object.keys(obj).length === 0;
};

const obj = {"x": 5, "y": 42};
const obj1 = {};
console.log(isEmpty(obj));
console.log(isEmpty(obj1));