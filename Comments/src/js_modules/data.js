'use strict';

import { commentData } from "./variables";
import { TODAY } from "./variables";
import { YESTERDAY } from "./variables";
import { errors } from "./variables";
import { dayNow } from "./variables";
import { monthNow } from "./variables";
import { yearNow } from "./variables";



const checkSetDefaultMaxDate = (data) => (data < 10) ? data = "0" + data : data;

function setDefaultMaxDate() {

	let defaultData = yearNow + '-' + checkSetDefaultMaxDate(monthNow) + '-' + checkSetDefaultMaxDate(dayNow);
	let maxData = defaultData;

	commentData.value = defaultData;
	commentData.max = maxData;
}

document.addEventListener('DOMContentLoaded', setDefaultMaxDate);



const getElementsCommData = () => commentData.value.split('-');
const checkCompletion = (arrCommData) => arrCommData.length === 1;
const checkDate = () => commentData.value > commentData.max || commentData.value < commentData.min;
const checkToday = (arrCommData) => Number(arrCommData[0]) === yearNow && Number(arrCommData[1]) === Number(monthNow) && Number(arrCommData[2]) === Number(dayNow);
const checkYesterday = (arrCommData) => Number(arrCommData[0]) === yearNow && Number(arrCommData[1]) === Number(monthNow) && Number(arrCommData[2]) === Number(dayNow) - 1;


export function dateConverter() {

	let arrCommData = getElementsCommData();
	
	if(checkCompletion(arrCommData)) return TODAY;

	if(!checkDate()) {
		if(checkToday(arrCommData)) {
			return TODAY;
		} else if(checkYesterday(arrCommData)) {
			return YESTERDAY;
		} else{
			return arrCommData[2] + "." + arrCommData[1] + "." + arrCommData[0];
		}
	}
	errors.push('Неправильный формат даты');
}
