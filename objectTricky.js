let a = [
    {
        name: 'Prerna',
        department: 'IT'
    },
    {
        name: 'Nikki',
        department: 'Sales'
    },
    {
        name: 'Kiran',
        department: 'Finance'
    }
];

let output1 = a.map(({name, department}) => ({[department]: { name }}));
let output2 = a.map(item => ({ [item.department]: { name: item.name } }));
console.log(output1);
console.log(output2);
