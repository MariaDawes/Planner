
// console.log(moment().format('dddd')); 
// console.log(moment().format("MMM Do YY"));

// moment().format('dddd'); 
// moment().format("MMM Do YY");

var weekDay = (moment().format('dddd'));
document.getElementById("currentDay").innerHTML = weekDay

var weekDate = (moment().format("MMM Do YYYY"));
document.getElementById("currentDate").innerHTML = weekDate