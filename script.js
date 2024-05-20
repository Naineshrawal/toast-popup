const leftRight = document.querySelector("#leftRight")
const topBottom = document.querySelector("#topBottom")
const msg = document.querySelector("#msg")
const inputMsg = document.querySelector("#inputMsg")
const duration = document.querySelector("#duration")
const toastBtn = document.querySelector("#toastBtn")
const popupBox = document.querySelector(".popupBox")

let prevPosition;
    
 
toastBtn.addEventListener("click", ()=>{
    popupBox.classList.remove(prevPosition)
    prevPosition = ""
    const selectedPosition = topBottom.value.toLowerCase() + leftRight.value
    prevPosition = selectedPosition


    const newEle = document.createElement("div")
    newEle.classList.add("popUp", msg.value.toLowerCase())
    if(leftRight.value == "Right") {
        newEle.classList.add("getFromRight")
    }else{
        newEle.classList.add("getFromLeft")

    }
    newEle.innerHTML = inputMsg.value 

    const closeEle = document.createElement("span")
    closeEle.innerText = " X"
    newEle.append(closeEle)

    popupBox.appendChild(newEle)
    popupBox.classList.add(selectedPosition)

   

    function removeElement(){
        if(leftRight.value === "Right"){
            newEle.classList.add('getToRight')
        }else{
            newEle.classList.add('getToLeft')
        }
        setTimeout(()=>{
            newEle.remove()
            },500)
    }
    
    closeEle.addEventListener("click", removeElement)


    setTimeout(()=>{
        removeElement()
    },parseInt(duration.value) *1000)
})