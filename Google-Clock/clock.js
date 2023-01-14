$(function() {
  alert("Please run this in any other platform, as SL is unable to execute jQuery");
  setInterval(getTime);
  $("main #alarmSection").hide();
  $("main #timerSection").hide();
  $("main #stopwatchSection").hide();
  $("main #bedtimeSection").hide();
  $("#playIcon").css("display", "none");
});

function getTime() {
  var time = new Date();
  var hrs = time.getHours();
  var mins = time.getMinutes();
  var day = time.getDay();
  var date = time.getDate();
  var month = time.getMonth();
  //Adding zero before mins when necessary :-
  if (mins < 10) {
    $("#time #digitalTime #minutes").html("0" + mins);
  } else {
    $("#time #digitalTime #minutes").html(mins);
  }
  //Setting meridiem to am or pm :-
  if (hrs >= 12) {
    $("#time #meridiem").html("pm");
  }
  else {
    $("#time #meridiem").html("am");
  }
  //Setting hours :-
  var hours = $("#time #digitalTime #hours");
  if (hrs == 13) {
    hours.html("1");
  }
  else if (hrs == 14) {
    hours.html("2");
  }
  else if (hrs == 15) {
    hours.html("3");
  }
  else if (hrs == 16) {
    hours.html("4")
  }
  else if (hrs == 17) {
    hours.html("5");
  }
  else if (hrs == 18) {
    hours.html("6");
  }
  else if (hrs == 19) {
    hours.html("7");
  }
  else if (hrs == 20) {
    hours.html("8");
  }
  else if (hrs == 21) {
    hours.html("9");
  }
  else if (hrs == 22) {
    hours.html("10");
  }
  else if (hrs == 23) {
    hours.html("11");
  }
  else if (hrs == 24) {
    hours.html("12");
  }
  else {
    hours.html(hrs);
  }
  //Setting day :-
  var htmlDay = $("#time #day");
  var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  day = days[day];
  htmlDay.html(day);
  //Showing date :-
  $("#time #date").html(date);
  //Setting month :-
  var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  month = months[month];
  $("#time #month").html(month);
}

var alarmIcon = $(".alarmIcon");
var clockIcon = $(".clockIcon");
var timerIcon = $(".timerIcon");
var stopwatchIcon = $(".stopwatchIcon");
var bedtimeIcon = $(".bedtimeIcon");
var plusIcon = $("#plusIcon");
var playIcon = $("#playIcon");
var navSections = $("nav #navSections");
var main = $("main");
var sectionName = $("header h3#sectionName");

function openSection(icon, section, section_name, plusIconDisplay, playIconDisplay) {
  main.children().hide();
  section.show();
  navSections.children().removeClass("active");
  navSections.children().children().attr("fill", "#ddd");
  clockIcon.attr("fill", "none");
  icon.parent().addClass("active");
  icon.attr("fill", "#afeeee");
  sectionName.html(section_name);
  plusIcon.css("display", plusIconDisplay);
  playIcon.css("display", playIconDisplay);
}
alarmIcon.click(function() {
  openSection(alarmIcon, $("#alarmSection"), "Alarm", "", "none");
});
clockIcon.click(function() {
  openSection(clockIcon, $("#clockSection"), "Clock", "", "none");
  clockIcon.attr("fill", "none");
  clockIcon.attr("stroke", "#afeeee");
});
timerIcon.click(function() {
  openSection(timerIcon, $("#timerSection"), "Timer", "none", "none");
});
stopwatchIcon.click(function() {
  openSection(stopwatchIcon, $("#stopwatchSection"), "Stopwatch", "none", "");
});
bedtimeIcon.click(function() {
  openSection(bedtimeIcon, $("#bedtimeSection"), "Bedtime", "none", "none");
});

function animateBorder(targetNoTile) {
  $(targetNoTile).css("animation", "animateBorder .5s 1");
}
//THESE CODES ARE WRITTEN BY MILAN DO NOT TRY TO STEAL..
