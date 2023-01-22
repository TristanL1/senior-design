window.onload = function open(event){
        document.querySelector(".popup").style.display = "block";

        const hideButton = document.querySelector("#close");
        const myElement = document.querySelector(".popup")
    hideButton.addEventListener("click", function() {
        myElement.style.display = "none";    
    });
};
