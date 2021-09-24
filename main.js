// DOM document Object module
//Abre e fecha o menu ao clicar no icone 
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
    element.addEventListener('click',
        function () {
            nav.classList.toggle('show')
        })
}


//Quando clicar em um item do menu, esconder o menu

const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
    link.addEventListener('click',
        () => {
            nav.classList.remove('show')
        }
    )
}

//Mudar o header da pagina quando der scrollbar
const header = document.querySelector('#header')
const navHeight = header.offsetHeight

window.addEventListener('scroll', () => {
    if (window.scrollY > navHeight) {
        header.classList.add('scroll')
    } else {
        header.classList.remove('scroll')
    }
})

/* testimonials slider swiper carrousel */

const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    pagination: {
        el: '.swiper-pagination'
    },
    mousewheel: true,
    keyboard: true
})

/*ScrollReveal: mostar elementos quando der scroll na página*/
const scrollReveal = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 700,
    reset: true
})

scrollReveal.reveal(
    `#home .image, #home .text, 
    #about .image, #about .text, 
    #services header, #services .card, 
    #testimonials header, #testimonials .testimonials
    #contact .text, #contact .links
    `,
    { interval: 100 }
)