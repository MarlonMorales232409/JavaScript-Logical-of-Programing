const countRepeatedWords = (phrase = "", word = "") => {
  if (typeof phrase !== "str" || typeof word !== "str")
    return "Please enter a string for the phrase and for the word";
  return phrase.includes(word);
};

console.log(countRepeatedWords("Hello World", "World"));
