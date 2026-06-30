const ArrayWrapper = function (nums) {
    this.nums = nums;
};

ArrayWrapper.prototype.valueOf = function () {
    return this.nums.reduce((a, b) => a + b, 0);
}

ArrayWrapper.prototype.toString = function () {
    return `[${this.nums.join(",")}]`;
};

const nums = [[1,2],[3,4]], operator = "String";
const [n1, n2] = [...nums];
const obj1 = new ArrayWrapper(n1);
const obj2 = new ArrayWrapper(n2);

if (operator === "Add") {
    console.log(obj1 + obj2); // 10
} else if (operator === "String") {
    console.log(String(obj1)); // "[1,2]"
    console.log(String(obj2)); // "[3,4]"
}