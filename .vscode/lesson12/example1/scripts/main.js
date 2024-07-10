// Select the element we need
const mainHeaderOfDoc = document.querySelector('.main-header');
console.log(mainHeaderOfDoc);

const textElement = document.querySelector('.text'); // found only first
// textElement.textContent = "Test of text";
const textElementAll = document.querySelectorAll('.text'); // found all, create NodeList (array with reduced functionality)
console.log([...textElementAll]); // transform in simple array with pre operator
console.log(textElementAll.length);

// change the element
mainHeaderOfDoc.textContent = "DOM - Document Object Model";

// change for list elements
for (let i = 0; i < textElementAll.length; i++) {
    textElementAll[i].textContent = "Work in cycle";
}

// add/delete classes
mainHeaderOfDoc.classList.add('add-font-color');
mainHeaderOfDoc.classList.remove('main-header');

//add elements
const testLinkElement = document.createElement('a');
testLinkElement.href = 'http://google.com';
testLinkElement.textContent = 'link on Google';
textElement.append(testLinkElement);

// remove elements
//mainHeaderOfDoc.remove(); // remove completely
//textElement.textContent = ''; 

// Button use
const buttonElement = document.querySelector('#test-button');

// Input  use
const inputElement = document.querySelector('#test-input');

const btnClickHandler = () => {
    console.log('Button Click!!!');
    const textFromInput = inputElement.value;
    mainHeaderOfDoc.textContent = `We entered input  ${textFromInput}`;
}
buttonElement.addEventListener('click', btnClickHandler);
