var hamburger = document.querySelector(".hamburger");
var mobileNavLinks = document.querySelector(".nav-links");
var navLinks = document.querySelectorAll(".nav-links a");

hamburger.addEventListener("click", function() {
    hamburger.classList.toggle("is-active");
    mobileNavLinks.classList.toggle("active");

    // Adiciona ou remove a classe no-scroll no body
    if (mobileNavLinks.classList.contains('active')) {
        document.body.classList.add('no-scroll');
    } else {
        document.body.classList.remove('no-scroll');
    }
});

// Adiciona evento de clique a todos os links do menu
navLinks.forEach(function(link) {
    link.addEventListener("click", function() {
        // Fecha o menu ao clicar no link
        hamburger.classList.remove("is-active");
        mobileNavLinks.classList.remove("active");
        
        // Remove a classe no-scroll no body
        document.body.classList.remove('no-scroll');
    });
});