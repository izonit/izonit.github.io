let easter = document.getElementById("easteregg");  
let welcome = document.getElementById("welcome");

easter.onclick = function () {
    alert("Click-click! You found it.");
};

function scroll() {
    window.scroll({
        top: 25000,
        left: 0,
        behavior: 'smooth'
    });
    
    windows.scrollBy({
        top: 100,
        left: 0,
        behavior: 'smooth'
    });
    
    document.querySelector("#more").scrollIntoView({
        behavior: "smooth",
    });
};

scroll();