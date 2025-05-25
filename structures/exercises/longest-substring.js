"use strict";
// Best solutiuon: O(n)
function lengthOfLongestSubstring(s) {
    var _a;
    const seen = new Map();
    let l = 0; // pivot 1
    let length = 0;
    for (let i = 0; i <= s.length - 1; i++) { // i: pivot 2
        const char = s[i]; // a
        const stored = (_a = seen.get(char)) !== null && _a !== void 0 ? _a : 0;
        if (seen.has(char) && stored >= l) {
            l = stored + 1;
        }
        else {
            // first time to seeing a letter do:
            length = Math.max(length, i - l + 1);
        }
        seen.set(char, i);
    }
    return length;
}
;
console.log(lengthOfLongestSubstring("abcabcdb"));
