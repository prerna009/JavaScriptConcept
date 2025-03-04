function flatToNestedArray(arr) {
    let newArr = null, obj = {};
    for (let i = 0; i < arr.length; i++) {
        obj[arr[i].id] = { ...arr[i] };
    }
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].parentId === null) {
            if (!newArr) newArr = obj[arr[i].id];
        }
    }
    for (let i = 0; i < arr.length; i++) {
        let item = obj[arr[i].id];
        if (item.parentId !== null) {
            let parent = obj[item.parentId];
            if (parent) {
                parent[item.name] = item;
            }
        }
        else if (item != newArr) {
            newArr[item.name] = item;
        }
    }
    return newArr;
}
const arr = [
    {
        "id": 1,
        "name": "Mobile",
        "parentId": null
    },
    {
        "id": 2,
        "name": "Iphone",
        "parentId": 1
    },
    {
        "id": 3,
        "name": "Laptop",
        "parentId": null
    },
    {
        "id": 4,
        "name": "Samsung",
        "parentId": 1
    },
    {
        "id": 5,
        "name": "Acer",
        "parentId": 3
    }
];
const nestedArray = flatToNestedArray(arr);
console.log(JSON.stringify(nestedArray, null, 2));