(function(){                                           
    const header = document.querySelector('.header');   
    window.onscroll = () => {                               
       if(window.pageYOffset > 50){                    
           header.classList.add('header_active');
       }else{
        header.classList.remove('header_active');
       }
    };
}());


(function(){
    const burgerItem = document.querySelector('.header_burger');
    const menu = document.querySelector('.header_nav');
    const menuCloseItem = document.querySelector('.header_nav_close');
    const menuLinks = document.querySelectorAll('.header_link');
    burgerItem.addEventListener('click',() => {
        menu.classList.add('header_nav_active');
    });
    menuCloseItem.addEventListener('click',() =>{
        menu.classList.remove('header_nav_active');
    });
    if(window.innerWidth < 767){
        for(let i=0; i<menuLinks.length; i+=1){
            menuLinks[i].addEventListener('click',() =>{
                menu.classList.remove('header_nav_active');
            });
        }
    }
}());

// Scroll to anchors
(function () {

    const smoothScroll = function (targetEl, duration) {
        const headerElHeight =  document.querySelector('.header').clientHeight;  //Генерируем расстояние нужное для блока
        let target = document.querySelector(targetEl);
        let targetPosition = target.getBoundingClientRect().top - headerElHeight;
        let startPosition = window.pageYOffset;
        let startTime = null;
    
        const ease = function(t,b,c,d) {             //Функция обработчика скрола
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        };
    
        const animation = function(currentTime){                       //Функция анимации
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const run = ease(timeElapsed, startPosition, targetPosition, duration);
            window.scrollTo(0,run);
            if (timeElapsed < duration) requestAnimationFrame(animation);
        };
        requestAnimationFrame(animation);

    };

    const scrollTo = function () {                                      //Обработчик самих событий
        const links = document.querySelectorAll('.js-scroll');
        links.forEach(each => {
            each.addEventListener('click', function () {
                const currentTarget = this.getAttribute('href');
                smoothScroll(currentTarget, 1000);
            });
        });
    };
    scrollTo();
}());

