//Number methods
let pi = 3.14159;
console.log(pi.toFixed(2)); // "3.14"
console.log(pi.toFixed(0)); // "3"

let num = 123.452;
console.log(num.toPrecision(4));  // "123.46"
console.log(num.toPrecision(2));  // "1.2e+2"

let n = new Number(123);
console.log(n.valueOf()); // 123

console.log(Number.isInteger(10));      // true
console.log(Number.isInteger(10.1));    // false
console.log(Number.isInteger('10'));    // false

console.log(Number.isFinite(100));       // true
console.log(Number.isFinite(Infinity));  // false
console.log(Number.isFinite('100'));     // false

console.log(Number.isNaN(123));       // false
console.log(Number.isNaN('123'));     // false
console.log(Number.isNaN(0 / 0));     // true

console.log(parseInt('42'));        // 42
console.log(parseInt('42px'));      // 42
console.log(parseInt('101', 2));    // 5 (binary to decimal)

console.log(parseFloat('3.14'));       // 3.14
console.log(parseFloat('3.14abc'));    // 3.14
console.log(parseFloat('10.1',10));  // 10.1

console.log(Number('42'));       // 42
console.log(Number('42.5'));     // 42.5
console.log(Number(true));       // 1
console.log(Number(null));       // 0 or (false => 0)

let n2 =255;
console.log(n2.toString(16)); //ff

//String Methods 
let str = "JavaScript";
console.log(str.slice(0, 4));  // "Java"
console.log(str.slice(-6));    // "Script" (negative index from end)
console.log(str.substring(0, 4));  // "Java"
console.log(str.substring(-6));  //does not accept negative indices
console.log(str.startsWith('j')); //case -sensitive (false)
console.log(str.endsWith('t')); //true

let newStr = "I love JavaScript. JavaScript is powerful.";
console.log(newStr.replace("JavaScript", "coding"));  // "I love coding. JavaScript is powerful."
console.log(newStr.replaceAll("JavaScript", "coding"));   // "I love coding. coding is powerful."

let str1 = "Hello";
let str2 = "World";
console.log(str1.concat(" ", str2));  // "Hello World"

let str3 = "  Hello    World  ";
console.log(str3.trim());  // "Hello World"
console.log(str3.repeat(3));

let str4 = "Prerna Gupta";
console.log(str4.split(' '));

// Symbol methods
let sym1 = Symbol.for("id"); //global registry
let sym2 = Symbol.for("id");
console.log(sym1 === sym2);  // true

let s1= Symbol('id'); //unique resgistry or separate
let s2 = Symbol('id');
console.log(s1 === s2); //false

let sym = Symbol.for("id");
console.log(Symbol.keyFor(sym));  // "id"
console.log(sym.toString());  // "Symbol(id)"
console.log(sym.valueOf());  // Symbol(id)
console.log(sym.description);  // "id"