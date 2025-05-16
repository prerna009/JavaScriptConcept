const obj = {
    name: 'prerna',
    age: 21,
    details: {
        gender: 'female',
        hobbies: ['Dancing', 'Drawing']
    }
};

const structuredObj = structuredClone(obj);
console.log('Cloning object: ', structuredObj);

structuredObj.details.hobbies.push('Reading', 'Listening Music'); //Added one or more values in the existing field
console.log('\nAfter adding new values in the hobbies: ', structuredObj);

structuredObj.details.Info = {
    skills: ['HTML', 'CSS', 'JavaScript', 'Angular'],
    Profession: 'Angular Developer'
}; //Added nested object inside details object

console.log('\nAfter adding new object:');
console.dir(structuredObj, {depth: null}); //used to print deep nested object array

structuredObj.age = 22; 
console.log('\nModified the existing property value: ', structuredObj);

console.log('\nOriginal object: ', obj); //doesnot modified because the object is deep copied
