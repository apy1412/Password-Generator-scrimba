const characters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];

let button = document.querySelector("button")
let firstpwEl = document.querySelector(".first-pw")
let secondpwEl = document.querySelector(".second-pw")

let passwordOne =""
let passwordTwo =""


button.addEventListener("click", function(){
    firstpwEl.textContent = ""
    secondpwEl.textContent = ""
for(let i = 0; i < 15; i++){
    
    let randomIndex = Math.floor(Math.random()*characters.length)
    passwordOne = characters[randomIndex]
    firstpwEl.textContent += passwordOne
}
for(let i = 0; i < 15; i++){
    
    let randomIndex = Math.floor(Math.random()*characters.length)
    passwordTwo =characters[randomIndex]
    secondpwEl.textContent += passwordTwo
}
    
})


