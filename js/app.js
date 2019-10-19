const ham = document.querySelector('.ham');
const slide = document.querySelector('.slide');
const nav = document.querySelector('nav');

ham.addEventListener('click', ()=>{
    // console.log('yes');
    ham.classList.toggle('make-x');
    nav.classList.toggle('show');
    slide.classList.toggle('expand');
});