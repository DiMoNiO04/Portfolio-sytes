//-----------------------------Testimonial cards--------------------------------------//
const navbar = document.querySelector('.navbar');
const testimonialsCards = document.querySelector('.testimonials-cards')
const testimonialCard = document.querySelector('.testimonial-card')
const allTestimonialCard  = document.querySelectorAll('.testimonial-card')

let position = 0;
let arrNumberRandom = []

const getRandomArr = (min, max) => {
	for (let i = 0; i < allTestimonialCard.length; i++) {
		let x = Math.floor(Math.random() * (max - min + 1)) + min;
		(arrNumberRandom.indexOf(x) === -1) ? arrNumberRandom.push(x) : i--;
	}
	return arrNumberRandom
}

const randomTestimonialCards = () => {
	let randomArr = getRandomArr(0, 11);
	for(let i=0; i < randomArr.length; i++){
		allTestimonialCard[i].innerHTML = allTestimonialCard[randomArr[i]].innerHTML
	}
}
randomTestimonialCards()



const getWidthCard = () => Number(testimonialCard.offsetWidth) + Number(window.getComputedStyle(testimonialCard).marginRight.slice(0,2));
const getOldValue = () => navbar.old=navbar.recent;
const getCurrentValue = () => navbar.recent=navbar.value;

const getStep = () => {
	let step = Math.abs(navbar.old - navbar.recent)
	if(isNaN(step)){
		step = 1;
	}
	return step
};

const countPosition = () => (navbar.old < navbar.recent || navbar.old === undefined) ? position += (-getWidthCard()) * getStep() : position += getWidthCard() * getStep()
const makePosition = () => testimonialsCards.style.marginLeft = position + 'px';

const rangeValue = () => {
	getOldValue();
	getCurrentValue();
	countPosition();
	makePosition();
}

navbar.addEventListener("input", rangeValue);
//-----------------------------------------------------------------------------------//


//-------------------------Popup-----------------------------//
const popup = document.querySelector('.popup')
const popupContent = document.querySelector('.popup-content')
const testsCards = document.querySelector('.testimonials-cards')
const testCard = document.querySelectorAll('.testimonial-card');
const closePopup = document.querySelector('.popup-close')

if(window.innerWidth <= 910){
	const togglePopupCloseDark = () => {
		popup.classList.toggle('popup-hidden')
		darkBody.classList.toggle('_active')
	}

	testCard.forEach((_, index) =>{
		testCard[index].addEventListener('click', () => {
			popupContent.innerHTML =  testCard[index].innerHTML
			togglePopupCloseDark()
		})
	})


	const hiddenPopup = (event) => {
		if(event.target.classList.contains('popup')){
			togglePopupCloseDark()
		}
		closePopup.addEventListener('click', togglePopupCloseDark)
	}

	document.body.addEventListener('click', hiddenPopup)
}
//--------------------------------------------------------------//


//-----------Slider Animals------------------------------------------//
const sliderPages = document.querySelectorAll('.slider-page');
const buttonLeft = document.querySelector('.arrow-left')
const buttonRight = document.querySelector('.arrow-right')

let currentPage = 0;
let isEnabled = true;

const getRandomCards = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const changeCurrentPage = (index) => currentPage = (index + sliderPages.length) % sliderPages.length;

const getRandomImg = (sliderPage) => {
    let animalCards = sliderPage.querySelectorAll('.animal-card');
    for (let index = 0; index < 5; index ++) {
        sliderPage.append(animalCards[getRandomCards(0,5)]);
    }
}
getRandomImg(sliderPages[0]);

const hidePage = (direction) => {
    isEnabled = false;
    sliderPages[currentPage].classList.add(direction);
    sliderPages[currentPage].addEventListener('animationend', function(){
        this.classList.remove('slider-page-active', direction);
    });
}

const showPage = (direction) => {
	sliderPages[currentPage].classList.add('slider-next-page', direction);
	getRandomImg(sliderPages[currentPage]);
   sliderPages[currentPage].addEventListener('animationend', function(){
		sliderPages[currentPage].classList.remove('slider-next-page', direction);
		sliderPages[currentPage].classList.add('slider-page-active');
      isEnabled = true;
   });
}

const getPreviousPage = (currentPage) => {
	hidePage('animation-to-right');
   changeCurrentPage(currentPage - 1);
   showPage('animation-from-left');
}

const getNextPage = (currentPage) => {
	hidePage('animation-to-left');
   changeCurrentPage(currentPage + 1);
   showPage('animation-from-right');
}

const nextPage = (currentPage) => getNextPage(currentPage)
const previousPage = (currentPage) => getPreviousPage(currentPage) 

const clickButtonLeft = () => { if (isEnabled) {previousPage(currentPage)}}
const clickButtonRight = () => {if (isEnabled) {nextPage(currentPage);}}

buttonLeft.addEventListener('click', clickButtonLeft);
buttonRight.addEventListener('click', clickButtonRight);
//----------------------------------------------------------------------------//