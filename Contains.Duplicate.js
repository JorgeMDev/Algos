//Given an integer array nums, return true if any value appears at least twice
// in the array, and return false if every element is distinct.
nums = [1,2,3,4]
//Output: true

/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var containsDuplicate = function(nums) {
    
    for (let i = 0 ; i < nums.length ; i++){
        for (let j = 0; j < nums.length; j++){
            if (nums[j] == nums[i]){
         
                if (i == j){
             
                    continue
                }
                else {
                    
                    return true
                }
            }

        }
    }

    return false
};

console.log(containsDuplicate(nums))