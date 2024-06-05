document.addEventListener("DOMContentLoaded", function() {
    const preloader = document.getElementById('preloader');
    const container = document.querySelector('.container');
    const boxes = document.querySelectorAll(".box");

    setTimeout(() => {
        preloader.style.display = 'none';
        container.style.opacity = '1'; 

        boxes.forEach((box, index) => {
            setTimeout(() => {
                box.classList.add("fade-in");
            }, index * 500); 
        });
    }, 1500);
});
