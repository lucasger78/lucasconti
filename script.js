const menu = document.querySelector('#menu-icon')
const navList = document.querySelector('.navlist')

menu.onclick = ()=>{
    menu.classList.toggle('bx-x')
    navList.classList.toggle('open')
}

const sr = ScrollReveal({
    distance: '65px',
    duration: 2000,
    delay: 450,
    reset: true
})

sr.reveal('.hero-text', {delay: 200, origin: 'top'})
sr.reveal('.hero-img', {delay: 450, origin: 'top'})
sr.reveal('.icons', {delay: 400, origin: 'left'})
sr.reveal('.scroll-down', {delay: 300, origin: 'right'})
sr.reveal('.about-p', {delay: 300, origin: 'right'})
sr.reveal('.aboutTitle', {delay: 250, origin: 'left'})
sr.reveal('.formacionTitle', {delay: 250, origin: 'top'})
sr.reveal('.formacionUl', {delay: 450, origin: 'right'})
sr.reveal('.skillsTitle', {delay: 450, origin: 'left'})
sr.reveal('.skillsUl', {delay: 350, origin: 'top'})
sr.reveal('.icons-skills', {delay: 250, origin: 'right'})
sr.reveal('.icons-skills-2', {delay: 400, origin: 'top'})
sr.reveal('.icons-skills-3', {delay: 350, origin: 'left'})