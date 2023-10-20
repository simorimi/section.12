const inputElement = document.querySelector('#product-name');
const countNumber = document.querySelector('#remaining-chars');

const maxAllowedChars = inputElement.maxLength;

function count(event) {
    const string = event.target.value;
    const stringLength = string.length;

    countNumber.textContent = maxAllowedChars - stringLength;
}

inputElement.addEventListener('input', count);

