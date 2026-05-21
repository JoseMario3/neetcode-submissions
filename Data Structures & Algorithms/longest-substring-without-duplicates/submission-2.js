class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
     let res = 0;
     for (let i = 0; i < s.length; i++) {
        let j = i, count = 0, set = new Set();
        while (j < s.length && !set.has(s[j])) {
            set.add(s[j]);
            count++, j++;
            if (count > res) res = count;
        }
     }   
     return res;
    }
}
