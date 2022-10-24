const donateLinks = document.querySelectorAll('.donate-link');
const money = document.querySelectorAll('.money')
const circl = document.querySelectorAll('.circl')
const donateInput = document.querySelector('.input-donate')


const removeActiveMoneyCircle = (index) => {
	money[index].classList.remove('_active')
	circl[index].classList.remove('_active')
}

const addActiveMoneyCircle = (index) => {
	money[index].classList.add('_active')
	circl[index].classList.add('_active')
}

const getAmountInput = (index) => {
	let getMoney = money[index].innerHTML
	donateInput.value = getMoney.slice(1)
}

const changeDonate = (index) => {
	donateLinks.forEach((_, index) => removeActiveMoneyCircle(index));
	addActiveMoneyCircle(index);
	getAmountInput(index)
}

const detectionNumberInput = () => 	donateInput.value = donateInput.value.slice(0, 4)

const detectionInput = () => {
	money.forEach((_, index) => (donateInput.value.slice(0,4) === money[index].innerHTML.slice(1)) ? addActiveMoneyCircle(index) : removeActiveMoneyCircle(index))
	detectionNumberInput()
}

donateLinks.forEach((_, index) => donateLinks[index].addEventListener('click', () => changeDonate(index)))
donateInput.addEventListener('input', detectionInput)