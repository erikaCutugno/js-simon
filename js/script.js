// FUNCTIONS

function getRndNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

// DOM ELEMENTS
const timerElm = document.getElementById("timer")
const randomNumberElm = document.getElementById("random-number")
const formElm = document.getElementById("form-memory")
const nmb1Elm = document.getElementById("nmb1")
const nmb2Elm = document.getElementById("nmb2")
const nmb3Elm = document.getElementById("nmb3")
const nmb4Elm = document.getElementById("nmb4")
const nmb5Elm = document.getElementById("nmb5")
// VARIABLES

let rndNumber = [];
let userNmb = [];

 for(let i = 0; i < 5; i++) {
    rndNumber.push(getRndNumber(1, 100))
 }
 randomNumberElm.innerHTML = rndNumber
 console.log(randomNumberElm.innerHTML)

 let seconds = 4
 const timer = setInterval(()=>{
    if(seconds === 0){
        randomNumberElm.classList.add("none")
        clearInterval(timer)
    } else{
        seconds--
        timerElm.innerHTML = seconds
    }
 }, 1000)

 formElm.addEventListener("submit", function(event){
    event.preventDefault();
    userNmb.push(nmb1Elm.value)
    userNmb.push(nmb2Elm.value)
    userNmb.push(nmb3Elm.value)
    userNmb.push(nmb4Elm.value)
    userNmb.push(nmb5Elm.value)

    let cont= 0;
    
    for(let i = 0; i< userNmb.length; i++){
        for(let j=0; j<rndNumber.length; j++){
            
            if(Number(rndNumber[j])=== Number(userNmb[i])){
                cont= cont +1
                //console.log(cont)
            }
            //console.log(rndNumber[j], userNmb[i])

        }
    }
    console.log(cont)
})

