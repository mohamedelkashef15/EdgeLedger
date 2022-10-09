const navbar = document.querySelector('.navbar');

window.onscroll = function(){
    if(window.pageYOffset > 250)
        navbar.classList.remove('top');
    else
        navbar.classList.add('top');
}