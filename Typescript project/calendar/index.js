var daysContainer = document.querySelector(".days"), nextBtn = document.querySelector(".next-btn"), prevBtn = document.querySelector(".prev-btn"), month = document.querySelector(".month"), todayBtn = document.querySelector(".today-btn");
var months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];
var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// get current date
var date = new Date();
// get current month
var currentMonth = date.getMonth();
// get current year
var currentYear = date.getFullYear();
// function to render days
function renderCalendar() {
    // get prev month current month and next month days
    date.setDate(1);
    var firstDay = new Date(currentYear, currentMonth, 1);
    var lastDay = new Date(currentYear, currentMonth + 1, 0);
    var lastDayIndex = lastDay.getDay();
    var lastDayDate = lastDay.getDate();
    var prevLastDay = new Date(currentYear, currentMonth, 0);
    var prevLastDayDate = prevLastDay.getDate();
    var nextDays = 7 - lastDayIndex - 1;
    // update current year and month in header
    if (month) {
        month.innerHTML = "".concat(months[currentMonth], " ").concat(currentYear);
    }
    // update days html
    var calendarDays = "";
    // prev days html
    for (var x = firstDay.getDay(); x > 0; x--) {
        calendarDays += "<div class=\"day prev\">".concat(prevLastDayDate - x + 1, "</div>");
    }
    // current month days
    for (var i = 1; i <= lastDayDate; i++) {
        // check if it's today then add today class
        if (i === new Date().getDate() &&
            currentMonth === new Date().getMonth() &&
            currentYear === new Date().getFullYear()) {
            // if date month year matches add today
            calendarDays += "<div class=\"day today\">".concat(i, "</div>");
        }
        else {
            // else don't add today
            calendarDays += "<div class=\"day \">".concat(i, "</div>");
        }
    }
    // next Month days
    for (var j = 1; j <= nextDays; j++) {
        calendarDays += "<div class=\"day next\">".concat(j, "</div>");
    }
    // run this function with every calendar render
    hideTodayBtn();
    if (daysContainer) {
        daysContainer.innerHTML = calendarDays;
    }
}
renderCalendar();
if (nextBtn) {
    nextBtn.addEventListener("click", function () {
        // increase current month by one
        currentMonth++;
        if (currentMonth > 11) {
            // if month gets greater than 11 make it 0 and increase year by one
            currentMonth = 0;
            currentYear++;
        }
        // re-render calendar
        renderCalendar();
    });
}
// prev month btn
if (prevBtn) {
    prevBtn.addEventListener("click", function () {
        // decrease by one
        currentMonth--;
        // check if less than 0 then make it 11 and decrease year
        if (currentMonth < 0) {
            currentMonth = 11;
            currentYear--;
        }
        renderCalendar();
    });
}
// go to today
if (todayBtn) {
    todayBtn.addEventListener("click", function () {
        // set month and year to current
        currentMonth = date.getMonth();
        currentYear = date.getFullYear();
        // re-render calendar
        renderCalendar();
    });
}
// let's hide today btn if it's already the current month and vice versa
function hideTodayBtn() {
    if (currentMonth === new Date().getMonth() &&
        currentYear === new Date().getFullYear()) {
        if (todayBtn) {
            todayBtn.style.display = "none";
        }
    }
    else {
        if (todayBtn) {
            todayBtn.style.display = "flex";
        }
    }
}
