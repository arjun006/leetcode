/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let sArray = s.split(' ');
    let reversedArray = []
    for(let i = sArray.length-1; i >= 0; i--){
        if(sArray[i] != ''){
            reversedArray.push(sArray[i])
        }
    }
    return reversedArray.join(' ').trim(' ')
};