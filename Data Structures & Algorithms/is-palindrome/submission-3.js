class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let l = 0, r = s.length - 1;
        let regEx = /^[a-z0-9]+$/i;
        while (l < r) {
            while (!regEx.test(s[l])) l++;
            while (!regEx.test(s[r])) r--;
            if (l >= r) break;
            if (s[l].toLowerCase() != s[r].toLowerCase()) return false;
            l++, r--;
        }
        return true;
    }
}
