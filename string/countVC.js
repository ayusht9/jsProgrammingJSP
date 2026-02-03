function countVowelsAndConsonants(str) {
  let vowels = 0;
  let consonants = 0;
  const vowelSet = "aeiou";

  for (let ch of str.toLowerCase()) {
    if (ch >= "a" && ch <= "z") {
      if (vowelSet.includes(ch)) {
        vowels++;
      } else {
        consonants++;
      }
    }
  }

  return { vowels, consonants };
}
