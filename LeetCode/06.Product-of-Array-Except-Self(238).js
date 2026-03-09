/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let leftProduct = new Array(nums.length).fill(1);
//console.log(leftProduct);
    let rightProduct = new Array(nums.length).fill(1);
    
    leftProduct[0] = 1;
    rightProduct[rightProduct.length - 1] = 1;
    //console.log(rightProduct)
    
    for(let i=1; i < leftProduct.length; i++){
        leftProduct[i] = leftProduct[i-1] * nums[i-1];
    }
    
    for(let i = nums.length - 2; i >= 0; i--){
        rightProduct[i] = rightProduct[i+1] * nums[i+1];
    }
    
    for(let i=0; i<nums.length; i++){
        if (i===0) nums[i] = rightProduct[i];
        else if (i===nums.length - 1) nums[i] = leftProduct[i];
        else nums[i] = leftProduct[i] * rightProduct[i];
    }
    return nums;
};