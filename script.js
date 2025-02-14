var spanElement = document.getElementById('animated-text');

spanElement.addEventListener("mouseleave", AddAnimation);

function AddAnimation(){
    console.log("Hello World!");
    spanElement.classList.add("bouncingAnimation");

    setTimeout(() => {
        spanElement.classList.remove("bouncingAnimation");
    }, 1000 * 0.6);
}