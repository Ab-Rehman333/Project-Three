// getAll Elements 


// Solution One 
// const getMinusIcon = document.querySelectorAll(".minus")
// const getPLusIcon = document.querySelectorAll(".plus");
// const getText = document.querySelectorAll(".textContent");
// getPLusIcon.forEach((plus, index) => {
//     plus.addEventListener("click", () => {
//         getText[index].classList.add("show-text");
//         getPLusIcon[index].classList.add("none");
//         getMinusIcon[index].classList.add("show-minus");


//     })
// })
// getMinusIcon.forEach((minus, index) => {
//     minus.addEventListener("click", () => {
//         getText[index].classList.remove("show-text");
//         getMinusIcon[index].classList.remove("show-minus");
//         getPLusIcon[index].classList.remove("none")
//     })
// })


// Solution Two  
// const getMinusIcon = document.querySelectorAll(".minus")
// const getPLusIcon = document.querySelectorAll(".plus");
// const getText = document.querySelectorAll(".textContent");
// const getIcons = document.querySelectorAll(".icon")
// getIcons.forEach(plus => {
//     plus.addEventListener("click", (e) => {
//         const targetParent = e.target.parentElement.parentElement.parentElement;
//         targetParent.classList.toggle("show-text");
//         const getAllAccordions = document.querySelectorAll(".accordion");
//         getAllAccordions.forEach(accordion => {
//             accordion != targetParent ? accordion.classList.remove("show-text") : false;
//         })
//     })
// })

// solution three 
const getMinusIcon = document.querySelectorAll(".minus")
const getPLusIcon = document.querySelectorAll(".plus");
const getText = document.querySelectorAll(".textContent");
const getIcons = document.querySelectorAll(".icon");
const getAllAccordions = document.querySelectorAll(".accordion");
getAllAccordions.forEach((accordion) =>{
    const getBtn = accordion.querySelector(".icon")
    getBtn.addEventListener("click",()=>{
        accordion.classList.toggle("show-text");
     const getAllAccordionsSecond = document.querySelectorAll(".accordion");
     getAllAccordionsSecond.forEach(item =>{
        item != accordion ? item.classList.remove("show-text"): false;
     })

    })
})

