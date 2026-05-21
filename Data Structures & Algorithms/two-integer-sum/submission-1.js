class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     * 
     * use a hashmap to store index, value
     * [3, 4, 5, 6]
     * { (0, 3) (1, 4) (2, 5) (3, 6)}
     * COMPLEMENT
     * if target - current is key inside hashmap, return that
     * hashmap
     * iterate through array
     *    if hashmap isn't empty
     *        check if target - current exists inside hashmap
     *        if so, return indices
     *    add current num + idx to hashmap
     */
    twoSum(nums, target) {
        const map = new Map();
        for (let i = 0; i < nums.length; i++) {
            const complement = target - nums[i];
            if (map.has(complement)) return [map.get(complement), i];
            map.set(nums[i], i);
        }
        return [0, 0];
    }
}
