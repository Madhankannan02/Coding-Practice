/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    if (strs.length === 0) return [];

    // Map in JS is similar to HashMap in Java
    const ansMap = new Map();
    //console.log(ansMap);

    for (let s of strs) {
        // Create a frequency array of 26 zeros
        let count = new Array(26).fill(0);
        //console.log(count)
        //console.log(s);

        // For each character in the word, increment its spot
        for (let c of s) {
            //onsole.log(c);
            count[c.charCodeAt(0) - 97]++;
            //console.log(count);
        }
        //console.log(count);

        // Java used StringBuilder to make a key like "#1#0#1..."
        // In JS, we can just join the array into a string to use as a key
        let key = count.join('#');
        //console.log(key);
        
        // If the key doesn't exist, create an empty array for it
        if (!ansMap.has(key)) {
            ansMap.set(key, []);
            //console.log(ansMap.set(key, []))
        }
        
        // Push the original word into the list for that "fingerprint"
        ansMap.get(key).push(s);
        //console.log(ansMap.get(key).push(s));
    }

    // Return just the values (the lists of grouped words)
    return Array.from(ansMap.values());
};