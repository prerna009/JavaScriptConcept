//First approach to assume linkedlist in array
const list1 = [23, 4, 2, 3, 2];
const list2 = [2, 6, 7, 1, 3];
let commonElements = [];
for (let i = 0; i < list1.length; i++) {
    for (let j = 0; j < list2.length; j++) {
        if (list1[i] === list2[j] && !commonElements.includes(list1[i])) {
            commonElements.push(list1[i]);
        }
    }
}
console.log(commonElements);

//Time complexity is O(n*m) for first approach

//Another approach to perform the query in linked list
function findCommonElements(ll1, ll2) {
    const commonElement = [];
    let current1 = ll1;
    while (current1 !== null) {
        let current2 = ll2;
        while (current2 !== null) {
            if (current1.value === current2.value && !commonElement.includes(current1.value)) {
                commonElement.push(current1.value);
                break;
            }
            current2 = current2.next;
        }
        current1 = current1.next;
    }
    return commonElement;
}
const ll1 = { value: 23, next: { value: 4, next: { value: 2, next: { value: 3, next: { value: 2, next: null } } } } };
const ll2 = { value: 2, next: { value: 6, next: { value: 7, next: { value: 1, next: { value: 3, next: null } } } } };
const commonElement = findCommonElements(ll1, ll2);
console.log(commonElement);  

//Time complexity is O(n*m) for second approach