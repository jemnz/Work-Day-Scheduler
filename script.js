$(document).ready(function () {
    // Display current date using Day.js
    $("#currentDay").text(dayjs().format("dddd, MMMM D"));

 // Function to color-code timeblocks based on past, present, and future
 function updateHourBlocks() {
    var currentHour = dayjs().hour();

    $(".time-block").each(function () {
        var blockHour = parseInt($(this).attr("data-hour"));

        if (blockHour < currentHour) {
            $(this).removeClass("present future").addClass("past");
        } else if (blockHour === currentHour) {
            $(this).removeClass("past future").addClass("present");
        } else {
            $(this).removeClass("past present").addClass("future");
        }
    });
}

