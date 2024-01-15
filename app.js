let mainTitle = document.querySelector("#title")
let curVal = 0
let btnIncrement = document.querySelector("#increment")
let btnDecrement = document.querySelector("#decrement")
let reset = document.querySelector("#reset")
btnIncrement.addEventListener("click", function(){
    if (curVal >= 20){
        alert("cannot go below")
    }
    curVal++
    mainTitle.textContent = curVal
})
btnDecrement.addEventListener("click", function(){
    if (curVal <=0){
        alert("cannot go below")
    }
    curVal--
    mainTitle.textContent = curVal
})
reset.addEventListener("click", function(){
    curVal = 0
    mainTitle.textContent = curVal
})