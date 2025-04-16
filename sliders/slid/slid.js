const destination = document.getElementById("destination");
const review = document.getElementById("review");
const user = document.getElementById("user");
const dots = document.querySelectorAll(".dot");

const clientReview = [
    {
        destination: "Ancient Pyramids",
        review: "The Pacific Grove Chamber of Commerce would like to thank eLab Communications and Mr. Will Elkadi for all the efforts and suggestions that assisted us in better positioning ourselves in",
        name:"Measum Abbas"
    },
    {
        destination: "Smith",
        review: "The Pacific Grove Chamber of Commerce would like to thank eLab Communications and Mr. Will Elkadi for all the efforts and suggestions that assisted us in better positioning ourselves in",
        name:"hasnain Abbas"
    },
    {
        destination: "Alice Johnson",
        review: "The Pacific Grove Chamber of Commerce would like to thank eLab Communications and Mr. Will Elkadi for all the efforts and suggestions that assisted us in better positioning ourselves in",
        name: "Ansar"
    }
];

setInterval(changeContent, 1000);


// dots.forEach(dot, index => {
//     dot.classList.add("active");
// });

function changeContent() {
    const randomNumber = Math.floor(Math.random()  * clientReview.length);
    const randomReview = clientReview[randomNumber];

    // currentIndex = (currentIndex + 1) % clientReview.length;
    
    destination.textContent = randomReview.destination;
    review.textContent = randomReview.review;
    user.textContent = randomReview.name;
    console.log(randomNumber);

    // dot.classList.remove("active");
}