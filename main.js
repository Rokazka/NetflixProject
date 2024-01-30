const menuWysowane = document.querySelector(".nav_bar");
const image1 = document.querySelector('.img1');
const image2 = document.querySelector('.img2');
const image3 = document.querySelector('.img3');
const image4 = document.querySelector('.img4');
const wrapper = document.querySelector('.wrapper');
const left = document.querySelector('.left');
const right = document.querySelector('.right');
const courses = document.querySelector('.courses');
const left_two_row = document.querySelector('.left_two_row');
const right_two_row = document.querySelector('.right_two_row');
const courses_two_row = document.querySelector('.courses_two_row');
const textOne = document.querySelector('.text_one');
const textTwo = document.querySelector('.text_two');
const TextThree = document.querySelector('.text_three');
const complete = document.querySelector('.complete');
const main_courses = document.querySelector('.main_courses');
const logo_user = document.querySelector('.logo_user');
const imageBox = document.querySelectorAll('.image-box');
const span = document.querySelector('.message_i span');





for (let i = 0; i < imageBox.length; i++) {
    imageBox[i].addEventListener('click', () => {
        images();
    })
}

function OnLoadimages() {
    let imageNumbers = localStorage.getItem('images');


    if (imageNumbers) {

        span.innerText = imageNumbers;
    }

}

function images() {
    let imageNumbers = localStorage.getItem('images');
    imageNumbers = parseInt(imageNumbers);

    if (imageNumbers) {
        localStorage.setItem("images", imageNumbers + 1);
        span.innerText = imageNumbers + 1;
    } else {
        localStorage.setItem("images", 1);
        span.innerText = 1;

    }


}

function ScrollDown() {
    if (window.scrollY >= 150) {
        logo_user.style.display = "none"

    } else if (window.scrollY <= 150) {
        logo_user.style.display = "flex"


    }
}

window.addEventListener("scroll", ScrollDown);


menuWysowane.addEventListener('click', () => {

    menuWysowane.classList.toggle('active');

    wrapper.classList.toggle('active');
    main_courses.classList.toggle('active');


})

function changeImage() {


    wrapper.classList.toggle('img_1');
    textOne.innerHTML = 'iOS & Swift - The';
    textTwo.innerHTML = "Complete iOS App"
    TextThree.innerHTML = "Development Bootcamp"
    complete.innerHTML = "30% Completed";


}

function changeTwoImage() {
    wrapper.classList.toggle("img_2")
    textOne.innerHTML = 'Angular -The Complete Course';
    textTwo.innerHTML = ".from(selector, {duration: 1, fromVars})"
    TextThree.innerHTML = ".)"
    complete.innerHTML = "0% Completed";

}

function changeTreeImage() {
    wrapper.classList.toggle("img_3")
    textOne.innerHTML = 'Symfony Web Development';
    textTwo.innerHTML = "Complete Guide Beginner"
    TextThree.innerHTML = "To Advance"
    complete.innerHTML = "0% Completed";

}

function changeFourImage() {
    wrapper.classList.toggle("img_4");
    textOne.innerHTML = 'IPhone -Nowy Model';
    textTwo.innerHTML = "Chcesz go miec"
    TextThree.innerHTML = "Nie ryzykuj ;)"
    complete.innerHTML = "0% Completed";

}



left.addEventListener('click', () => {
    courses.scrollLeft += 200;
});
right.addEventListener('click', () => {
    courses.scrollLeft -= 200;
});
left_two_row.addEventListener('click', () => {
    courses_two_row.scrollLeft += 200;
});
right_two_row.addEventListener('click', () => {
    courses_two_row.scrollLeft -= 200;
});



image2.addEventListener('click', changeTwoImage);

image1.addEventListener('click', changeImage);
image3.addEventListener('click', changeTreeImage);
image4.addEventListener('click', changeFourImage);
OnLoadimages();