class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let map1 = new Map();
        let map2 = new Map();
        for (let i = 0; i < s.length; i++) {
            const count = map1.get(s[i]) + 1 || 1;
            map1.set(s[i], count);
        }
        for (let i = 0; i < t.length; i++) {
            const count = map2.get(t[i]) + 1 || 1;
            map2.set(t[i], count);
        }
        if (map1.size !== map2.size) return false;
        for (let [key, val] of map1) {
            let testVal = map2.get(key);
            if (testVal !== val || (testVal === undefined && !map2.has(key))) {
                return false;
            }
        }
        return true;
    }
}
