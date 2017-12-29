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



"use strict";

function initMap() {
  let eventloc = {lat: 52.154364, lng: -0.841086};
  let Silverstone = {lat: 52.073301, lng: -1.014663};
  let SantaPod = {lat: 52.234850, lng: -0.600091};
  let mapDemo = document.getElementById("map");

  // this sets the default location for when the map is first loaded
  let map = new google.maps.Map(mapDemo, {
    zoom: 10,
    center: eventloc
  });

  // these set different markers you want to show on your map
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

// Scrolls to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop =
        0;
}
