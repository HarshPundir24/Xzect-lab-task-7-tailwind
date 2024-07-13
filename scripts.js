
// show menu item and submenu item
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('mobile-menu-toggle');
    const offcanvasMenu = document.getElementById('offcanvas-menu');
    const close = document.getElementById('close');

    menuToggle.addEventListener('click', function() {
      offcanvasMenu.classList.toggle('popup-mobile-visiable');
    });
    close.addEventListener('click', function(){
        offcanvasMenu.classList.remove('popup-mobile-visiable');
    });
 
    const toggles = document.querySelectorAll('[data-toggle="submenu"]');
    toggles.forEach(toggle => {
        toggle.addEventListener('click', function(event) {
            event.preventDefault();
            const submenu = this.nextElementSibling;
            if (submenu.classList.contains('hidden')) {
                submenu.classList.remove('hidden');
                submenu.classList.add('block');
            } else {
                submenu.classList.remove('block');
                submenu.classList.add('hidden');
            }
        });
    });
    // rotate icon on click
    const serviceLinks = document.querySelectorAll('.service-link');
    serviceLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const icon = link.querySelector('.icon');
            
            if (icon.classList.contains('rotate-90')) {
                icon.classList.remove('rotate-90');
            } else {
                document.querySelectorAll('.icon').forEach(icon => icon.classList.remove('rotate-90'));
                icon.classList.add('rotate-90');
            }
        });
    });
});


// scrolled navbar
  document.addEventListener("DOMContentLoaded", function() {
    const navbar = document.querySelector('.fixed');
    function checkScroll() {
      if (window.scrollY > 100) { 
        navbar.classList.add('bg-white');
        navbar.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
        navbar.style.paddingTop = '12px';
        navbar.style.paddingBottom = '12px';
      } else {
        navbar.classList.remove('bg-white');
        navbar.style.boxShadow = 'none';
        navbar.style.paddingTop = '32px';
        navbar.style.paddingBottom = '32px';
      }
    }
  
    window.addEventListener('scroll', checkScroll);
  
    checkScroll();
  });

  //slider
  document.addEventListener('DOMContentLoaded', () => {
    // hero slider
    const swiper = new Swiper('.swiper-container', {
      loop: true,
      navigation: {
        nextEl: '.hero-slider_arrows__nextbtn',
        prevEl: '.hero-slider_arrows__prevbtn',
      },
      effect: 'slide',
      slidesPerView: 1,
      spaceBetween: 30,
    });

    //top quality services
    var swiper1 = new Swiper('.service-section .swiper-container', {
        slidesPerView: 1,
        spaceBetween: 30,
        loop:true,
        navigation: {
            nextEl: '.service-section_arrows__nextbtn',
            prevEl: '.service-section_arrows__prevbtn',
        },
        breakpoints: {
            640: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 40,
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 50,
            },
        },
    });

    // client section
    const swiper2 = new Swiper('.clientsection .swiper-container', {
    loop: true,
    navigation: {
        nextEl: '.clientsection_arrows__nextbtn',
        prevEl: '.clientsection_arrows__prevbtn',
    },
    spaceBetween: 50,
    slidesPerView: 1,
    });

    //brand section
    var swiper3 = new Swiper('.brandsection .swiper-container', {
        slidesPerView: 5,
        spaceBetween: 30,
        breakpoints: {
            320: {
                slidesPerView: 2,
                spaceBetween: 10
            },
            767: {
                slidesPerView: 3,
                spaceBetween: 20
            },
            1024: {
                slidesPerView: 5,
                spaceBetween: 30
            }
        }
    });
    
    //blog post
    var swiper4 = new Swiper('.postsection .swiper', {
        slidesPerView: 1,
        loop: true,
        spaceBetween: 30,
        navigation: {
            nextEl: '.postsection_arrows__nextbtn',
            prevEl: '.postsection_arrows__prevbtn',
        },
        breakpoints: {
            640: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 2,
            },
        },
    });
  });

// counter section
document.addEventListener('DOMContentLoaded', () => {
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function formatNumberWithCommas(number) {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    function countUp(el) {
        const countTo = parseInt(el.getAttribute('data-count').replace(/,/g, ''), 10);
        const duration = 1000;
        const frameRate = 1000 / 60;
        const totalFrames = Math.round(duration / frameRate);
        let frame = 0;
        const count = () => {
            frame++;
            const progress = frame / totalFrames;
            const currentCount = Math.round(countTo * progress);
            el.textContent = formatNumberWithCommas(currentCount);
            if (frame < totalFrames) {
                requestAnimationFrame(count);
            } else {
                el.textContent = formatNumberWithCommas(countTo) + "+";
            }
        };
        count();
    }

    function handleScroll() {
        const counters = document.querySelectorAll('.counterup__number');
        counters.forEach(counter => {
            if (isElementInViewport(counter) && !counter.classList.contains('counted')) {
                countUp(counter);
                counter.classList.add('counted');
            }
        });
    }

    window.addEventListener('scroll', handleScroll);
    handleScroll();
});


//JS for back to top
document.addEventListener('DOMContentLoaded', function () {
    const backToTopButton = document.getElementById('back-to-top');
    function checkScrollPosition() {
        if (window.scrollY > 200) {
            backToTopButton.style.opacity = 1;
            backToTopButton.style.transform = 'scale(1)';
        } else {
            backToTopButton.style.opacity = 0;
            backToTopButton.style.transform = 'scale(0.8)';
        }
    }
    checkScrollPosition();
    document.addEventListener('scroll', checkScrollPosition);

    backToTopButton.addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});
