// getAll Elements 
const getMinusIcon = document.querySelectorAll(".minus")
const getPLusIcon = document.querySelectorAll(".plus");
const getText = document.querySelectorAll(".textContent");
getPLusIcon.forEach((plus, index) => {
    plus.addEventListener("click", () => {
        getText[index].classList.add("show-text");
        getPLusIcon[index].classList.add("none");
        getMinusIcon[index].classList.add("show-minus")

    })
})
getMinusIcon.forEach((minus, index) => {
    minus.addEventListener("click", () => {
        getText[index].classList.remove("show-text");
        getMinusIcon[index].classList.remove("show-minus");
        getPLusIcon[index].classList.remove("none")



    })
})