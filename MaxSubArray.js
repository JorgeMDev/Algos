//Given an integer array nums, 
//find the subarray which has the largest sum and return its sum.
nums = [-2,1,-3,4,-1,2,1,-5,4]
//Output: 6
/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxSubArray = function(nums) {
    let dp = [nums[0]]
    let max = nums[0]

    for (let i = 1; i < nums.length ; i++){
        const num = nums[i]
        dp[i] = Math.max(num, num + dp[i - 1])
        max = Math.max(max, dp[i])
    }

    return max
    
};
