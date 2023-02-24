const burger = document.querySelector('.burger');
const navLink = document.querySelector('.header__content-nav');
const header = document.querySelector('.header');


burger.addEventListener('click', openMenu)


function openMenu(){
    let nav = burger.classList.toggle('active');

    navLink.classList.toggle('active');

     if(nav){
        document.body.style.overflow = 'hidden';
        header.style.opacity = 1;
        
    }if(!nav){
        document.body.style.overflow = 'visible';
        header.style.opacity = 1;
    }
}

// свайпер
let swiper3 = new Swiper(".swiper-container",{
    spaceBetween: 20,
    centerSlides: 'true',
    fade: true,
    breakpoints: {       
        1300: {
            slidesPerView: 2,
            allowTouchMove: false,
        },
        720: {
            slidesPerView: 1.2,
            allowTouchMove: true,
        },
        0: {
            slidesPerView: 1.2
        }
        
    }
  });


// плавный скролл

const links = document.querySelectorAll('a[href^="#"]');
links.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const href = link.getAttribute('href');
      const target = document.querySelector(href);
      if (target) {
            const offsetTop = target.offsetTop;
          window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });  