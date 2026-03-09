/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length !== t.length){
        return false;
    }

    let chars = new Array(26).fill(0);
    console.log(chars);

    for(let i=0; i<s.length; i++){
        chars[s.charCodeAt(i) - 97]++;
        chars[t.charCodeAt(i) - 97]--;
    }

    for(let j=0; j<chars.length; j++){
        if(chars[j] !==0){
            return false;
        }
    }

    return true;
}