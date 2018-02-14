var versioninfo = {
  "1.12.2": [0, 0, 0, new Date("2017-09-18")],
  "1.12.1": [1, 11, 9, new Date("2017-08-03")],
  "1.12": [2, 13, 53, new Date("2017-06-07")],
  "1.11.2": [3, 65, 121, new Date("2016-12-21")],
  "1.11.1": [4, 89, 121, new Date("2016-12-20")],
  "1.11": [5, 129, 181, new Date("2016-11-14")],
  "1.10.2": [6, 416, 255, new Date("2016-06-23")],
  "1.10.1": [7, 489, 255, new Date("2016-06-22")],
  "1.10": [8, 495, 281, new Date("2016-06-08")],
  "1.9.4": [9, 531, 296, new Date("2016-05-10")],
  "1.9.3": [10, 537, 296, new Date("2016-05-10")],
  "1.9.2": [11, 550, 322, new Date("2016-03-30")],
  "1.9.1": [12, 557, 322, new Date("2016-03-30")],
  "1.9": [13, 570, 322, new Date("2016-02-29")],
  "1.8.9": [14, 972, 322, new Date("2015-12-09")],
  "1.8.8": [15, 982, 322, new Date("2015-07-28")],
  "1.8.7": [16, 1020, 475, new Date("2015-06-05")],
  "1.8.6": [17, 1030, 483, new Date("2015-05-25")],
  "1.8.5": [18, 1031, 486, new Date("2015-05-22")],
  "1.8.4": [19, 1036, 490, new Date("2015-04-17")],
  "1.8.3": [20, 1051, 501, new Date("2015-02-20")],
  "1.8.2": [21, 1062, 501, new Date("2015-02-19")],
  "1.8.1": [22, 1111, 501, new Date("2014-11-24")],
  "1.8": [23, 1243, 529, new Date("2014-09-02")],
  "1.7.10": [24, 1739, 529, new Date("2014-06-26")],
  "1.7.9": [25, 1746, 529, new Date("2014-04-14")],
  "1.7.8": [26, 1750, 529, new Date("2014-04-11")],
  "1.7.7": [27, 1756, 529, new Date("2014-04-09")],
  "1.7.6": [28, 1756, 529, new Date("2014-04-09")],
  "1.7.5": [29, 1764, 529, new Date("2014-02-26")],
  "1.7.4": [30, 1768, 529, new Date("2013-12-10")],
  "1.7.2": [31, 1806, 529, new Date("2013-10-25")],
  "1.6.4": [32, 1902, 529, new Date("2013-09-19")],
  "1.6.2": [33, 1904, 529, new Date("2013-07-08")],
  "1.6.1": [34, 1973, 529, new Date("2013-07-01")],
  "1.5.2": [35, 2048, 529, new Date("2013-05-02")],
  "1.5.1": [36, 2072, 529, new Date("2013-03-21")],
  "1.5": [37, 2086, 529, new Date("2013-03-13")],
  "1.4.7": [38, 2198, 529, new Date("2013-01-09")],
  "1.4.6": [39, 2204, 529, new Date("2012-12-20")],
  "1.4.5": [40, 2268, 529, new Date("2012-11-20")],
  "1.4.4": [41, 2342, 529, new Date("2012-11-14")],
  "1.4.2": [42, 2373, 529, new Date("2012-10-25")],
  "1.3.2": [43, 2402, 529, new Date("2012-08-16")],
  "1.3.1": [44, 2406, 529, new Date("2012-08-01")],
  "1.2.5": [45, 2447, 529, new Date("2012-04-04")],
  "1.2.4": [46, 2461, 529, new Date("2012-03-22")],
  "1.2.3": [47, 2486, 529, new Date("2012-03-02")],
  "1.2.2": [48, 2490, 529, new Date("2012-03-01")],
  "1.2.1": [49, 2493, 529, new Date("2012-03-01")],
  "1.1": [50, 2496, 529, new Date("2012-01-12")],
  "1.0.1": [51, 2499, 529, new Date("2011-11-24")],
  "1.0": [52, 2501, 529, new Date("2011-11-18")]
};

var versionClick = function(id) {
  var arr = versioninfo[id];
  var days = (new Date() - arr[3]) / (1000 * 60 * 60 * 24);
  var years = Math.floor(days / 365);
  var text = "";
     
  if (years === 0) {
    days = Math.floor(days);
    if (days === 1) {
      text = days + " day";
    } else {
      text = days + " days";
    }
  } else {
    if (years === 1) {
      text = "over " + years + " year";
    } else {
      text = "over " + years + " years";
    }
  }
     
  $("#version").text(id);
  $("#versions-behind").text("You're " + arr[0] + " versions behind.");
  $("#bugs-fixed").text(arr[1] + " bugs have been fixed in future versions.");
  $("#spigot").text(arr[2] + " Spigot bugs have been fixed in future versions.");
  $("#time").text("This version is " + text + " old.");
};

$(document).ready(function() {
  versionClick("1.12.2");
  
  $("a").click(function() {
    versionClick(this.id);
  });
});
