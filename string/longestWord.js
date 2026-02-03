function longestWord(sentence) {
    let words = sentence.split(" ");
    let longest = "";
    for (let w of words) {
        if (w.length > longest.length) longest = w;
    }
    return longest;
}
console.log(longestWord("I love JavaScript programming")); // programming