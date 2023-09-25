document.getElementById("toggle-mobile-nav").addEventListener("click", function (){
    document.getElementById("page").classList.toggle("mobile-nav-opended");
});

document.getElementById("page").addEventListener("click", function(e) {
    let navButtonClicked = (
        e.target.classList.contains("navbar-toggler") || 
        e.target.parentElement.classList.contains("navbar-toggler")
        );
        
    if (navButtonClicked) return;
    document.getElementById("page").classList.remove("mobile-nav-opended");
});