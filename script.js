
let animationStarted = false;
const startButton = document.getElementById("startButton");
const btns = document.querySelectorAll(".btn");
const scoreCard = document.getElementById('scoreCard');
let score = 0;


startButton.addEventListener("click", () => {
    animationStarted = !animationStarted;
    
    if (animationStarted) {
        
        btns.forEach(btn => {
            btn.classList.remove("x");
        });
        
        startButton.textContent = "Start"; 
        addClickEventListeners();

    } else {
       
        btns.forEach(btn => {
            btn.classList.add("x");
        });
        startButton.textContent = "Stop";
        removeEventListener() // Change button text to "Stop"
    }


});


function addClickEventListeners(){
    for(let i = 1; i <= 15; i++) {

        const smileyButton = document.getElementById(`btn${i}`)
    
        smileyButton.addEventListener("click", () => {
            console.log("Hello")
             // Check if animation is playing
                smileyButton.style.backgroundColor = "red";
                smileyButton.innerText = "🫠";
                score++;
                scoreCard.textContent = score;
            
        })
    
    }
}

function removeEventListener(){



}