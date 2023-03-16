//Displays the current date
function getDate() {
    var currentDate = moment().format('MMMM Do, YYYY');
    console.log("Today's date is " + currentDate);
    $('#currentDay').text(currentDate)
}
getDate()

//Time Blocks
function timeblockColor() {
    var timeArray = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17]
    var timeBlockElArray = [$('#8am'), $('#9am'), $('#10am'), $('#11am'), $('#12pm'), $('#1pm'), $('#2pm'), $('#3pm'), $('#4pm'), $('#5pm')]
    var currentTime = Number(moment().format('HH'));
    console.log("Test")

    // Determins if the current time is in the past, present or future
    for (var i = 0; i < timeArray.length; i++) {
        if (currentTime < timeArray[i]) {                  
            timeBlockElArray[i].addClass('future')        
        } else if (currentTime == timeArray[i]) {       
            timeBlockElArray[i].addClass('present')       
        } else if (currentTime > timeArray[i]) {        
            timeBlockElArray[i].addClass('past')          
        }
    }
}
setInterval(timeblockColor(), 1000)  

$('.container').on('click', '.save', function (event) {   
    console.log($(event.target))
    var index = $(event.target).parents().siblings("input").attr("data-index")       
    var userInput = $(event.target).parents().siblings("input").val()       
    console.log("The user inputted: " + userInput)
    savedEvents.splice(index, 1, userInput)     
    console.log(savedEvents)
    localStorage.setItem("savedEvents", JSON.stringify(savedEvents))    
})

// Localstorage
var savedEvents = JSON.parse(localStorage.getItem("savedEvents")) || ["", "", "", "", "", "", "", "", "", ""]    
console.log(savedEvents)

renderSavedEvents()
function renderSavedEvents() {
    for (var i = 0; i < savedEvents.length; i++) {
        var event = savedEvents[i];
        console.log(event)
        $('.container').children().eq(i).children('input').attr('value', event)     

    }
}