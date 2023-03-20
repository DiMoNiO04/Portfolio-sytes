'use strict';

import { commentName } from "./variables";
import { commentText } from "./variables";


const addError = (input, text) => {
	input.classList.add('error');
	input.nextElementSibling.textContent = text;
}

const removeError = (input) => {
	input.classList.remove('error');
	input.nextElementSibling.textContent = '';
}

const checkEmptyInput = (input) => input.value == '';
const checkLengthInput = (input, length) => input.value.length < length && input.value.length !== 0;
const checkOkInput = (input) => /^[0-9a-zA-Z]*$/.test(input.value);



function validateName() {

	if(checkLengthInput(commentName, 5)) return false;

	if(checkEmptyInput(commentName)) {
		addError(commentName, 'Заполните поле!');
		return false;
	}

	if(!checkOkInput(commentName)) return false;

	removeError(commentName);
	return true;
}

commentName.addEventListener('keyup', () => {
	if(!validateName()) {
		if(checkLengthInput(commentName, 5)) {
			addError(commentName, 'Введите больше символов!');
		}
			
		if(!checkOkInput(commentName)){
			addError(commentName, 'Допустимы только цифры и буквы!');
		}
	}
})




function validateText() {

	if(checkLengthInput(commentText, 10)) return false;
	
	if(checkEmptyInput(commentText)) {
		addError(commentText, 'Заполните поле!');
		return false;
	}
	
	removeError(commentText);
	return true;
}

commentText.addEventListener('keyup', () => {
	if(!validateText()){
		if(checkLengthInput(commentText, 10)) {
			addError(commentText, 'Введите больше символов!');
		}
	}
})


export function validate() {

	let validName = validateName();
	let validText = validateText();
	
	if(validName && validText){
		return true;
	}
	return false;
}