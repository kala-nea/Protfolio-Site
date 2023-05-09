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
    [`"FIGHTING WITH THE POWER OF THE ANCIENT, HOLY, TRAGIC, RAGING LASER DRAGON FIRE"`, "Power of the Laser Dragon Fire, Gloryhammer"],
    [`"I WILL BE FEARLESS AND STRONG INTO THE SKIES AND BEYOND"`, "To the Skies and Beyond, Brothers of Metal"],
    [`"THERE IS A STAR IN THE SKY, SHINING UP, LEADING MY WAY"`, "Rising High, Serenity"],
    [`"GLORIOUS, RISE VICTORIOUS, SHINE EUPHORIOUS"`, "Dark Crystal, Power Paladin"],
    [`"REMEMBER THE HEROES WHO DIED IN THE WAR OF SPACE DUNDEE, LOST IN ANOTHER GALAXY"`, "Power of the Laser Dragon Fire, Gloryhammer"],
    ["You will see the starborn rise again when the world has come to an end", "Rise Again, Symphony of Tragedy"]
];

// getting the html elements for the quote and source
let headerQuote = document.getElementById("headerQuote");
let headerSource = document.getElementById("headerSource");

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
    
    setTimeout(()=>{
        headerQuote.classList.remove("quoteOut");
        headerSource.classList.remove("quoteOut");
        
        console.log("-");
        getQuote();
    
        // make fade in
        headerQuote.classList.add("quoteIn");
        headerSource.classList.add("quoteIn");

        setTimeout(()=>{
            headerQuote.classList.remove("quoteIn");
            headerSource.classList.remove("quoteIn");
        },1000)
    },1000);
}

// begin testing
// random list, goes through all options before restarting

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

// skeleton
// function shuffleTeams(){
//     for (var i = teams.length - 1; i > 0; i--) {
//         var j = Math.floor(Math.random() * (i + 1));
//         var temp = teams[i];
//         teams[i] = teams[j];
//         teams[j] = temp;
//     }
//     var temp = teams[0];
//     teams[0] = teams[teams.length - 1];
//     teams[teams.length - 1] = temp;
// }
// thx colbo