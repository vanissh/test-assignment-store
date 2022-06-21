const sliderWrap = document.querySelector('.slider__wrap'),
    mainSlide = document.querySelector('.slider__slide'),
    imgs = {
        0: 'img/shirt_main.jpeg',
        1: 'img/shirt_front.jpg',
        2: 'img/shirt_back.jpeg',
        3: 'img/shirt_inside.jpeg',
        4: 'img/another_shirt.jpeg',
    }

const slides = []

const pushSlides = () => {
    for(let key in imgs){
        const slide = document.createElement('div')
        slide.className = 'slider__item'
        slide.innerHTML = `<img class="slider__img" src="${imgs[key]}" alt="shirt">`
        slides.push(slide)
    }
}

pushSlides()
slides.forEach(item => sliderWrap.append(item))

let current = 1,
    length = slides.length,
    reserv = length - 3,
    size = 160

const showMain = (id) => {
    mainSlide.querySelector('img').src = `${imgs[id]}`
}

const nextSlide = () => {
    if(current > reserv){
        sliderWrap.style.transform = `translateY(${0}px)`
        current = 1
    } else {
        sliderWrap.style.transform = `translateY(-${size*current}px)`
        current++
    }
}

document.addEventListener('click', e => {

    let target = e.target

    if(target.closest('.slider__button')){
        nextSlide()
    }

    if(target.closest('.slider__item')){
        let slide = target.closest('.slider__item'),
            slideID

        slides.forEach((item, id) => {
            if(item === slide){
                slideID = id
            }
        })

        showMain(slideID)
    }
})
