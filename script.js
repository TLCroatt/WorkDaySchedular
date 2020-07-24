
    $(document).ready(function () {
        console.log("working");
        let momentVar = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
        let hours = ["9 am", "10 am", "11 am", "12 pm", "1 pm", "2 pm", "3 pm", "4 pm", "5 pm"]

        //display current day at top of calender
       function displayDate() {
           let currentDay = $("#currentDay").text(momentVar);
           return currentDay;
        
       }
       displayDate()
    })
