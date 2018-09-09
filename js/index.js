var movingContainer_1 = document.getElementById("movingContainer_1");

setInterval(() => {
    setTimeout(() => {
        movingContainer_1.style.width = 200 + "px";
        movingContainer_1.style.backgroundColor = "black"

    }, 1000)
    if (movingContainer_1.style.width === 200 + "px") {
        setTimeout(() => {
            movingContainer_1.style.width = 100 + "px";
            movingContainer_1.style.backgroundColor = "green"
        }, 1000)
    }
}, 20)