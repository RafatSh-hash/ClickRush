const scoreCard = document.getElementById('scoreCard');
let score = 0;


for (let i = 1; i <= 10; i++) {
    const btn = document.getElementById(`btn${i}`);
    
    // Add a click event listener to each button
    btn.addEventListener('click', function () {
        // Change the background color to red
        btn.style.backgroundColor = 'red';
        score += 1;
        scoreCard.innerHTML = score;
        btn.innerHTML = "🫠";

    });
}