let mainTitle = document.querySelector("#title")
let curVal = 0
let btnIncrement = document.querySelector("#increment")
let btnDecrement = document.querySelector("#decrement")
let reset = document.querySelector("#reset")
btnIncrement.addEventListener("click", function(){
  
    curVal++
    mainTitle.textContent = curVal
})
btnDecrement.addEventListener("click", function(){
   
    curVal--
    mainTitle.textContent = curVal
})
reset.addEventListener("click", function(){
    curVal = 0
    mainTitle.textContent = curVal
})