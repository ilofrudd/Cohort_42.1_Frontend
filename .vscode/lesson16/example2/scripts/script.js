
const callBF = () => {
    console.log('Hello world');
}
//setInterval(callBF, 1000);

const intervalID = setInterval(callBF, 1000);

clearInterval(intervalID);