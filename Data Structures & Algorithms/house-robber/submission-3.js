class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     
     Return the maximum amount of money you can rob without alerting the police.
     adjacent sum
    
    dp problem because each house broken into / not broken into will determine the
    remaining options for houses to rob. There is potentially a ton of repeated
    work unless we keep track of the best choice dynamically.

    nums = [1,1,3,3]
    dp   = [1,1,4,4]

    nums = [2,9,8,3,6]
    dp   = [2,9,10,12,16]

    dp[i] = the maximum amount of money using the first i houses
    dp[i] = max(dp[i-1], dp[i-2] + nums[i]);
    return dp[nums.length-1]

    base case: dp[0] = nums[0], dp[1] = nums[1]

    nums=[5,1,2,10,6,2,7,9,3,1]
    dp  =[5,1,7,11,13,13,20,21,]
     
     */
    rob(nums) {
        // const n = nums.length;
        // if (n === 1) return nums[0];
        // if (n === 2) return Math.max(nums[0], nums[1]);
        // const dp = new Array(n);
        // dp[0] = nums[0], dp[1] = Math.max(nums[0], nums[1]);
        // for (let i = 2; i <= n; i++) {
        //     dp[i] = Math.max(dp[i-1], dp[i-2] + nums[i]);
        // }
        // return dp[n-1];
        let rob1 = 0, rob2 = 0;
        for (const num of nums) {
            const temp = Math.max(num + rob1, rob2);
            rob1 = rob2;
            rob2 = temp;
        }
        return rob2;
    }
}
