/*-nav-*/

//nav background

let nav = document.querySelector('nav.navbar'), //global
  menuBtn = document.querySelector('.phone-menu'),
  menu = document.querySelector('.navbar .navbar__container>ul'); //global

document.addEventListener('scroll', (e) => {
  let pageScroll = document.scrollingElement.scrollTop,
    navPosition = nav.offsetTop;

  if (pageScroll > navPosition + 0.5) {
    nav.classList.add('navbar--show'); //to add scrolled nav style
  } else {
    nav.classList.remove('navbar--show'); //to remove scrolled nav style
  }
});

menuBtn.addEventListener('click', function () {
  menu.classList.toggle('show-list');
});
