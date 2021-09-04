window.addEventListener("DOMContentLoaded", (event) => {
    const nav = document.querySelector("nav");

    document.addEventListener("scroll", () => {
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            nav.style.backgroundColor = "rgba(147, 181, 198, 0.8)";
            nav.style.border = "none";
        } else {
             nav.style.backgroundColor = "transparent";
             nav.style.borderBottom = "1px solid rgba(255, 255, 255, 0.3)";
        }
    })    
})