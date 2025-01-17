const { getLists } = require("./listParser");

getLists().then(({ list1, list2 }) => {
    
  const differences = list1.map((num, index) => Math.abs(num - list2[index]));

  const sumOfDifferences = differences.reduce((acc, diff) => acc + diff, 0);

  console.log("Sum :", sumOfDifferences);
});
