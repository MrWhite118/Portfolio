




var showEl = document.getElementById("time");

setInterval(() => {
var timeEl = new Date();

var h = timeEl.getHours();
var m = timeEl.getMinutes();
var s = timeEl.getSeconds();

showEl.innerHTML = h + ":" + m + ":"+ s;



}, 1000);

