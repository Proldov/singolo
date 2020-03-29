//header

//обработка выподающего меню


//Обработка скрола
const MENU = document.getElementById('main__menu');  
let avgHeight = 0;
const SECTIONs = document.querySelectorAll('section');
SECTIONs.forEach(el => {
     avgHeight += el.offsetHeight; 
});

let ScrollOffset = document.documentElement.clientHeight - parseInt(avgHeight / SECTIONs.length);
ScrollOffset = (ScrollOffset < 30) ? document.querySelector('header').offsetHeight : ScrollOffset;

document.addEventListener('scroll', event => {
    let curPos = window.scrollY + ScrollOffset;
    const elList = document.querySelectorAll('section');
    
  
    const menuList = MENU.querySelectorAll('.navigation__link');
    elList.forEach(el => {
        if ((el.offsetTop) <= curPos && (el.offsetTop + el.offsetHeight - 60) > curPos) {
            menuList.forEach(li => {
                li.classList.remove('navigation__link_bordered');
                if (el.getAttribute('id') === li.getAttribute('href').substring(1)) {
                    li.classList.add('navigation__link_bordered');
                }
            });
        }
    });
 
    //menu
    MENU.addEventListener('click', function(event){
        const menuList = MENU.querySelectorAll('.navigation__link');
         for (let i = 0; i < menuList.length; i++) {
       menuList[i].classList.remove('navigation__link_bordered');
        }
        event.target.classList.add('navigation__link_bordered');    
    });


});


//slaider

//  let slideIndex = 1,
//     slides = document.getElementsByClassName('slide__item'),
//     left = document.querySelector('.promo__arrow-left'),
//     right = document.querySelector('.promo__arrow-right'); 

//      showSlides(slideIndex);


//     function showSlides(n)  {
//         if (n > slides.length) {
//             slideIndex = 1;
//         };

//         if (n < 1) {
//             slideIndex = slides.length;
//         };

//         for (let i = 0 ; i < slides.length; i++) { // скрываем слайды
//            slides[i].style.display ='none';                                               
//         };

//         slides[slideIndex - 1].style.display ='block'; 
//     };    

//     function plusSlides(n) {
//         showSlides(slideIndex+=n);Ы
//     }

//     left.addEventListener('click', function(){
//         plusSlides(-1);    
//         slides[slideIndex - 1].classList.remove('.promo__arrow-left');  
//         slides[slideIndex - 1].classList.add('.promo__arrow-right');
//     })

//     right.addEventListener('click', function(){
//         plusSlides(1);
//         slides[slideIndex - 1].classList.remove('.promo__arrow-right');  
//         slides[slideIndex - 1].classList.add('.promo__arrow-left');      
//     });


//phoneOff

function phonesVertical (){
    document.getElementsByClassName('screen')[0].classList.toggle('dispOff');
}
document.getElementById('phone__ver').addEventListener('click', phonesVertical);
document.getElementsByClassName('screen')[0].addEventListener('click', phonesVertical);


function phonesHorizontal (){
    document.getElementsByClassName('screen2')[0].classList.toggle('dispOff');
}
document.getElementById('phone__hor').addEventListener('click', phonesHorizontal);
document.getElementsByClassName('screen2')[0].addEventListener('click', phonesHorizontal);

//Portfolio
//табы
const AddPortfolioClicHendler = document.getElementById('portfolio__tags');
AddPortfolioClicHendler.addEventListener('click', function(event){
    const tablistBord = AddPortfolioClicHendler.querySelectorAll('.layout-tags__tag');
    for (let i = 0;i < tablistBord.length;i++) {
        tablistBord[i].classList.remove('layout-tags_bordered');    
    };
    event.target.classList.add('layout-tags_bordered');

    //цикл для переммешивания картинок

    let a = document.querySelectorAll('.image_port');
    let arr = [].slice.call(a)   //возводим a в мвссив
    function compareRandom() {
        
        return Math.random() - 0.5;    
    };
       arr.sort(compareRandom);
       
        for (let i = 0; i < arr.length; i++) {
            document.querySelector('#potfolio__image').append(arr[i]);
        };    
});

//рамка

const borderImg = document.getElementById('potfolio__image');
borderImg.addEventListener('click', function(event){
    const borderList = borderImg.querySelectorAll('.layoyt-4-column__image'); 
    for (let i = 0;i < borderList.length;i++) {
        borderList[i].classList.remove('portfolio__bordered');       
    };
    event.target.classList.add('portfolio__bordered');
   
});   


// popup

const formContact = document.getElementById('contacts-form');
formContact.addEventListener('submit',  event => {
    event.preventDefault();
    if (formContact.checkValidity()) {
        document.getElementById('pop-up-subject').innerHTML = (document.getElementById('form-input-subject').value) ? '<b>Тема:</b> ' + ( ( document.getElementById('form-input-subject').value.length > 100 ) ? document.getElementById('form-input-subject').value.substring(0, 100) + '...' : document.getElementById('form-input-subject').value ): 'Без темы';
        document.getElementById('pop-up-message').innerHTML = (document.getElementById('form-area-message').value) ? '<b>Описание:</b> ' + ( ( document.getElementById('form-area-message').value.length > 230 ) ? document.getElementById('form-area-message').value.substring(0, 230) + '...' : document.getElementById('form-area-message').value ) : 'Без описания';
        document.getElementById('pop-up_msg').classList.remove('pop-up_hidden');
    }
    formContact.reset();
    return false;
});

const PUPAP_BLOCK = document.getElementById('pop-up_msg');
const PUPAP_CLOSE = document.getElementById('btn-close');
function popup_close(event) {
    if (event.target === PUPAP_BLOCK || event.target === PUPAP_CLOSE) {
        PUPAP_BLOCK.classList.add('pop-up_hidden');
    }
}
PUPAP_BLOCK.addEventListener('click', popup_close);
PUPAP_CLOSE.addEventListener('click', popup_close);



