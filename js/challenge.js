//See the timer increment every second once the page is loaded
let timer=document.getElementById("counter");
let seconds=0;
document.addEventListener("DOMContentLoaded",()=>{intervalID=setInterval(function(){
    seconds++;
    if(seconds===1){
        timer.textContent=`${seconds} second.`
    }else{
        timer.textContent=`${seconds} seconds.`
    }
},1000)
})

//Manually increment and decrement using the + and - buttons
const decrementbtn=document.getElementById("minus");
const incrementbtn=document.getElementById("plus");

//Add an event listener to the minus button
decrementbtn.addEventListener("click",function(){
seconds--;
if(seconds===1){
    timer.textContent=`${seconds} second.`
}else{
    timer.textContent=`${seconds} seconds.`
}
})

//Add an event listener to the add button
incrementbtn.addEventListener("click",function(){
seconds++;
if(seconds===1){
    timer.textContent=`${seconds} second.`
}else{
    timer.textContent=`${seconds} seconds.`
}
});

//Pause the counter
const pauseButton=document.getElementById("pause");
const buttons=document.getElementsByTagName("button");
let buttonsArray=[]

for(let i=0;i<buttons.length;i++){
    if(buttons[i].id!=="pause"){
        buttonsArray.push(buttons[i])
    }
}
function pauseCounter(){
    clearInterval(intervalID);
    buttonsArray.forEach(button=>disableButton(button))
    replacePause();
}
function replacePause(){
 pauseButton.textContent="resume";
}
function disableButton(button){
    button.setAttribute("disabled",true)
}
pauseButton.addEventListener("click",pauseCounter);