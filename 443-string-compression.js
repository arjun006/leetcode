/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
    let write = 0;
    let i = 0;

    while(i < chars.length) {
        let char = chars[i];
        let count = 0;

        while(i < chars.length && chars[i] === char){
            count++;
            i++;
        }
        chars[write] = char;
        write++
        if(count > 1){
            let countStr = count.toString();
            for(let c of countStr){
                chars[write] = c;
                write++
            }
        }   
    }
    return write
};

