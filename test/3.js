// Question
// Given a object data, return the data multiple by 3 and sort the data.
// Expected output : { j: 0, k: 9, i: 18, l: 36 }

const input = { i: 6, j: null, k: 3, l: 12 };

function result(input) {
  let sortable = [];
  for (let key in input) {
    sortable.push([key, input[key] * 3]);
  }

  sortable.sort(function (a, b) {
    return a[1] - b[1];
  });

  const obj = {};

  sortable.forEach((val) => {
    obj[val[0]] = val[1];
  });

  return obj;
}

console.log(result(input));
