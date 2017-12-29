//Countdown For events page
// Sets the date that it is counting until
var countDownDate = new Date("Feb 5, 2018 20:00:00").getTime();

// Update countdown
var x = setInterval(function() {

  //current date / time
  var now = new Date().getTime();

  // distance between
  var distance = countDownDate - now;

  // calculate the days, hours minutes and seconds left
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  // Prints the countdown
  document.getElementById("demo").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "Event Finished";
  }
}, 1000);





//Homepage Slideshow

var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("slides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 5000); // Change image every 2 seconds
};


//Google Maps API
"use strict";

function initMap() {
  let eventloc = {lat: 52.154364, lng: -0.841086};
  let Silverstone = {lat: 52.073301, lng: -1.014663};
  let SantaPod = {lat: 52.234850, lng: -0.600091};
  let mapDemo = document.getElementById("map");

  // default location for when the map is first loaded, and zoom to enable both pointers visiblile
  let map = new google.maps.Map(mapDemo, {
    zoom: 10,
    center: eventloc
  });

  // two markers on the map for the events
  let markerSilverstone = new google.maps.Marker({
    position: Silverstone,
    map: map,
    title: 'STANCE | LIFE Silverstone Event!'
  });
  let markerSantaPod = new google.maps.Marker({
    position: SantaPod,
    map: map,
    title: 'STANCE | LIFE Santa Pod Event!'
  });
};


// Scrolls to the top of the document upon click
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop =
        0;
};




/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}
