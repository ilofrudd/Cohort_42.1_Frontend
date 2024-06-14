// loops

const arr1 = [1, 4, 98, "abc", null, undefined, [1, 2, 3]];
arr1.length;

for (let i = 0; i < 5; i++) {
    console.log(i);
}

let i = 0;

while (i < 5) {
    console.log(i);
    i++;
}

for (let j = 0; j < arr1.length; j++) {
    console.log(arr1[j]);  
}

let randArray = [];
for(let i = 0; i < 5; i++) {
    const randNum = Math.random() * 10;
    randArray.push(Math.round(randNum));
}
console.log(randArray);

let minutes1 = 27;
let quarter1 = Math.floor(minutes1 / 15) + 1;
// if (quarter1 > 4) {
//     return (
//         console.log("Minutes should be in the rande of 0 to 59."))
// }
console.log((`The minute ${minutes1} is in the ${quarter1} quarter of the hour.`));
console.log("The minute " + minutes1 + " is in the " + quarter1 + " quarter of the hour.");