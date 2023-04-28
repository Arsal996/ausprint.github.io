var swiper = new Swiper(".mySwiper7", {
    spaceBetween: 20,
    slidesPerView: 3,
    freeMode: true,
    watchSlidesProgress: true,
});

var swiper2 = new Swiper(".mySwiper6", {
    spaceBetween: 10,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    thumbs: {
        swiper: swiper,
    },
});


const quantityInput = document.getElementById('quantity');
const minusButton = document.querySelector('.minus-btn');
const plusButton = document.querySelector('.plus-btn');

minusButton.addEventListener('click', () => {
    if (quantityInput.value > 1) {
        quantityInput.value--;
    }
});

plusButton.addEventListener('click', () => {
    quantityInput.value++;
});


var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}


let descBtn = document.getElementById('desc-btn');
let techBtn = document.getElementById('tech-btn');
let reviewBtn = document.getElementById('review-btn');

let descContent = document.getElementById('description');
let techContent = document.getElementById('tech-spec');
let reviewContent = document.getElementById('reviews');

descBtn.onclick = () => {
    descContent.style.display = "block";
    techContent.style.display = "none";
    reviewContent.style.display = "none";
    descBtn.classList.add('active-content-btn');
    techBtn.classList.remove('active-content-btn');
    reviewBtn.classList.remove('active-content-btn');
}

techBtn.onclick = () => {
    descContent.style.display = "none";
    techContent.style.display = "block";
    reviewContent.style.display = "none";
    descBtn.classList.remove('active-content-btn');
    techBtn.classList.add('active-content-btn');
    reviewBtn.classList.remove('active-content-btn');
}

reviewBtn.onclick = () => {
    descContent.style.display = "none";
    techContent.style.display = "none";
    reviewContent.style.display = "block";
    descBtn.classList.remove('active-content-btn');
    techBtn.classList.remove('active-content-btn');
    reviewBtn.classList.add('active-content-btn');
}