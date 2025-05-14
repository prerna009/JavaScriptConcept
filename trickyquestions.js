// 1 example
let a = {};
let b = { key: "b" };
let c = { key: "c" };

a[b] = 123;
a[c] = 456;

console.log(a[b]); // 456  .... due to object object string

// 2 example
let obj1 = { key: "value" };
let obj2 = obj1;
let obj3 = obj2;

obj1.key = "new value";
obj2 = { key: "another value" };

console.log(obj1.key, obj2.key, obj3.key); // new value another value new value

// 3 example
const obj = {
  a: "foo",
  b: function () {
    console.log(this.a);
  },
};

const cobj = obj.b;

obj.b(); // foo
cobj(); // undefined because it refernce of the function not object 

// 4 example
const x = { foo: 1 };
const y = { foo: 2 };

function addFoo(obj) {
  return obj.foo + 1;
}

console.log(addFoo(x)); //2
console.log(addFoo(y)); //3

// 5 example
let aobj = {
  x: 1,
  y: 2,
};
let bobj = aobj;
aobj.x = 5;
console.log(aobj); // {x:5,y:2}
console.log(bobj); // {x:5,y:2}

// 6 example
let e = [1, 2, 3];
let f = [1, 2, 3];
let g = f;

console.log(e == f); //false
console.log(e === f); //false
console.log(g == f); //true
console.log(g ==e); //false

// 7 example
var num = 0;
for (var i = 0; i < 5; i++) {
  setTimeout(() => {
    num++;
    console.log(num); // 1 2 3 4 5
  }, 1000);
}

// 8 example
let t1 = { x: 1 };
let t2 = { x: 2 };
let t3 = { x: 3 };
let t4 = { x: 4 };
let t5 = { x: 5 };
let arr = [t1, t2, t3, t4, t5];

arr.forEach((obj) => (obj.x = obj.x * 2));

console.log(t1.x, t2.x, t3.x, t4.x, t5.x); // 2 4 6 8 10

//9 example
let n = 0;

function test() {
  var n = 1;
  return n;
}

console.log(test()); //1
console.log(n); //0

//10 example
let oldoObj = { name: "John", age: 25 };
let newObj = { ...oldoObj, age: 30 };

console.log(oldoObj.age); // 25
console.log(newObj.age); // 30

//11 example
const add = (a = 1 , b = 2 ) => a + b;
console.log(add()); // 3
console.log(add(5)); // 7
console.log(add(undefined, 10)); //11 due to default a value it is 1+10=11
console.log(add(30,undefined)); //32 due to defualt b value
console.log(add(null,12)); //12 
console.log(add(23,null)); //23
console.log(add(null,null));//0

const str = (a, b) => a + b;
console.log(str(null, null)); // 0
console.log(str(null, b)); //null[object object]
console.log(str(a,null)); //[object object]null
console.log(str(a,b)); //[object][object]
console.log(str('a','b'));

//12 example
const arr2 = [1, 2, 3];
const [j, k, l] = arr2;

console.log(j); //1
console.log(k); //2
console.log(l); //3

//13 example
console.log(typeof null); // object
console.log(typeof undefined); //undefined
console.log(null === undefined); //false
console.log(null == undefined); //true