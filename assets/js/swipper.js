let count = 0;
let images = document.querySelector(".secao_swipper .carrosel");
let carrosel = document.querySelectorAll(".carrosel .container_swipper");



const swipper = () => {
    count++;

        if(count > carrosel.length - 1) {
            images.style.transform = `translateX(${-count * 390}px)`;
            count = 0;
        }
        const itemWidth = carrosel[0].offsetWidth;
    images.style.transition = "transform 0.5s ease-in-out";
    images.style.transform = `translateX(-${count * itemWidth}px)`;
    }
   


setInterval(swipper, 1800);


 