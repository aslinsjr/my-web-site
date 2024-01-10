
const welcomeDisplay = document.querySelector(".welcome-display")
const mainContainer = document.querySelector(".main-container")

setTimeout(function(){

    var a = document.getElementById("welcome-title");
    
    a.style="display:none"
    
    },
3000);

setTimeout(function(){

    var b = document.getElementById("welcome-subtitle");
    
    b.style="display:none"
        
    },
12000);

document.addEventListener("keydown", () =>{
    welcomeDisplay.classList.add("hidden")
    mainContainer.classList.add("active")
})