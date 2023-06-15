const btnHamburger = document.querySelector('#btnHamburger');
const header = document.querySelector('.header')
const overlay = document.querySelector('.overlay');

btnHamburger.addEventListener('click', function(){
    console.log('click hamburger');
    // classList -> class= "sdlkfj lskfjs lsdkfj"
    // checks if open is part of classList. if yes, remove; else, add
    if (header.classList.contains('open')) { // close
        header.classList.remove('open');
        overlay.classList.remove('fade-in');
        overlay.classList.add('fade-out');
    } 
    else { // open
        header.classList.add('open');
        overlay.classList.remove('fade-out');
        overlay.classList.add('fade-in');
    }
});

