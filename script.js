let animationStared = false;
const startButton = document.getElementById("startButton");
const scoreCard = document.getElementById('scoreCard');
let score = 0;

startButton.addEventListener("click", () =>{
    animationStared = true;
    const btn = document.getElementsByClassName(".btn");
    if(animationStared){
        
        btn.classList.add("x");
    }
    else{
     
        btn.classList.remove("x");
    }
})