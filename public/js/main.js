if (navigator.onLine) {
    console.log('online')
} else {
    window.addEventListener(
        alert("Please connect to internet!")
    )
}

function Darkmode (x) {
    var element = document.body;
    element.classList.toggle("dark-mode");
}

localStorage.setItem("darkmode", Darkmode());

document.body.classList.add(localStorage.getItem("darkmode"));