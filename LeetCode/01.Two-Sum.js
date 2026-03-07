/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    //Creating a hashtable to store the key value pair
    const values = new Map();
    
    let indicesArray = [];

    for(let i=0; i < nums.length; i++){
        //Calculate the complement of the target and number in the array
        let complement = target - nums[i];

        //Check if the complement is present in the hashmap or not
        if(values.has(complement)){
            //If value is present then push the index of the complement and the current index
            indicesArray.push(values.get(complement), i);
        }
        //If the complement value is not in the hashmap then it is pushed inside the hashmap
        values.set(nums[i], i);
    }

    return indicesArray;
};