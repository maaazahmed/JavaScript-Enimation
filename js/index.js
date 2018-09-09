var movingContainer_1 = document.getElementById("movingContainer_1");


// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ 1
// setInterval(() => {
//     setTimeout(() => {
//         movingContainer_1.style.width = 200 + "px";
//         movingContainer_1.style.backgroundColor = "black"

//     }, 1000)
//     if (movingContainer_1.style.width === 200 + "px") {
//         setTimeout(() => {
//             movingContainer_1.style.width = 100 + "px";
//             movingContainer_1.style.backgroundColor = "green"
//         }, 1000)
//     }
// }, 20)



// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ 2
let count = 0;
let incre =  setInterval(() => {
        count = count + 1
        if(count < 400){
            movingContainer_1.style.height =`${count}px`;
            movingContainer_1.style.width=`${count}px`;
            movingContainer_1.style.borderRadius = count+"px",
            movingContainer_1.style.opacity = count*0.1
        }
}, 10)


