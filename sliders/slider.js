const testimonials = [
    {
        destination: "Ancient Pyramids",
        review: "The Pacific Grove Chamber of Commerce would like to thank eLab Communications and Mr. Will Elkadi for all the efforts and suggestions that assisted us in better positioning ourselves in.",
        user: "Measum Abbas"
    },
    {
        destination: "Eiffel Tower",
        review: "Visiting the Eiffel Tower was a dream come true. The view from the top is breathtaking, and the atmosphere is magical.",
        user: "Ayesha Khan"
    },
    {
        destination: "Great Wall of China",
        review: "Walking along the Great Wall was an unforgettable experience. The history and the scenery were absolutely stunning.",
        user: "Ali Raza"
    }
];


const destinationEl = document.getElementById("destination");
const reviewEl = document.getElementById("review");
const userEl = document.getElementById("user");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const dotsContainer = document.getElementById("dots");

let currentIndex = 0;
let intervalId;


function updateTestimonial(index) {
    const { destination, review, user } = testimonials[index];
    destinationEl.textContent = destination;
    reviewEl.textContent = review;
    userEl.textContent = user;
    updateDots(index);
}


function nextTestimonial() {
    currentIndex = (currentIndex + 1) % testimonials.length;
    updateTestimonial(currentIndex);
}


function prevTestimonial() {
    currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
    updateTestimonial(currentIndex);
}


function createDots() {
    testimonials.forEach((_, index) => {
        const dot = document.createElement("div");
        dot.className = "w-2 h-2 rounded-full bg-gray-500 cursor-pointer";
        dot.addEventListener("click", () => {
            currentIndex = index;
            updateTestimonial(currentIndex);
            resetInterval();
        });
        dotsContainer.appendChild(dot);
    });
}

function updateDots(activeIndex) {
    const dots = dotsContainer.children;
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = "w-2 h-2 rounded-full cursor-pointer " + (i === activeIndex ? "bg-white" : "bg-gray-500");
    }
}


function startInterval() {
    intervalId = setInterval(nextTestimonial, 3000);
}

function resetInterval() {
    clearInterval(intervalId);
    startInterval();
}


prevBtn.addEventListener("click", () => {
    prevTestimonial();
    resetInterval();
});
nextBtn.addEventListener("click", () => {
    nextTestimonial();
    resetInterval();
});


createDots();
updateTestimonial(currentIndex);
startInterval();