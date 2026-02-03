const sentence = "I love JavaScript";

const fullyReversed = sentence
  .split(" ")
  .map(word => word.split("").reverse().join(""))
  .reverse()
  .join(" ");

console.log(fullyReversed);
// "tpircSavaJ evol I"
