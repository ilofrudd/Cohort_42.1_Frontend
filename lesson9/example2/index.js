//

const arr1 = [1, 4, 98, "abc", null, undefined, [1, 2, 3]];

console.log(arr1[2]);
console.log(arr1[6] [2]);

console.log(arr1.length);

// add element in arrayy end

const newLength = arr1.push(777);
console.log(arr1);
console.log(newLength);
// delete element from  array end
arr1.pop();
console.log(arr1.pop());
console.log(arr1);

// add element in the start
arr1.unshift("First");
console.log(arr1);

// delete element from the start
arr1.shift();
console.log(arr1);

// put in the anybody position
const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Fab');
console.log(months);

// reverse array
console.log(months.reverse());
console.log(months.reverse());

// delete id (begining from id 1 - first)
months.splice[1, 1];
console.log(months);

