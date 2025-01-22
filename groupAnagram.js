//Given an array of strings, group the anagrams together. You can return the answer in any order.
//Input: str = ["eat","tea","tan","ate","nat","bat"];

function IsAnagram(arr){
    let obj={};
    for(let word of arr){
        let freq=[];
        for(let char of word){
            freq[char.charCodeAt()]++;
        }
        obj[freq]=obj[freq] || [];
        obj[freq].push(word);
    }
    return Object.values(obj);
}

const str = ["eat", "tea", "tan", "ate","listen","slient", "nat", "bat"];
console.log(IsAnagram(str));