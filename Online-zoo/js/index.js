const burger = document.querySelector('.burger-icon');
const burgerMenu = document.querySelector('.header-burger-menu')
const headerBurgerLogo = document.querySelector('.header-burger-logo')
const darkBody = document.querySelector('.dark-wrapper')


const toggleBurgerElements = () => {
	document.body.classList.toggle('lock')
	burgerMenu.classList.toggle('_active')
	burger.classList.toggle('_active')
	headerBurgerLogo.classList.toggle('_active')
	darkBody.classList.toggle('_active')
}

const removeBurgerElements = (event) => {
	if(event.target.classList.contains('dark-wrapper')){
		document.body.classList.remove('lock')
		burgerMenu.classList.remove('_active')
		burger.classList.remove('_active')
		headerBurgerLogo.classList.remove('_active')
		darkBody.classList.remove('_active')
	}
}

burger.addEventListener('click', toggleBurgerElements)
document.body.addEventListener('click', removeBurgerElements)