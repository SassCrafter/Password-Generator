const characterAmoutRange = document.getElementById('characterAmoutRange');
const characterAmoutNum = document.getElementById('characterAmoutNum');
const generator = document.getElementById('password-generator');
const generateBtn = document.querySelector('.generate-btn');
const includeUppercaseEl = document.getElementById('includeUppercase');
const includeNumbersEl = document.getElementById('includeNumbers');
const includeSymbolsEl = document.getElementById('includeSymbols');
const passwordField = document.querySelector('.password-field');
// Characters arrays
const lowercaseCharArr = arrayLowToHigh(97,122);
const uppercaseCharArr = arrayLowToHigh(65, 90);
const numCharArr = arrayLowToHigh(48, 57);
const symbolCharArr = arrayLowToHigh(33,47).concat(arrayLowToHigh(58,64)).concat(arrayLowToHigh(91,96));
//console.log(symbolCharArr);

// EventListeners

characterAmoutRange.addEventListener('input', syncCharAmount);
characterAmoutNum.addEventListener('input', syncCharAmount);
generator.addEventListener('submit', e => {
	e.preventDefault();
	const password = generatePassword();
	passwordField.innerText = password;
})



// Functions

function syncCharAmount(e) {
	const value = e.target.value;
	characterAmoutRange.value = value;
	characterAmoutNum.value = value;
}

function generatePassword() {
	const includeUppercase = includeUppercaseEl.checked;
	const includeNumbers = includeNumbersEl.checked;
	const includeSymbols = includeSymbolsEl.checked;
	const password = [];
	let arr = [...lowercaseCharArr];

	if (includeUppercase) {
		arr = arr.concat(uppercaseCharArr);
	}
	if (includeNumbers) {
		arr = arr.concat(numCharArr);
	}
	if (includeSymbols) {
		arr = arr.concat(symbolCharArr);
	}


	for (let i = 0; i < characterAmoutRange.value; i++) {
		const randCharIndex = arr[Math.floor(Math.random() * arr.length)];
		password.push(String.fromCharCode(randCharIndex));
	}
	return password.join('');
}

function arrayLowToHigh(low, high) {
	const arr = [];
	for (let i = low; i <= high; i++) {
		arr.push(i);
	}
	return arr;
}