const characters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
        "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", 
        "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
        "~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];

let rect1El = document.getElementById("rect1")
let rect2El = document.getElementById("rect2")

let my_input = ""

function generatePass(){
        my_input= document.getElementById("No_char").value
        rect1El.textContent = ""
        rect2El.textContent = ""
        for(let i=0;i<my_input;i++){
                randomNumber1 = characters[Math.floor(Math.random()*characters.length)]
                randomNumber2 = characters[Math.floor(Math.random()*characters.length)]

                rect1El.textContent += randomNumber1
                rect2El.textContent += randomNumber2
        }
}


