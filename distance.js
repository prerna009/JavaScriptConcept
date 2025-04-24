function distance(x1, y1, x2, y2) {
    return ((x2 - x1) ** 2 + (y2 - y1) ** 2) ** (1 / 2);
}

console.log(distance(0,0,3,4));
console.log(distance(1,2,4,6));