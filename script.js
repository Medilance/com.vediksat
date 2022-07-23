function menu() {
    const humbuerger = document.querySelector('.humburger');
    const humbuergerLine = document.querySelectorAll('.humburger-line');

    humbuergerLine.forEach((element) => {
        element.classList.toggle('menu');
    });

    const navbar = document.querySelector('.nav__list__container')
    navbar.classList.toggle('nav__list__container-menu');
    humbuerger.classList.toggle('humburger-menu');;
}


window.addEventListener('scroll', () => {
    const section_2 = document.querySelector('.vhs-2');
    const section_2_element = document.querySelectorAll('.vhs-2-1');
    const contentHeight = section_2.getBoundingClientRect().top;

    const screenPosition = window.innerHeight;

    if (contentHeight < screenPosition) {
        section_2_element.forEach(e => {
            e.classList.add('vhs-2-1_active');
        })
    }
});