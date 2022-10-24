console.log('ПОПРОШУ ОБНОВИТЬ СТРАНИЦУ, ЕСЛИ ЕСТЬ КАКИЕ-ТО НЕПОЛАДКИ Т.К. НЕМНОГО СДЕЛАНО ЧЕРЕЗ КОСТЫЛЬ И БЫВАЮТ КОСЯКИ ИЗЗА НЕОПЫТНОСТИ');

//Burger handler
(function burgerMenu () {
    const BURGER_ITEM = document.querySelector('.burger');
    const MENU = document.querySelector('.header-nav');
    const MENU_CLOSE_ITEM = document.querySelector('.header-nav-close');
    const MENU_LINKS = document.querySelectorAll('.header-link');

    BURGER_ITEM.addEventListener('click', () => {
        MENU.classList.add('header-nav-active');
    });
    MENU_CLOSE_ITEM.addEventListener('click', () =>{
        MENU.classList.remove('header-nav-active');
    });
    
    if(window.innerWidth <= 943){
        for(let i = 0; i < MENU_LINKS.length; i++){
            MENU_LINKS[i].addEventListener('click', () => {
                MENU.classList.remove('header-nav-active');
            });
        }
    }
}());


//PopUp
(function activePopUp() {
    const LOGIN_BUTTON = document.querySelector('.login-button');
    const POPUP = document.querySelector('.popup');
    const ACCOUNT_LINK = document.querySelector('.login-popup-mobile');
    const DARK_WRAPPER = document.querySelector('.dark-wrapper')

	 const togglePopupDark = () => {
		POPUP.classList.toggle('popup-hidden')
      DARK_WRAPPER.classList.toggle('dark-wrapper-pop-noactive')
	 }

    LOGIN_BUTTON.addEventListener('click', togglePopupDark)
    POPUP.addEventListener('click', (event) => {if(event.target.classList.contains('popup')) togglePopupDark()})
    ACCOUNT_LINK.addEventListener('click', togglePopupDark)
    ACCOUNT_LINK.addEventListener('click', (event) => {if(event.target.classList.contains('popup')) togglePopupDark()})
}());


//Submit email and password
(function submit () {
    const SIGIN_BUTTON = document.querySelector('.button-sigin');

    SIGIN_BUTTON.addEventListener('click', () => {
        const EMAIL_INPUT = document.querySelector('.email-input-popup');
        const DATA_EMAIL_INPUT = EMAIL_INPUT.value;
        const PASSWORD_INPUT = document.querySelector('.password-input-popup');
        const DATA_PASSWORD_INPUT = PASSWORD_INPUT.value;
        alert(`E-mail: ${DATA_EMAIL_INPUT} \nPassword: ${DATA_PASSWORD_INPUT}`);
        EMAIL_INPUT.value = "";
        PASSWORD_INPUT.value = "";
    })
}());


//Submit startPlaning 
(function startPlanning () {
    const PREVIEW_BUTTON = document.querySelector('.preview-button');

    PREVIEW_BUTTON.addEventListener('click', () => {
        const START_PLANNING_INPUT = document.querySelector('.start-form-field');
        const DATA_START_PLANNING_INPUT = START_PLANNING_INPUT.value;
        alert(`You like to do:  ${DATA_START_PLANNING_INPUT}`);
        START_PLANNING_INPUT.value = "";
    })
}());


//Popup change
(function clickButtonRegister () {
    
    const POPUP = document.querySelector('.popup');
    const REGISTER_BUTTON = document.querySelector('.button-regist');
    const TITLE_LOGIN_POP_UP = document.querySelector('.title-login-popup');
    const BUTTON_SIGN_UP = document.querySelector('.button-sigin');
    const FOOTER_REGIST = document.querySelector('.popup-footer-regist');
    const BUTTONS_POP_UP = document.querySelector('.buttons-popup');
    const OR_POP_UP= document.querySelector('.or-popup');
    const FORGOT_PASSWORD = document.querySelector('.forgot-password');

    const toggleElementText = (element, text) => {
        element.textContent = text;
    }

    const toggleElements = () => {
        BUTTONS_POP_UP.classList.toggle('buttons-popup-none');
        OR_POP_UP.classList.toggle('or-popup-none');
        FORGOT_PASSWORD.classList.toggle('forgot-password-none');
    }
    
    const popupLogIn = () => {
        POPUP.classList.add('popup-create');

        toggleElementText(TITLE_LOGIN_POP_UP, 'Create account');
        toggleElementText(BUTTON_SIGN_UP, 'Sign Up');
        toggleElementText(FOOTER_REGIST, 'Already have an account?');
        toggleElementText(REGISTER_BUTTON, 'Log in');
        toggleElements();
    }

    const popupCreate = () => {
        POPUP.classList.remove('popup-create');

        toggleElementText(TITLE_LOGIN_POP_UP, 'Log in to your account');
        toggleElementText(BUTTON_SIGN_UP, 'Sign In');
        toggleElementText(FOOTER_REGIST, 'Don’t have an account?');
        toggleElementText(REGISTER_BUTTON, 'Register');
        toggleElements();
    }

    const changeContent = () => {
        if(POPUP.classList.contains('popup-create')){
            popupCreate();
        }
        else{
            popupLogIn();
        }
    }

    REGISTER_BUTTON.addEventListener('click', changeContent);
}());


