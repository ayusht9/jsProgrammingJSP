var canConstruct = function(ransomNote, magazine) {
    let freq = {};

    // count letters in magazine
    for (let ch of magazine) {
        freq[ch] = (freq[ch] || 0) + 1;
    }

    // check ransomNote
    for (let ch of ransomNote) {
        if (!freq[ch]) {
            return false;
        }
        freq[ch]--;
    }

    return true;
};
