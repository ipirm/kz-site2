var swiper = new Swiper('.swiper-container', {
    loop: true,
    autoplay: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        document.querySelector('.header').classList.add('active');
    } else {
        document.querySelector('.header').classList.remove('active');
    }
}


document.querySelector('.burger-menu').addEventListener("click", function(){
    document.querySelector('.header-nav-mobile').classList.toggle('active-menu');
});

