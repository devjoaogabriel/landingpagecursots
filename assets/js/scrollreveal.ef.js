ScrollAnimation = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 400,
    // reset: true
})

ScrollAnimation.reveal(`.heading`, {origin: 'left'})
ScrollAnimation.reveal(`.figure-ctr`, {delay: 500, origin: 'right'})
ScrollAnimation.reveal(`.title-white-bg, .heading-grid, .text-grid-desc, .responsive-table`, {delay: 200})
ScrollAnimation.reveal(`.desc-white-bg, .grid-img, .text_scroll`, {interval: 100})
ScrollAnimation.reveal(`.scrolleffect, .form-group, .footer-ef`, {origin: 'left', interval: 150})
ScrollAnimation.reveal(`.top_effect`, {origin: "top", interval: 100})