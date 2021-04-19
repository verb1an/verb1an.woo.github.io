document.addEventListener('DOMContentLoaded', function() {
    mobMenu();
    slider();
})

const slider = () => {
    const items = document.querySelectorAll('.sl__item');
    const controlls = document.querySelectorAll('.slider__controls .sl_cont');
    let active = 0;

    controlls.forEach((el) => {
        el.addEventListener('click', function() {
            if( el.classList.contains('back') ) {
                move(false);
            }else if( el.classList.contains('forward') ) {
                move(true);
            }  

            
        })
    })

    function move(cond) {
        items.forEach((el, i) => {
            el.classList.remove('pre', 'aft');
            if(el.classList.contains('active')) {
                active = i;
                el.classList.remove('active');    
            }
        })

        if(cond) {
            if(active < items.length-1) active++
            else active = 0
        }else{
            if(active > 0) active--
            else active = items.length-1
        }

        console.log(active)
        active-1 > -1 ? items[active-1].classList.add('pre') : items[items.length-1].classList.add('pre');
        items[active].classList.add('active')
        active+1 < items.length ? items[active+1].classList.add('aft') : items[0].classList.add('aft');
    }

}

const mobMenu = () => {
    const html = document.querySelector('html');
    const burger = document.querySelector('.burger');
    const menu = document.querySelector('.menu');
    const spanbg = document.querySelector('.circlebg');
    const items = document.querySelector('.menu a');

    burger.addEventListener('click', function() {
        res();
    })
    items.addEventListener('click', function() {
        res();
    })

    function res() {
        menu.classList.toggle('mobmenu-active');
        spanbg.classList.toggle('active');
        html.classList.toggle('hidden');
    }
}