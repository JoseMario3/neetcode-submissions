class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let res = [], covered = [];
        if (strs == null) return res;
        for (let i = 0; i < strs.length; i++) {
            let curr = [], map1 = {};

            if (covered.includes(i)) continue;

            let word = strs[i];
            curr.push(strs[i]);
            for (let k = 0; k < word.length; k++) {
                map1[word[k]] = map1[word[k]] + 1 || 1;
            }

            for (let j = i + 1; j < strs.length; j++) {
                let map2 = {};
                for (let l = 0; l < strs[j].length; l++) {
                    map2[strs[j][l]] = map2[strs[j][l]] + 1 || 1;
                }
                let same = true;

                if (strs[j].length !== word.length) {
                    same = false;
                } else {
                    for (const [key, value] of Object.entries(map1)) {
                        if (value != map2[key]) {
                            same = false;
                            break;
                        }
                    }
                }
                if (same) covered.push(j), curr.push(strs[j]);
            }
            res.push(curr);
        }
        return res
    }
}
