// Sliding Window 

var strStr = function(haystack, needle) {
    let hLen = haystack.length
    let nLen = needle.length
    if(nLen > hLen){return -1}
    for(let i = 0; i < hLen; i++){
        if(haystack.substring(i, i + nLen) == needle){
            return i
        }
    }
    return -1
};

//  KMP Algo
const computeLPS = (needle) => {
    let lps = Array(needle.length).fill(0);
    let j = 0;
    for(let i = 1; i < needle.length; i++){
        while(j > 0 && needle[i] !== needle[j]) j = lps[j-1];
    if(needle[i] === needle[j]) j++;
    lps[i] = j
    }
    return lps
}
let strStrKMP = (haystack, needle) => {
    if(needle.length === 0) return 0;
    let lps = computeLPS(needle);
    let i = 0, j = 0;
    
    while(i < haystack.length){
        if(haystack[i] === needle[j]){
            i++, j++;
            if(j === needle.length) return i - j;
        }
        else{
            if(j>0) j = lps[j-1]
            else i++;
        }
    }
    return -1
}