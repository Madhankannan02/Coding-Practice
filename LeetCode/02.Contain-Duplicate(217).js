/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    //New Set is initialized
    const dupArr = new Set();

    for(let i=0; i < nums.length; i++){

        //checks for Duplicate Array if it has the number already 
        if(dupArr.has(nums[i])){
            //If yes return true
            return true;
        } else {
            //else Add the number to the set
            dupArr.add(nums[i]);
        }
    }  
    //If there is no duplicate then return false.
    return false;
};