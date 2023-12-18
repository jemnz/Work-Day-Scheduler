$(document).ready(function () {
    // Display current date using Day.js
    $("#currentDay").text(dayjs().format("dddd, MMMM D"));

// Create timeblocks dynamically (adjust as needed)
for (var i = 9; i <= 17; i++) {
    var timeblockDiv = $("<div>").addClass("row time-block").attr("data-hour", i);

    var hourDiv = $("<div>").addClass("col-md-2 hour").text(dayjs().hour(i).format("hA"));

    // Add a unique id to each textarea
    var textarea = $("<textarea>").addClass("col-md-8").attr("id", "event_" + i);

    var saveBtn = $("<button>").addClass("col-md-2 saveBtn").text("Save");

    timeblockDiv.append(hourDiv, textarea, saveBtn);
    $(".container").append(timeblockDiv);
}


// Function to save event to local storage
$(".saveBtn").on("click", function () {
    var timeblock = $(this).closest(".time-block");
    var blockHour = timeblock.attr("data-hour");
    var eventText = timeblock.find("textarea").val();

    localStorage.setItem("event_" + blockHour, eventText);
});
