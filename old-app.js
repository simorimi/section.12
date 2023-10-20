console.dir(document);
// document.body.children[1].children[0].href = 'https://google.com';

let anchorElement = document.getElementById('external-link');

anchorElement.href = 'https://google.com';

anchorElement = document.querySelector('#external-link'); //querySelector('a');도 가능

anchorElement.href = 'https://academind.com';

//Add an Element
//1. Create the new element
let newAnchorElement = document.createElement('a');
newAnchorElement.href = 'https://google.com';
newAnchorElement.textContent = 'This leads to Google!';
//2. Get access to the parent element that should hold the new element
let firstParagraph = document.querySelector('p');
//3. Insert the new element into the parent element content
firstParagraph.append(newAnchorElement);

//Remove Element
//1. Select the element that should be removed
let firstH1Element = document.querySelector('h1');
//2. remove the element
firstH1Element.remove(); // firstH1Element.parentElement.removeChild(firstH1Element); //for older browser

//Move Element
firstParagraph.parentElement.append(firstParagraph);
// let secondParagraph = document.querySelector('.paragraph');
// secondParagraph.parentElement.insertBefore(secondParagraph, firstParagraph);

//inner HTML
firstParagraph.innerHTML = 'Hi! This is <strong>important</strong>.';