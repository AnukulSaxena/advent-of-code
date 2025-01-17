const { getLists } = require("./listParser");

getLists().then(({ list1, list2 }) => {
  const listMap = new Map();
  //   console.log(list1);
  //   console.log(list2);

  list2.forEach((num) => {
    const count = listMap.get(num);
    if (count) {
      listMap.set(num, count + 1);
    } else {
      listMap.set(num, 1);
    }
  });

  const matchList = list1.map((num) => {
    const count = listMap.get(num);
    if (count) return count * num;
    return 0;
  });

  const sumOfMatches = matchList.reduce((acc, diff) => acc + diff, 0);

  console.log("Sum :", sumOfMatches);
});
