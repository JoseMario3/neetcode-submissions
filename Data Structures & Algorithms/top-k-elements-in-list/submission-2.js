class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const map = {};
        for (const n of nums) {
            map[n] = (map[n] || 0) + 1;
        }

        const list = Array.from({ length: nums.length + 1 }, () => []);
        for (const [num, freq] of Object.entries(map)) {
            list[freq].push(num);
        }

        return list.flat().slice(-k);
    }
}
