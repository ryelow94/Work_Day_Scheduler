//Display current time and date with moment.js
const currentTimeAndDate = document.getElementById("currentDay") 

currentTimeAndDate.textContent = moment().format('MMMM Do YYYY, h:mm:ss a'); 

const timeBlockContainer = document.querySelector(".container") 
const currentTime = moment().hour(); 
console.log(currentTime)
//make a function that creates Timeblocks
function makeTimeBlock(){
    for (let i = 9; i <=17; i++) { 
        var timeBlock = document.createElement('div');
        var hour = document.createElement('div'); 
        var textArea = document.createElement('textarea'); 
        var saveBtn = document.createElement('button'); 
        timeBlock.classList.add("row", "time-block");
        hour.textContent = i + ":00"; 
        hour.classList.add("col-md-1", "hour");
        timeBlock.setAttribute("id", "hour-" + i) 
        textArea.classList.add("col-md-10","description");
        saveBtn.classList.add("col-md-1","btn", "saveBtn")
        saveBtn.innerText = "save"
        console.log(hour)
        if (i === currentTime){
            console.log("this must be the current block")
            timeBlock.classList.add("present")
        } else if (i < currentTime) {
            timeBlock.classList.add("past")  
        } else {
            timeBlock.classList.add("future")
        }

        timeBlockContainer.appendChild(timeBlock) 
        timeBlock.appendChild(hour) 
        timeBlock.appendChild(textArea) 
        timeBlock.appendChild(saveBtn) 

    }
} 
$(document).ready(function(){
    $(".saveBtn").on("click", function(){
        var textValue = $(this).siblings(".description").val()
        var time = $(this).parent().attr("id") 
        localStorage.setItem(time, textValue)
    })
    $("#hour-9 .description").val(localStorage.getItem("hour-9"));
    $("#hour-10 .description").val(localStorage.getItem("hour-10"));
    $("#hour-11 .description").val(localStorage.getItem("hour-11"));
    $("#hour-12 .description").val(localStorage.getItem("hour-12"));
    $("#hour-13 .description").val(localStorage.getItem("hour-13"));
    $("#hour-14 .description").val(localStorage.getItem("hour-14"));
    $("#hour-15 .description").val(localStorage.getItem("hour-15"));
    $("#hour-16 .description").val(localStorage.getItem("hour-16")); 
    $("#hour-17 .description").val(localStorage.getItem("hour-17"));
})
makeTimeBlock() 
