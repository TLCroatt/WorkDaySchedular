//add moment.js and display on calender
$(document).ready(function () {
    console.log("working");
    let momentVar = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
    let time = ["9:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00"]

    //display current day at top of calender
    function displayDate() {
        let currentDay = $("#currentDay").text(momentVar);
        return currentDay;
        
    }
    displayDate()

    let toDoItem = []
    let timeID = document.getElementById("id");
    console.log(timeID);

    //retreive saved items from local storage
    if (localStorage.getItem("items") !== null) {
       toDoItem = JSON.parse(localStorage.getItem("items"));
       for (i = 0; i < toDoItem.length; i++) {
            var hour = Object.keys(toDoItem[i])[0];
            var text = toDoItem[i][hour];
            console.log(hour);
            console.log(text);
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
            //console.log(text, hours);
            toDoItem.push(object);
            //console.log(toDoItem);
            localStorage.setItem("items", JSON.stringify(toDoItem));

         }
    )


    //loop through time divs - if id > than current time, change colors
    let currentHour = moment().hours();
    console.log(currentHour)
    //let now = new Date($.now());
    //console.log(new Date($.now()));
    //console.log(typeof now)
    //console.log(now)
    $(".timeBlock").each(function() {
        var blockHour = parseInt($(this).attr("id").split("-")[1]);
        if (currentHour > timeID[i]) {
            $("textarea").addClass("past");
            console.log("past");
        } else if (currentHour >= timeID[i] && now < time[i]++) {
            $("textarea").addClass("present");
            console.log("present");
        } else if (currentHour < timeID[i]) {
            $("textarea").addClass("future");
           console.log("future");
        }
            

    });




});


