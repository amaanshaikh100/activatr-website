const illustration = document.querySelector("#fortune-wheel");
const ellipse = document.querySelector("#ellipse");
const campaignTitle = document.querySelector(".campaign-title");

const menuBar = document.querySelector(".nav__menu-bar");
const cross = document.querySelector(".nav__cross");
const navLinks = document.querySelector(".nav__links");

const sliderArrow = document.querySelector(".metric__arrow");
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dots");
const slider = document.querySelector(".metric__slider");

let slideIndex = 0;

slides[slideIndex].classList.add("active-slider");
dots[slideIndex].classList.add("active-dot");
let SLIDERMOVE = 30;

sliderArrow.addEventListener("click", function() {
    
    if(SLIDERMOVE === 150) SLIDERMOVE = 0;

    if(!(slideIndex === 0)){
        slider.style.transform = `translateX(-${SLIDERMOVE + "rem"})`;
        SLIDERMOVE += 30;
    }
    
    if (slideIndex === slides.length-1) {
        slideIndex = -1;
    }
    
    slideIndex++;

    slides.forEach((slide) => {
        slide.classList.remove("active-slider");
    });

    dots.forEach((dot) => {
        dot.classList.remove("active-dot");
    });

    dots[slideIndex].classList.add("active-dot");
    slides[slideIndex].classList.add("active-slider");
});

// ********************************************
navLinks.classList.add("active");

menuBar.addEventListener("click", function(e) {
    e.preventDefault();
    navLinks.classList.toggle("active");
});

cross.addEventListener("click", function(e) {
    e.preventDefault();
    navLinks.classList.toggle("active");
});

// details about campaigns - images, title and color
const campaignDetails = [
    {
        img: "imgs/fortune-wheel-1.svg",
        ellipse: "imgs/ellipse-1.svg",
        title: "Gamification",
        color: "#91D300",
    },
    {
        img: "imgs/quiz-2.svg",
        ellipse: "imgs/ellipse-2.svg",
        title: "Quiz",
        color: "#4AEFDF",
    },
    {
        img: "imgs/photo-3.svg",
        ellipse: "imgs/ellipse-3.svg",
        title: "Photo Activity (Pictivtr)",
        color: "#F3CB3B",
    },
    {
        img: "imgs/pledge-4.svg",
        ellipse: "imgs/ellipse-4.svg",
        title: "Educational Training",
        color: "#ffffff",
    },
    {
        img: "imgs/video-quiz-5.svg",
        ellipse: "imgs/ellipse-5.svg",
        title: "Pledge",
        color: "#2A9BCB",
    },
    {
        img: "imgs/training-6.svg",
        ellipse: "imgs/ellipse-6.svg",
        title: "Survey",
        color: "#DEDFE1",
    },
    {
        img: "imgs/survey-7.svg",
        ellipse: "imgs/ellipse-7.svg",
        title: "Video Based Quiz",
        color: "#002DAE",
    },
];

let index = 0;

function campaignAnimation() {
    let intervalId = setInterval(function() {

    if (index < campaignDetails.length) {
        // this variable contains the object of campaign details with the index
        const obj = campaignDetails[index]; 

        illustration.src = obj.img;
        ellipse.src = obj.ellipse;
        campaignTitle.textContent = obj.title;
        campaignTitle.style.color = obj.color;

        index++;
    } else if (index === campaignDetails.length) {
        index = 0;
    } else {
        clearInterval(intervalId); 
    }
}, 1000);
}

campaignAnimation();

// **********************************************
const campaignContents = document.querySelectorAll(".campaign-content");
const campaignBox = document.querySelector(".campaign-box");
const btnNext = document.querySelector(".next-btn");
const btnPrevious = document.querySelector(".back-btn");
const campaignLinks = document.querySelectorAll(".campaign_details-link");

campaignContents.forEach(content => {
    content.style.display = 'none';
});

let contentIndex = 0;

function updateContent() {
    // Clear campaignBox before appending new content
    campaignBox.innerHTML = '';

    const newItem = campaignContents[contentIndex];
    campaignBox.appendChild(newItem);

    campaignContents[contentIndex].style.display = "block";
    campaignLinks[0].classList.add("active-link");

    // Update button visibility based on contentIndex
    if (contentIndex <= 0) {
        btnPrevious.style.display = 'none';
    } else {
        btnPrevious.style.display = 'block';
    }

    if (contentIndex >= campaignContents.length - 1) {
        btnPrevious.style.display = "none";
        btnNext.innerHTML = "SEND";
    } else {
        btnNext.innerHTML = 'Next';
    }
}

btnPrevious.addEventListener('click', function() {
    if (contentIndex > 0) {
        campaignLinks[contentIndex].classList.remove("active-link");
        contentIndex -= 1;
        updateContent();
    }
});

btnNext.addEventListener('click', function() {
    if (contentIndex < campaignContents.length - 1) {
        contentIndex += 1;
        campaignLinks[contentIndex].classList.add("active-link");
        updateContent();
    }
});

updateContent();