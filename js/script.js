// Slide data (add or remove slides here)
const slidesData = [
    {
        image: "images/Projects/atta/atta_cover.jpg",
        caption: "ATTA Reimagined",
        link: "atta_project.html"
    },
    {
        image: "images/home/city_placeholder.jpg",
        caption: "Design Capstone",
        link: "projects.html"
    },
    {
        image: "images/Projects/des240/240_cover.png",
        caption: "DES240",
        link: "des240.html"
    },
    {
        image: "images/Projects/des243/image.png",
        caption: "DES243",
        link: "des243.html"
    },
    {
        image: "images/home/totoro_placeholder.jpg",
        caption: "COMPSCI230",
        link: "projects.html"
    },
    {
        image: "images/home/totoro_placeholder.jpg",
        caption: "COMPSCI235",
        link: "projects.html"
    },
    {
        image: "images/home/totoro_placeholder.jpg",
        caption: "COMPSCI331",
        link: "projects.html"
    },
];

// Get the slideshow and dots containers
const slideshowContainer = document.querySelector('.slideshow-container');
const dotsContainer = document.querySelector('.dots-container');

// Function to generate slides
function generateSlides() {
    slidesData.forEach((slide, index) => {
        // Create slides
        const slideElement = document.createElement('div');
        slideElement.classList.add('mySlides', 'fade');
        slideElement.innerHTML = `
            <div class="numbertext">${index + 1} / ${slidesData.length}</div>
            <img src="${slide.image}" class="project_img">
            <div class="text">${slide.caption}</div>
            <div class="middle">
                <a href="${slide.link}">
                    <button class="box_text project_button">Enter</button>
                </a>
            </div>
        `;
        slideshowContainer.appendChild(slideElement);

        // Create dots
        const dotElement = document.createElement('span');
        dotElement.classList.add('dot');
        dotElement.setAttribute('onclick', `currentSlide(${index + 1})`);
        dotsContainer.appendChild(dotElement);
    });

    // Add navigation arrows
    slideshowContainer.innerHTML += `
        <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
        <a class="next" onclick="plusSlides(1)">&#10095;</a>
    `;
}

// Call the function to generate slides
generateSlides();

// Slideshow functionality
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    const slides = document.querySelectorAll('.mySlides');
    const dots = document.querySelectorAll('.dot');

    if (n > slides.length) slideIndex = 1;
    if (n < 1) slideIndex = slides.length;

    slides.forEach(slide => slide.style.display = 'none');
    dots.forEach(dot => dot.classList.remove('active'));

    slides[slideIndex - 1].style.display = 'block';
    dots[slideIndex - 1].classList.add('active');
}