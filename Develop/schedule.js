var currentDate = moment().format('dddd MMMM Do, YYYY h:mm a');
$("#currentDay").text(currentDate)

var startTime = moment().startOf("day").add(9, "hours")

var hourone = startTime.add(0, "h")
hourone = hourone.format("hh:mm A")
$("#block-one").text(hourone)

var hourtwo = startTime.add(1, "h")
hourtwo = hourtwo.format("hh:mm A")
$("#block-two").text(hourtwo)

var hourthree = startTime.add(1, "h")
hourthree = hourthree.format("hh:mm A")
$("#block-three").text(hourthree)

var hourfour = startTime.add(1, "h")
hourfour = hourfour.format("hh:mm A")
$("#block-four").text(hourfour)

var hourfive = startTime.add(1, "h")
hourfive = hourfive.format("hh:mm A")
$("#block-five").text(hourfive)

var hoursix = startTime.add(1, "h")
hoursix = hoursix.format("hh:mm A")
$("#block-six").text(hoursix)

var hourseven = startTime.add(1, "h")
hourseven = hourseven.format("hh:mm A")
$("#block-seven").text(hourseven)

var houreight = startTime.add(1, "h")
houreight = houreight.format("hh:mm A")
$("#block-eight").text(houreight)

var hournine = startTime.add(1, "h")
hournine = hournine.format("hh:mm A")
$("#block-nine").text(hournine)

// Conditionally set css based of time

function setCSS() {
    var currentTime = moment().startOf("hour")

    // Hour One
    hourone = moment().startOf('day').add(9, "hours")

    if (currentTime.isAfter(hourone)) {
        $("#form-9").addClass("past")
    }
    else if (currentTime.isBefore(hourone)) {
        $("#form-9").addClass("future")
    }
    else if (currentTime.isSame(hourone)) {
        $("#form-9").addClass("present")
    }


    // Hour Two
    hourtwo = moment().startOf('day').add(10, "hours")

    if (currentTime.isAfter(hourtwo)) {
        $("#form-10").addClass("past")
    }
    else if (currentTime.isBefore(hourtwo)) {
        $("#form-10").addClass("future")
    }
    else if (currentTime.isSame(hourtwo)) {
        $("#form-10").addClass("present")
    }

    hourthree = moment().startOf('day').add(11, "hours")

    if (currentTime.isAfter(hourthree)) {
        $("#form-11").addClass("past")
    }
    else if (currentTime.isBefore(hourthree)) {
        $("#form-11").addClass("future")
    }
    else if (currentTime.isSame(hourthree)) {
        $("#form-11").addClass("present")
    }

    hourfour = moment().startOf('day').add(12, "hours")

    if (currentTime.isAfter(hourfour)) {
        $("#form-12").addClass("past")
    }
    else if (currentTime.isBefore(hourfour)) {
        $("#form-12").addClass("future")
    }
    else if (currentTime.isSame(hourfour)) {
        $("#form-12").addClass("present")
    }

    hourfive = moment().startOf('day').add(13, "hours")

    if (currentTime.isAfter(hourfive)) {
        $("#form-1").addClass("past")
    }
    else if (currentTime.isBefore(hourfive)) {
        $("#form-1").addClass("future")
    }
    else if (currentTime.isSame(hourfive)) {
        $("#form-1").addClass("present")
    }

    hoursix = moment().startOf('day').add(14, "hours")

    if (currentTime.isAfter(hoursix)) {
        $("#form-2").addClass("past")
    }
    else if (currentTime.isBefore(hoursix)) {
        $("#form-2").addClass("future")
    }
    else if (currentTime.isSame(hoursix)) {
        $("#form-2").addClass("present")
    }

    hourseven = moment().startOf('day').add(15, "hours")

    if (currentTime.isAfter(hourseven)) {
        $("#form-3").addClass("past")
    }
    else if (currentTime.isBefore(hourseven)) {
        $("#form-3").addClass("future")
    }
    else if (currentTime.isSame(hourseven)) {
        $("#form-3").addClass("present")
    }

    houreight = moment().startOf('day').add(16, "hours")

    if (currentTime.isAfter(houreight)) {
        $("#form-4").addClass("past")
    }
    else if (currentTime.isBefore(houreight)) {
        $("#form-4").addClass("future")
    }
    else if (currentTime.isSame(houreight)) {
        $("#form-4").addClass("present")
    }

    hournine = moment().startOf('day').add(17, "hours")

    if (currentTime.isAfter(hournine)) {
        $("#form-5").addClass("past")
    }
    else if (currentTime.isBefore(hournine)) {
        $("#form-5").addClass("future")
    }
    else if (currentTime.isSame(hournine)) {
        $("#form-5").addClass("present")
    }
}
setCSS()

// Storing to local storage

$(".saveBtn").on("click", function () {
    var key = $(this).parent().data("time")
    var value = $(this).parent().siblings(".form-control").val()
    localStorage.setItem(key, value)
    console.log(value)
})

// Now render from local storage

var hours = [9, 10, 11, 12, 1, 2, 3, 4, 5]

for (let i = 0; i < hours.length; i++) {
    var data = localStorage.getItem(hours[i])
    $("#form-" + hours[i]).val(data)
}
