const convertNumberTo = (num, base) => {

  if (base === 2)
    return `The binary number ${num} in base 10 is ${parseInt(num, 2)}`;
  else if (base === 10)
    return `The number ${num} in base ${base} is ${num.toString(2)}`;
  else return `The base ${base} is invalid`;
};

console.log(convertNumberTo(100, 2));
console.log(convertNumberTo(4, 10));
console.log(convertNumberTo(4, 8));
