// RSVP Form Submission
document.getElementById('rsvp-form').addEventListener('submit', function(event) {
  event.preventDefault();
  alert('Thank you for your RSVP!');
});

// Initialize Map (Using Google Maps API as an example)
function initMap() {
  var location = {lat: 28.4496, lng: 77.2851}; // Coordinates for Manav Rachna University
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 14,
    center: location
  });
  var marker = new google.maps.Marker({
    position: location,
    map: map
  });
}
// RSVP Form Submission
document.getElementById('rsvp-form').addEventListener('submit', function(event) {
  event.preventDefault();
  alert('Thank you for your RSVP!');
});

// Initialize Map (Using Google Maps API as an example)
function initMap() {
  var location = {lat: 28.4496, lng: 77.2851}; // Coordinates for Manav Rachna University
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 14,
    center: location
  });
  var marker = new google.maps.Marker({
    position: location,
    map: map
  });
}
