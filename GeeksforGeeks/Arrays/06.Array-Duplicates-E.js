
class Solution {
    findDuplicates(arr) {
        let seen = new Set();
        let duplicates = [];

        for (let i = 0; i < arr.length; i++) {
            let num = arr[i];
            
            if (seen.has(num)) {
                duplicates.push(num);
            } else {
                seen.add(num);
            }
        }

        return duplicates;
    }
}