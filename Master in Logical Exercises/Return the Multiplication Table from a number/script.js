const multiplication_number = (num) => {
  console.log(`Multiplation Table For: ${num}`);
  let result = "";
  for (let i = 1; i < 11; i++) {
    result += `${num} x ${i} = ${num * i}\n`;
  }

  return result;
};

console.log(multiplication_number(5));
