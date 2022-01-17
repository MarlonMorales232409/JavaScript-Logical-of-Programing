const side = (num) => {
  let side = "";

  for (let i = 0; i < num; i++) {
    side += "*";
  }

  return side;
};

const square = (num) => {
  let paint = side(num) + "\n";

  let content = "";

  for (let i = 0; i < num - 2; i++) {
    content = "*";

    for (let j = 0; j < num - 2; j++) {
      content += " ";
    }

    content += "*";

    paint += content + "\n";
  }

  paint += side(num);

  return paint;
};

console.log(square(4));
