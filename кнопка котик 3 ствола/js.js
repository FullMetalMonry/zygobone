let colors = ['yellow', 'green', 'red', 'blue', 'pink']; 
let currentIndex = 0;
let cycleCount = 0;
let maxCycles = 2;


function changeColor(element) {
    console.log("Current index:", currentIndex); 
    element.style.backgroundColor = colors[currentIndex]; 
    currentIndex = (currentIndex + 1) % colors.length;


    if (currentIndex == 0) {
        cycleCount++;
        element.textContent = 'Ты испытал все 4 цвета (٩(◕‿◕)۶)';


        if (cycleCount >= maxCycles) {
            window.location.href = "2.html";
        }
    }
}