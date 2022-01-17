const reverse = (text) => {
  let reverse = "";
  for (let i = text.length; i >= 0; i--) {
    if (!reverse) {
      reverse = text[i];
    } else {
      reverse += text[i];
    }
  }

  return reverse;
}; // My Solution

// Course Solution

const reverse_word = (text) => {
  let reverse = "";
  for (let letter of text) {
    reverse = letter + reverse;
  }

  return reverse;
};

// console.log(reverse("hello"));
console.log(reverse_word("hello"));
