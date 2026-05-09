const toggle = document.getElementById("toggleDark");
const body = document.querySelector("body");


toggle.addEventListener("click", function() {
    this.classList.toggle("bi-moon-fill");
    if (this.classList.toggle("bi-brightness-high-fill")) {
        body.style.background = "white";
        body.style.color = "black";
        body.style.transition = "2s";
    }
    else {
        body.style.background = "black";
        body.style.color = "white";
        body.style.transition = "2s";
    }
});

const toggle = document.getElementById('toggleDark');
const body = document.querySelector('body');

toggle.addEventListener('click', function() {
    this.classList.toggle('bi-moon-fill');
    if (this.classList.toggle('bi-brightness-high-fill')) {
        body.style.background = '#fff';
        body.style.color = '';
        body.style.transition = '1s ease';
    }
    else {
        body.style.background = 'rgb(17, 24, 39)';
        body.style.color = 'text-white';
        body.style.transition = '2s ease';
    }
});