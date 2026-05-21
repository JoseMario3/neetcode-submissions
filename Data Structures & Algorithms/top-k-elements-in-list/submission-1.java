/*
    Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.
    Example 1:
    Input: [1,1,1,2,2,3], k = 2
    Output: [1,2]
    
    Can k be larger than the number of unique elements in nums? No, k is always smaller than or equal to the number of unique elements in nums.
    can k be negative? No, k is always positive.
    can k be zero? No, k is always positive.
    can nums be empty? No, nums is always non-empty.
    can nums contain negative numbers? Yes, nums can contain negative numbers.
    
    Approach: Hashmap
    Iterate through the array and store the frequency of each element in a hashmap.
    Then iterate through the hashmap and store the elements in a list of lists where the index represents the frequency.
    Then iterate through the list of lists from the end and add the elements to the result list until the result list has k elements.
    Time Complexity: O(n)
    Space Complexity: O(n)

*/

class Solution {
    public int[] topKFrequent(int[] nums, int k) {
        Map<Integer, Integer> map = new HashMap<>();
        for (int i : nums) {
            map.put(i, map.getOrDefault(i, 0) + 1);
        }
        List<Integer>[] list = new List[nums.length + 1];
        for (int i : map.keySet()) {
            int freq = map.get(i);
            if (list[freq] == null) {
                list[freq] = new ArrayList<>();
            }
            list[freq].add(i);
        }
        int[] res = new int[k];
        int index = 0;
        for (int i = list.length - 1; i >= 0 && index < k; i--) {
            if (list[i] != null) {
                for (int j : list[i]) {
                    res[index++] = j;
                }
            }
        }
        return res;
    }
}
