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
    [`"FIGHTING WITH THE POWER OF THE LASER DRAGON FIRE"`, "Power of the Laser Dragon Fire, Gloryhammer"],
    [`"I WILL BE FEARLESS AND STRONG INTO THE SKIES AND BEYOND"`, "To the Skies and Beyond, Brothers of Metal"],
    [`"THERE IS A STAR IN THE SKY, SHINING UP, LEADING MY WAY"`, "Rising High, Serenity"],
    [`"GLORIOUS, RISE VICTORIOUS, SHINE EUPHORIOUS"`, "Dark Crystal, Power Paladin"],
    [`"REMEMBER THE HEROES WHO DIED IN THE WAR OF SPACE DUNDEE, LOST IN ANOTHER GALAXY"`, "Power of the Laser Dragon Fire, Gloryhammer"],
    [`"You will see the starborn rise again when the world has come to an end"`, "Rise Again, Symphony of Tragedy"],
    [`"I hope my path will be a guiding light for someone to follow"`, "The Roar of the Spark, Naoki Hashimoto"],
    [`"Remember the strife makes us stronger when hard times get longer"`, "Fantasy, Aviators"],
    [`"Rise through the ice and a new dawn will arise"`, "Night of Winterlight, Twilight Force"]
];

let descList = [
    "I am a FIRST Member and Volunteer",
    "I am an aspiring author",
    "I am a future VFX artist",
    "I am a classic style enthusiast",
    "I am a pinball addict",
    "I am a really cool guy",
    "I am a Heavy Metal Darklord Crasher"
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

(function websitePeriodic () {
    const interval1 = setInterval(function() {
        if (curSlide1 === maxSlide1) {
            curSlide1 = 0;
        } else {
            curSlide1++;
        }
    
    //   move slide by -100%
        slides1.forEach((slide, indx) => {
            slide.style.transform = `translateX(${100 * (indx - curSlide1)}%)`;
        });

        if (curSlide2 === maxSlide2) {
            curSlide2 = 0;
        } else {
            curSlide2++;
        }
    
        //   move slide by -100%
        slides2.forEach((slide, indx) => {
            slide.style.transform = `translateX(${100 * (indx - curSlide2)}%)`;
        });
    }, 15000)
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
        
        console.log("-");
        getQuote();
        getDesc();
    
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

let x = 0;

function getQuote () {
    if (x >= quotesList.length-1) {
        for (let i = quotesList.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            var temp = quotesList[i];
            quotesList[i] = quotesList[j];
            quotesList[j] = temp;
        }
        var temp = quotesList[0];
        quotesList[0] = quotesList[quotesList.length - 1];
        quotesList[quotesList.length - 1] = temp;
        x = 0;
    } else {
        console.log(x);
        headerQuote.innerText = quotesList[x][0];
        headerSource.innerText = quotesList[x][1];
        x ++;
    }
}

let v = 0;

function getDesc () {
    if (v >= descList.length-1) {
        for (let i = descList.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            var temp2 = descList[i];
            descList[i] = descList[j];
            descList[j] = temp2;
        }
        var temp2 = descList[0];
        descList[0] = descList[descList.length - 1];
        descList[descList.length - 1] = temp2;
        v = 0;
    } else {
        console.log(v);
        amDescriptor.innerText = descList[v];
        v ++;
    }
}


// code for carousel

// Select all slides
const slides1 = document.querySelectorAll(".slide1");

// loop through slides and set each slides translateX property to index * 100% 
slides1.forEach((slide, indx) => {
    slide.style.transform = `translateX(${indx * 100}%)`;
});

// select next slide button
const nextSlide1 = document.querySelector(".btn-next1");

// current slide counter
let curSlide1 = 0;
// maximum number of slides
let maxSlide1 = slides1.length - 1;

// add event listener and navigation functionality
nextSlide1.addEventListener("click", function () {
    // check if current slide is the last and reset current slide
    if (curSlide1 === maxSlide1) {
        curSlide1 = 0;
    } else {
        curSlide1++;
    }

//   move slide by -100%
    slides1.forEach((slide, indx) => {
        slide.style.transform = `translateX(${100 * (indx - curSlide1)}%)`;
    });
});

// select prev slide button
const prevSlide1 = document.querySelector(".btn-prev1");

// add event listener and navigation functionality
prevSlide1.addEventListener("click", function () {
    // check if current slide is the first and reset current slide to last
    if (curSlide1 === 0) {
        curSlide1 = maxSlide1;
    } else {
        curSlide1--;
    }

    //   move slide by 100%
    slides1.forEach((slide, indx) => {
        slide.style.transform = `translateX(${100 * (indx - curSlide1)}%)`;
    });
});


// Carousel but again ahggg

// Select all slides
const slides2 = document.querySelectorAll(".slide2");

// loop through slides and set each slides translateX property to index * 100% 
slides2.forEach((slide, indx) => {
    slide.style.transform = `translateX(${indx * 100}%)`;
});

// select next slide button
const nextSlide2 = document.querySelector(".btn-next2");

// current slide counter
let curSlide2 = 0;
// maximum number of slides
let maxSlide2 = slides2.length - 1;

// add event listener and navigation functionality
nextSlide2.addEventListener("click", function () {
    // check if current slide is the last and reset current slide
    if (curSlide2 === maxSlide2) {
        curSlide2 = 0;
    } else {
        curSlide2++;
    }

//   move slide by -100%
    slides2.forEach((slide, indx) => {
        slide.style.transform = `translateX(${100 * (indx - curSlide2)}%)`;
    });
});

// select prev slide button
const prevSlide2 = document.querySelector(".btn-prev2");

// add event listener and navigation functionality
prevSlide2.addEventListener("click", function () {
    // check if current slide is the first and reset current slide to last
    if (curSlide2 === 0) {
        curSlide2 = maxSlide2;
    } else {
        curSlide2--;
    }

    //   move slide by 100%
    slides2.forEach((slide, indx) => {
        slide.style.transform = `translateX(${100 * (indx - curSlide2)}%)`;
    });
});


// Let's do this one more time

// Select all slides
const slides3 = document.querySelectorAll(".slide3");

// loop through slides and set each slides translateX property to index * 100% 
slides3.forEach((slide, indx) => {
    slide.style.transform = `translateX(${indx * 100}%)`;
});

// select next slide button
const nextSlide3 = document.querySelector(".btn-next3");

// current slide counter
let curSlide3 = 0;
// maximum number of slides
let maxSlide3 = slides3.length - 1;

// add event listener and navigation functionality
nextSlide3.addEventListener("click", function () {
    // check if current slide is the last and reset current slide
    if (curSlide3 === maxSlide3) {
        curSlide3 = 0;
    } else {
        curSlide3++;
    }

//   move slide by -100%
    slides3.forEach((slide, indx) => {
        slide.style.transform = `translateX(${100 * (indx - curSlide3)}%)`;
    });
});

// select prev slide button
const prevSlide3 = document.querySelector(".btn-prev3");

// add event listener and navigation functionality
prevSlide3.addEventListener("click", function () {
    // check if current slide is the first and reset current slide to last
    if (curSlide3 === 0) {
        curSlide3 = maxSlide3;
    } else {
        curSlide3--;
    }

    //   move slide by 100%
    slides3.forEach((slide, indx) => {
        slide.style.transform = `translateX(${100 * (indx - curSlide3)}%)`;
    });
});