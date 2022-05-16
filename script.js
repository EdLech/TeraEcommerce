const custom_navbar= document.getElementById('my_navbar');
window.onscroll = () => {
    if (window.scrollY > 1) {
      custom_navbar.classList.add('nav-active');
    } else {
      custom_navbar.classList.remove('nav-active');
    }
};