
    // open & close nav menu
    const menuBtn = document.querySelector("#menu-btn");
    const closeBtn = document.querySelector("#close-btn");
    const menu = document.querySelector("nav .container ul");
    // open sidebar
    menuBtn.addEventListener('click', () => {
    menu.style.display = 'block';
    menuBtn.style.display = 'none';
    closeBtn.style.display = 'inline-block';
    })
    // close sidebar
    closeBtn.addEventListener('click', () => {
    menu.style.display = 'none';
    closeBtn.style.display = 'none';
    menuBtn.style.display = 'inline-block';
    })


    document.addEventListener('DOMContentLoaded', () => {
    const faqs = document.querySelectorAll('section#faqs article');

    faqs.forEach(faq => {
        faq.addEventListener('click', () => {
        // If you want only one open at a time, close others first:
        faqs.forEach(other => {
            if (other !== faq && other.classList.contains('open')) {
            other.classList.remove('open');
            const otherIcon = other.querySelector('.icon i');
            if (otherIcon) otherIcon.className = 'ri-add-large-line';
            }
        });

        // Toggle the clicked article
        faq.classList.toggle('open');

        // Update the icon inside the clicked article
        const icon = faq.querySelector('.icon i');
        if (icon) {
            if (faq.classList.contains('open')) {
            icon.className = 'ri-subtract-line';
            } else {
            icon.className = 'ri-add-large-line';
            }
        }
        });
    });
    });


    document.addEventListener('DOMContentLoaded', () => {
    const nav = document.querySelector('nav');
    if (!nav) return;

    const onScroll = () => {
        nav.classList.toggle('window-scroll', window.scrollY > 0);
    };

    // set initial state (in case page is loaded scrolled)
    onScroll();

    // use passive listener for better performance
    window.addEventListener('scroll', onScroll, { passive: true });
    });

