/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function(s, k) {
    let vowels = new Set(['a','e','i','o','u'])
    // while loop i < length s
    // set maxVowel = -1
    // store index of prevVowel
    // check first three letters, 
    // no vowel iterate i
    let maxVowels = -1
    let currentMax = 0
    for(let i = 0; i < s.length; i++){
        for(let j = 0; j < k; j++){
            if(vowels.has(s[j])){
                currentMax++
            }
        }
        maxVowels = Math.max(currentMax, maxVowels);
        currentMax = 0
    }
    return maxVowels
};