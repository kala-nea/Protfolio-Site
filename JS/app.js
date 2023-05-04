// code for quotes

// list of quotes to choose from
let quotesList = [
    [`"FACE THE SUN AND THE SHADOWS WILL ALL FALL BEHIND"`, "Shadows, Wolves at the Gate"],
    [`"MAN I'M NOT GONNA LET THESE MATERIAL THINGS GET IN MY WAY Y'ALL"`, "Lose My Soul, TobyMac"],
    [`"BROUGHT ON BY HOLY HUNTERS, OLD ONES, AND DREAMS OF THUNDER"`, "Summon the Choir, Aviators"],
    [`"NOW LEAD ME TO THE STARS, ATOMIC FLAME IGNITE MY HEART"`, "Universe on Fire, Gloryhammer"],
    [`"WHY DO WE ONLY CALL YOUR NAME WHEN THERE'S NO ONE ELSE TO CALL?"`, "As the World Bleeds, Theocracy"],
    [`"I AM THE LOYAL FRIEND WHOSE HEART WILL NEVER LET YOU DOWN"`, "I Am, Theocracy"],
    [`"LEARN TO GROW, GROW TO BE, A FLESH AND BLOOD THEOCRACY"`, "Theocracy, Theocracy"],
    [`"NOW WE'RE BUILDING BETTER WORLDS ON THE ASHES OF THE PAST"`, "Building Better Worlds, Aviators"],
    [`"NO MATTER WHERE YOU ARE, THEY'LL SOON REVEAL THEIR NAME"`, "Diamanti, Temperance"],
    [`"FIGHTING GRAVE INJUSTICE KNOWING WHAT WE'RE MADE OF"`, "Holy Ground, Aviators"],
    [`"THE POWER OF WILL CAN DEFEAT ANYTHING, YOU'RE UNBREAKABLE"`, "Roar of the Underdog, Dynazty"],
    [`"ALL WE HAD WAS OUR FAITH, BUT THAT'S ALL THAT YOU NEED IN THE DARK"`, "Fall of the Eternal Winter, Twilight Force"],
    [`"FOLLOW THE PATH OF LIGHT, IT WILL GUIDE YOU THROUGH HARD TIMES"`, "Blade of Immortal Steel, Twilight Force"],
    [`"I KEEP YOUR MEMORY IN MY MIND, ONE DAY I'LL REPAY IN KIND"`, "Evening Star, Tyr"],
    [`"I MIGHT BE A FOOL, BUT I'LL FIND A WAY TO SHARE MY LOVE WITH YOU"`, "Fairy Tales for the Stars, Temperance"],
    [`"BY THE POWER OF THIS AMULET I WEILD, I'LL CROSS THE THRESHOLD TO A UNIVERSE OF STEEL"`, "Fly Away, Gloryhammer"],
    [`"MY FORCES CONSPIRE TO BRING BACK THE WARMTH OF YOUR SMILE"`, "Silent Tears of Frozen Princess, Gloryhammer"],
    // [`"That's whats up"`, "Daniel Gaytan"],
];

let descList = [
    "I am a FIRST Member and Volunteer",
    "I am an aspiring author",
    "I am a future VFX artist",
    "I am a classic style enthusiast",
    "I am a pinball addict",
    "I am a really cool guy"
];

// getting the html elements for the quote and source
let headerQuote = document.getElementById("headerQuote");
let headerSource = document.getElementById("headerSource");
let amDescriptor = document.getElementById("amDescriptor");

// make quote change every second or two
(function websitePeriodic () {
    const interval = setInterval(function() {
        changeQuote();
    }, 7500)
})();

// function to visually change
function changeQuote () {
    // make fade out
    headerQuote.classList.add("quoteOut");
    headerSource.classList.add("quoteOut");
    amDescriptor.classList.add("descOut");

    setTimeout(()=>{
        headerQuote.classList.remove("quoteOut");
        headerSource.classList.remove("quoteOut");
        amDescriptor.classList.remove("descOut");
        
        getQuote();
    
        // make fade in
        headerQuote.classList.add("quoteIn");
        headerSource.classList.add("quoteIn");
        amDescriptor.classList.add("descIn");

        setTimeout(()=>{
            headerQuote.classList.remove("quoteIn");
            headerSource.classList.remove("quoteIn");
            amDescriptor.classList.remove("descIn");
        },1000)
    },1000);
}

// function to change quote and source
function getQuote () {
    // random number determines which line of list
    let quoteNum = Math.floor(Math.random() * (quotesList.length - 1));
    let descNum = Math.floor(Math.random() * (descList.length - 1))

    // change text to the quote and source respectively
    // console.log(quotesList[quoteNum][0]);
    // console.log(quotesList[quoteNum][1]);
    headerQuote.innerText = quotesList[quoteNum][0];
    headerSource.innerText = quotesList[quoteNum][1];
    amDescriptor.innerText = descList[descNum];
}


// also change if click
headerQuote.addEventListener("click", changeQuote);
headerSource.addEventListener("click", changeQuote);


// code for carousel

// Select all slides
const slides = document.querySelectorAll(".slide");

// loop through slides and set each slides translateX property to index * 100% 
slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${indx * 100}%)`;
});

// select next slide button
const nextSlide = document.querySelector(".btn-next");

// current slide counter
let curSlide = 0;
// maximum number of slides
let maxSlide = slides.length - 1;

// add event listener and navigation functionality
nextSlide.addEventListener("click", function () {
    // check if current slide is the last and reset current slide
    if (curSlide === maxSlide) {
        curSlide = 0;
    } else {
        curSlide++;
    }

//   move slide by -100%
    slides.forEach((slide, indx) => {
        slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
    });
});

// select prev slide button
const prevSlide = document.querySelector(".btn-prev");

// add event listener and navigation functionality
prevSlide.addEventListener("click", function () {
    // check if current slide is the first and reset current slide to last
    if (curSlide === 0) {
        curSlide = maxSlide;
    } else {
        curSlide--;
    }

    //   move slide by 100%
    slides.forEach((slide, indx) => {
        slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
    });
});





