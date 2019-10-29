// Your code goes here

//Boosting the Logo size with a mouseover.
const titleChange = document.querySelector('.main-navigation h1');
titleChange.addEventListener('mouseover', (event) => {
    titleChange.style.transform = 'rotateY(360deg)';
    titleChange.style.transition = "all 0.3s";
})
titleChange.addEventListener("mouseleave", () => {
    titleChange.style.transform = "scale(1.3)";
    titleChange.style.transition = "all 0.3s";
})

const imageChange = document.querySelector(".funbusimg");
imageChange.addEventListener("dblclick", (event) => {
    imageChange.src = "https://images.unsplash.com/photo-1508179070693-6f044d6d1c43?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2039&q=80"
})

window.addEventListener("scroll", (event) => {
    imageChange.src = "img/fun-bus.jpg"
})


const bodyColor = document.querySelector('header');
window.addEventListener("keydown", event => {
    if (event.isComposing || event.keyCode === 229) {
        return;
    }
    bodyColor.style.background = 'green';
    preventDefault();
});
window.addEventListener("keyup", event => {
    if (event.isComposing || event.keyCode === 229) {
        return;
    }
    bodyColor.style.background = 'white';
});


document.querySelectorAll('.nav-link').forEach(navText => {
    window.addEventListener('resize', event => {
        navText.style.color = '#399C6B';
    })
});

const h4Color = document.querySelectorAll('h4').forEach(element => {
    element.addEventListener('mousedown', () => {
        element.style.color = 'green';
        element.style.transition = 'all 2s'
        element.style.cursor = 'pointer'
    })
    element.addEventListener('mouseup', () => {
        element.style.color = 'pink';
        element.style.transition = 'all 2s'
        element.style.cursor = 'pointer'
        element.style.transform = 'rotateX(180deg)'
    })
})



// window.addEventListener('scroll', () => {
//     let siren = new Audio("mp3/sound.mp3");
//     siren.volume = 0.2;
//     siren.play();
// });