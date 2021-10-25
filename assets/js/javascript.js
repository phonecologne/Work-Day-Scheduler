var currentDay = moment().format("dddd, MMM Do");

// setting up the time blocks for the working hours of 9am to 6pm
var hour9 = moment().hour(9);
var hour10 = moment().hour(10);
var hour11 = moment().hour(11);
var hour12 = moment().hour(12);
var hour13 = moment().hour(13);
var hour14 = moment().hour(14);
var hour15 = moment().hour(15);
var hour16 = moment().hour(16);
var hour17 = moment().hour(17);
var hour18 = moment().hour(18);

//setting hours 9am to 6pm
var hours = [hour9, hour10, hour11, hour12, hour13, hour14, hour15, hour16, hour17, hour18]

var events9 = JSON.parse(localStorage.getItem('hour9')) || "";
var events10 = JSON.parse(localStorage.getItem('hour10')) || "";
var events11 = JSON.parse(localStorage.getItem('hours11')) || "";
var events12 = JSON.parse(localStorage.getItem('hours12')) || "";
var events13 = JSON.parse(localStorage.getItem('hour13')) || "";
var events14 = JSON.parse(localStorage.getItem('hour14')) || "";
var events15 = JSON.parse(localStorage, getItem('hour15')) || "";
var events16 = JSON.parse(localStorage, getItem('hour16')) || "";
var events17 = JSON.parse(localStorage.getItem('hour17')) || "";

$.each(hours, function (index, value) {
    events = [events9, events10, events11, events12, events 13, events14, events15, events16, events17]
    $(".container").append("<div class='row'><div class='col-2 hour text-right' id='hour" +
    (index + 9) + "'><span>" + value.format("h A") + "</span></div class='col-8 event-group' id='timeblock" + 
    (index + 9) + "'><textarea class='events col-12' id='eventblock" + (index + 9) + events[index] + "</textarea></div>" +
    "<div class='col-2 save-delete' id='save-delete" + (index + 9) + "'><i class='fas fa-save' title='Save Event'></i> <i class='fas fa-trash' title='Remove Event'></i></div></div></div>");
});

$("#currentDay").text(currentDay);

var auditTime = function () {
    currentTime = moment().format("hh:mm:ss");
}

if (moment().isBetween(hour9, hour10)) {
    $("#timeblock9").addClass("present");
}
else if (moment().isAfter(hour10)) {
    $("#timeblock9").addClass("past");
}
else {
    $("#timeblock9").addClass("future");
}

if (moment().isBetween(hour10, hour11)) {
    $("#timeblock10").addClass("present");
}