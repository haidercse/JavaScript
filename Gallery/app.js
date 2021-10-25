let current = document.querySelector("#current");
let images = document.querySelectorAll("#images img");
images.forEach((img) => {
    img.addEventListener("click", (e) => {
        //default set opacity in all image 
        images.forEach((img) => {
            img.style.opacity = '1';
        });

        //set opacity in click in picture
        e.target.style.opacity = '.4'

        // set current picture dynamically 
        current.src = e.target.src;

        //add fade in class in click picture
        current.classList.add('fade-in-image');

        //remove after 2 second fade in
        setTimeout(() => {
            current.classList.remove('fade-in-image');
        }, 2000);

        //creating audio when click the picture
        var audio = new Audio('Music/beep-21.mp3');
        audio.play();

    })
})