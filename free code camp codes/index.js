
var closeBtn = document.querySelector(".header__nav");

document.onclick = function(event) {   
    if (event.target == closeBtn) {
        closeBtn.Style.display = "none";
    }
}
