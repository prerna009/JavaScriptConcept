//In every 20 chracter the paragraph push in the array.

function breakString(str) {
    let word = '', count = 0, arr = [], index = 0;
    for (let i = 0; i < str.length; i++) {
        word += str[i];
        if (str[i] === ' ') {
            count++;
            if(count === 20){
                arr[index] = word;
                index++;
                word='';
                count = 0;
            }
        } 

        if(word.length > 0){
            arr[index] = word;
        }
    }
    return arr;
}
const para = 'A week ago a friend invited a couple of other couples over for dinner. Eventually, the food (but not the wine) was cleared off the table for what turned out to be some fierce Scrabbling. Heeding the strategy of going for the shorter, more valuable word over the longer cheaper word, our final play was “Bon,” which–as luck would have it!–happens to be a Japanese Buddhist festival, and not, as I had originally asserted while laying the tiles on the board, one half of a chocolate-covered cherry treat. Anyway, the strategy worked. My team only lost by 53 points instead of 58.';
console.log(breakString(para));