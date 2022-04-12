/**
 * Direction
 * Divide students to all of groups & students must sorted by first name
 *
 * Expected Result
 * [
 *   [
 *     { "firstName": "Belle", "lastName": "Norton" },
 *     { "firstName": "Finnley", "lastName": "Rennie" }
 *   ],
 *   [
 *     { "firstName": "Kai", "lastName": "Lyons" },
 *     { "firstName": "Peyton", "lastName": "Gardner" }
 *   ],
 *   [{ "firstName": "Tatiana", "lastName": "Dickerson" }]
 * ]
 */
const students = [
  { firstName: "Kai", lastName: "Lyons" },
  { firstName: "Belle", lastName: "Norton" },
  { firstName: "Finnley", lastName: "Rennie" },
  { firstName: "Tatiana", lastName: "Dickerson" },
  { firstName: "Peyton", lastName: "Gardner" },
];

function result(students) {
  students.sort(function (a, b) {
    if (a.firstName < b.firstName) return -1;
    if (a.firstName > b.firstName) return 1;
    return 0;
  });

  var arr = [],
    i,
    k;

  for (i = 0, k = -1; i < students.length; i++) {
    if (i % 2 === 0) {
      k++;
      arr[k] = [];
    }

    arr[k].push(students[i]);
  }

  return arr;
}

console.log(result(students));
