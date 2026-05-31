class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        if (nums.length === 1) return nums[0];

        function robHouses(houses, start, end) {
            const len = end - start + 1;
            if (len === 1) return houses[start];
            let dp = new Array(len).fill(0);
            dp[0] = houses[start];
            dp[1] = Math.max(dp[0], houses[start + 1])
            
            for (let i = 2; i < len; i++) {
                dp[i] = Math.max(dp[i-1], dp[i-2] + houses[start + i]) 
            }
            return dp[len - 1]
        }

        const option1 = robHouses(nums, 0, nums.length - 2);
        const option2 = robHouses(nums, 1, nums.length - 1);
        return Math.max(option1, option2);
    }
}
