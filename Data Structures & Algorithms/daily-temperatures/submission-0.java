class Solution {
    public int[] dailyTemperatures(int[] temperatures) {
        int[] hotterDays = new int[temperatures.length]; // java auto initializes int arrays to 0
        Deque<Integer> dayStack = new ArrayDeque<>();
        for (int i = 0; i < temperatures.length; i++) {
            int currTemp = temperatures[i];
            while (!dayStack.isEmpty() && currTemp > temperatures[dayStack.peek()]) {
                int prevDay = dayStack.pop();
                hotterDays[prevDay] = i - prevDay;
            }
            dayStack.push(i);
        }
        return hotterDays;
    }
}
