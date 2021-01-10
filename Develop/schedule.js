var currentDate = moment().format('dddd MMMM Do, YYYY h:mm a');
$("#currentDay").text(currentDate)

var startTime = moment().startOf("day").add(9, "hours")

var hourone = startTime.add(0, "h")
hourone = hourone.format("hh:mm A")
$(".block1").text(hourone)

var hourtwo = startTime.add(1, "h")
hourtwo = hourtwo.format("hh:mm A")
$(".block2").text(hourtwo)

var hourthree = startTime.add(1, "h")
hourthree = hourthree.format("hh:mm A")
$(".block3").text(hourthree)

console.log(startTime)
var hourfour = startTime.add(1, "h")
hourfour = hourfour.format("hh:mm A")
console.log(hourfour)
$(".block4").text(hourfour)

var hourfive = startTime.add(1, "h")
hourfive = hourfive.format("hh:mm A")
$(".block5").text(hourfive)

var hoursix = startTime.add(1, "h")
hoursix = hoursix.format("hh:mm A")
$(".block6").text(hoursix)

var hourseven = startTime.add(1, "h")
hourseven = hourseven.format("hh:mm A")
$(".block7").text(hourseven)

var houreight = startTime.add(1, "h")
houreight = houreight.format("hh:mm A")
$(".block8").text(houreight)

var hournine = startTime.add(1, "h")
hournine = hournine.format("hh:mm A")
$(".block9").text(hournine)
