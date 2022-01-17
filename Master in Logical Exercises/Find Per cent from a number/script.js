const per_cent = (part, total) => {
  let result = (part / 100) * total;
  return `The ${part}% of ${total} is ${result}`;
};

console.log(per_cent(43, 897));
