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
