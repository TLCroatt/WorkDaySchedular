//add moment.js and display on calender
$(document).ready(function () {
    console.log("working");
    let momentVar = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
    
    //display current day at top of calender
    function displayDate() {
        let currentDay = $("#currentDay").text(momentVar);
        return currentDay;
        
    }
    displayDate()

    let toDoItem = []
    
    //retreive saved items from local storage
    if (localStorage.getItem("items") !== null) {
       toDoItem = JSON.parse(localStorage.getItem("items"));
       for (i = 0; i < toDoItem.length; i++) {
            var hour = Object.keys(toDoItem[i])[0];
            var text = toDoItem[i][hour];
            $(".description").each(function() {
               if ($(this).attr("id") === hour) {
                   $(this).val(text);
               }
            })
        
       } 
    }


    //event listener for save buttons to save to local storage
    $(".saveBtn").click(
        function() {
            var text = $(this).siblings("textarea").val().trim();
            var hours = $(this).siblings("textarea").attr("id");
            var object = {};
            object[hours] = text;
            toDoItem.push(object);
            localStorage.setItem("items", JSON.stringify(toDoItem));

         }
    )


    //loop through time divs - if id > than current time, change colors
    let currentHour = moment().hours();
    
    $(".description").each(function() {
        var blockHour = parseInt($(this).attr("id").split("-")[1]);
        if (currentHour > blockHour) {
            $(this).addClass("past");
        } else if (currentHour === blockHour) {
            $(this).remove("past");
            $(this).addClass("present");
        } else if (currentHour < blockHour) {
            $(this).remove("past");
            $(this).remove("present");
            $(this).addClass("future");
        }
            

    });




});


