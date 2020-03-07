// var navbar = document.getElementById('navbar')
// navbar.style.backgroundImage = 'url(images/bg-image.jpg)'


document.querySelector('.nav__burger').addEventListener('click', function() {
    document.querySelector('.nav__menu').classList.toggle('is-active')
    document.querySelector('.nav__burger').classList.toggle('is-active')
})