/*Slider for mobile version*/
(function sliderMobile () {

    const PREV_BUTTON_MOBILE = document.querySelector('.arrow-left');
    const NEXT_BUTTON_MOBILE = document.querySelector('.arrow-right');
    const SLIDES_MOBILE = document.querySelectorAll('.slide');
    const DOTS_MOBILE = document.querySelectorAll('.dot');
    const FIRST_SLIDE = 0, LAST_SLIDE = SLIDES_MOBILE.length - 1;
    let indexMobile = 0;

    const activeSlideMobile = indexSlideActiveMobile => {
        for(slideMobile of SLIDES_MOBILE){
            slideMobile.classList.remove('slide-active-mobile');
        }
        SLIDES_MOBILE[indexSlideActiveMobile].classList.add('slide-active-mobile');
        colorArrow(indexMobile);
    }

    const colorArrow = (indexMobile) => {
        if(indexMobile === LAST_SLIDE){
            NEXT_BUTTON_MOBILE.classList.remove('arrow-right-dark')
            NEXT_BUTTON_MOBILE.classList.add('arrow-right-pale')
        }
        else{
            NEXT_BUTTON_MOBILE.classList.add('arrow-right-dark')
            NEXT_BUTTON_MOBILE.classList.remove('arrow-right-pale')
        }

        if(indexMobile === FIRST_SLIDE){
            PREV_BUTTON_MOBILE.classList.remove('arrow-left-dark')
            PREV_BUTTON_MOBILE.classList.add('arrow-left-pale')
        }
        else{
            PREV_BUTTON_MOBILE.classList.remove('arrow-left-pale')
            PREV_BUTTON_MOBILE.classList.add('arrow-left-dark')
        }
    }

    const activeDotMobile = indexDotActiveMobile => {
        for(dotMobile of DOTS_MOBILE){
            dotMobile.classList.remove('dot-active-mobile');
        }
        DOTS_MOBILE[indexDotActiveMobile].classList.add('dot-active-mobile');
    }

    const prepareCurrentSlideMobile = indexMobile => {
        activeSlideMobile(indexMobile);
        activeDotMobile(indexMobile);
    }

    const nextSlideMobile = () => {
        if(indexMobile !== LAST_SLIDE){
            indexMobile++;
            prepareCurrentSlideMobile(indexMobile);
        }
    }

    const prevSlideMobile = () => {
        if(indexMobile !== FIRST_SLIDE){
            indexMobile--;
            prepareCurrentSlideMobile(indexMobile);
        }
    }

    DOTS_MOBILE.forEach((item, indexDotMobile) => {
        item.addEventListener('click', () => {
            indexMobile = indexDotMobile;
            prepareCurrentSlideMobile(indexMobile);
        })
    })

    PREV_BUTTON_MOBILE.addEventListener('click', prevSlideMobile);
    NEXT_BUTTON_MOBILE.addEventListener('click', nextSlideMobile);
}());


//Function slider for desktop
(function sliderDesktop() {
    
    const SLIDER = document.querySelector('.slider')
    const SLIDES_DESKTOP = document.querySelectorAll('.slide');
    const DOTS_DESKTOP = document.querySelectorAll('.dot');
    const LAST_SLIDE_BUTTON = document.querySelector('.arrow-right');
    const FIRST_SLIDE_BUTTON = document.querySelector('.arrow-left');
    const FIRST_SLIDE = 0, LAST_SLIDE = SLIDES_DESKTOP.length - 1;
    const WIDTH_SLIDE = document.querySelector('.slide-active-desktop').clientWidth;

    let indexDesktop = 1;
    let offset = 0;
    
    const activeSlideDesktop = indexActiveSlideDesktop => {
        for(slideDesktop of SLIDES_DESKTOP){
            slideDesktop.classList.remove('slide-active-desktop');
        }
        SLIDES_DESKTOP[indexActiveSlideDesktop].classList.add('slide-active-desktop');
    }

    const activeDotDesktop = indexDotActiveDesktop => {
        for(dotDesktop of DOTS_DESKTOP){
            dotDesktop.classList.remove('dot-active-desktop');
        }
        DOTS_DESKTOP[indexDotActiveDesktop].classList.add('dot-active-desktop');
    }

    const nextSlideDesktop = () => {
        offset += WIDTH_SLIDE;
        if(indexDesktop === LAST_SLIDE){
            indexDesktop = FIRST_SLIDE;
            offset = -WIDTH_SLIDE;
        }else{
            indexDesktop++;
        }
        prepareCurrentSlideDesktop(indexDesktop);
    }

    const prevSlideDesktop = () => {
        offset -= WIDTH_SLIDE;
        if(indexDesktop === FIRST_SLIDE){
            indexDesktop = LAST_SLIDE;
            offset = WIDTH_SLIDE
        }else{
            indexDesktop--;
        }
        prepareCurrentSlideDesktop(indexDesktop);
    }

    const prepareCurrentSlideDesktop = (indexDesktop) => {
        SLIDER.style.right = offset + 'px'
        activeSlideDesktop(indexDesktop);
        activeDotDesktop(indexDesktop);
    }

    LAST_SLIDE_BUTTON.addEventListener('click', nextSlideDesktop);
    FIRST_SLIDE_BUTTON.addEventListener('click', prevSlideDesktop);

}())