const ourButton = document.querySelector('#btn');
ourButton.addEventListener('click', () => {console.log('Button pressed')});



//const startTime = new Date();
//for (let i = 0: i < 7000000000; i++) {

//}
const endTime = new Date();
console.log(endTime - startTime )

// setTimeout
setTimeout(()=>{console.log('timeout 0')}, 0);
setTimeout(()=>{console.log('timeout 1000')}, 1000);
console.log('Console after setTimeout');