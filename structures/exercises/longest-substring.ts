
// Best solutiuon: O(n)
function lengthOfLongestSubstring(s: string): number {
    const seen = new Map<string, number>()
    let l: number = 0 // pivot 1
    let length: number = 0

    for (let i = 0; i <= s.length - 1; i++) { // i: pivot 2
        const char = s[i] // a

        const stored = seen.get(char) ?? 0
        if (seen.has(char) && stored >= l) {
            l = stored + 1
        } else {
            // first time to seeing a letter do:
            length = Math.max(length, i - l + 1)
        }

        seen.set(char, i)
    }
    return length
};

console.log(lengthOfLongestSubstring("abcabcdb"))
