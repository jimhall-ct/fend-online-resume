var HTMLbioPic = '<img src="%data%" class="bioPic my-3">';

var HTMLheaderName = '<h1 class="name">%data%</h1>';
var HTMLheaderRole = '<h4 class="role">%data%</h4>';

var HTMLcontactsStart = '<ul id="contacts" class="col-12 list-inline list-unstyled d-flex justify-content-between flex-wrap flex-md-row"></ul>';
var HTMLmobile = '<li class="list-inline-item contact" title="mobile phone"><i class="fa fa-phone mr-1 hidden-lg-up" aria-hidden="true"></i><span class="contact-type hidden-md-down">mobile</span><span class="contact-value">%data%</span></li>';
var HTMLemail = '<li class="list-inline-item contact" title="email"><i class="fa fa-envelope mr-1 hidden-lg-up" aria-hidden="true"></i><span class="contact-type hidden-md-down">email</span><span class="contact-value">%data%</span></li>';
var HTMLtwitter = '<li class="list-inline-item contact" title="twitter"><i class="fa fa-twitter mr-1 hidden-lg-up" aria-hidden="true"></i><span class="contact-type hidden-md-down">twitter</span><span class="contact-value">%data%</span></li>';
var HTMLgithub = '<li class="list-inline-item contact" title="github"><i class="fa fa-github mr-1 hidden-lg-up" aria-hidden="true"></i><span class="contact-type hidden-md-down">github</span><span class="contact-value">%data%</span></li>';
var HTMLlocation = '<li class="list-inline-item contact" title="location"><i class="fa fa-map-marker mr-1 hidden-lg-up" aria-hidden="true"></i><span class="contact-type hidden-md-down">location</span><span class="contact-value">%data%</span></li>';

var HTMLwelcomeMsg = '<div class="welcome-message col-12">%data%</div>';

var HTMLskills = '<li class="list-inline-item skill-item">%data%</li>';

var HTMLworkStart = '<div class="col-12 work-entry"></div>';
var HTMLworkTitle = '<div class="title-text">%data%</div>';
var HTMLworkEmployer = '<div class="employer-text">%data%</div>';
var HTMLworkDates = '<div class="date-text">%data%</div>';
var HTMLworkLocation = '<div class="location-text">%data%</div>';
var HTMLworkDescription = '<p><br>%data%</p>';

var HTMLprojectStart = '<div class="col-12 project-entry"></div>';
var HTMLprojectTitle = '<a href="#">%data%</a>';
var HTMLprojectDates = '<div class="date-text">%data%</div>';
var HTMLprojectDescription = '<p>%data%</p>';
var HTMLprojectImage = '<img class="col-md-4 img-fluid p-1" src="%data%">';

var HTMLschoolStart = '<div class="col-12 education-entry"></div>';
var HTMLschoolName = '<a href="#">%data%</a>';
var HTMLschoolDates = '<div class="date-text">%data%</div>';
var HTMLschoolLocation = '<div class="location-text">%data%</div>';
var HTMLschoolMajor = '<div>Major: %data%';
var HTMLschoolDegree = ' -- %data%</div>';

var HTMLonlineClasses = '<h4 class="col-12">Online Classes</h4>';
var HTMLonlineTitle = '<a href="#">%data%';
var HTMLonlineSchool = '<span class="onlineSchool"> — %data%</span></a>';
var HTMLonlineDates = '<div class="date-text">%data%</div>';
var HTMLonlineURL = '<br><a href="#">%data%</a>';

var googleMap = '<div id="map"></div>';
var map; // declares a global map variable

function initializeMap() {

  var locations;

  var mapOptions = {
    disableDefaultUI: true
  };

  /*
  For the map to be displayed, the googleMap var must be
  appended to #mapDiv in resumeBuilder.js.
  */
  map = new google.maps.Map(document.querySelector('#map'), mapOptions);


  /*
  locationFinder() returns an array of every location string from the JSONs
  written for bio, education, and work.
  */
  function locationFinder() {

    // initializes an empty array
    var locations = [];

    // adds the single location property from bio to the locations array
    locations.push(bio.contacts.location);

    // iterates through school locations and appends each location to
    // the locations array. Note that forEach is used for array iteration
    // as described in the Udacity FEND Style Guide:
    // https://udacity.github.io/frontend-nanodegree-styleguide/javascript.html#for-in-loop
    education.schools.forEach(function(school) {
      locations.push(school.location);
    });

    // iterates through work locations and appends each location to
    // the locations array. Note that forEach is used for array iteration
    // as described in the Udacity FEND Style Guide:
    // https://udacity.github.io/frontend-nanodegree-styleguide/javascript.html#for-in-loop
    work.jobs.forEach(function(job) {
      locations.push(job.location);
    });

    return locations;
  }

  /*
  createMapMarker(placeData) reads Google Places search results to create map pins.
  placeData is the object returned from search results containing information
  about a single location.
  */
  function createMapMarker(placeData) {

    // The next lines save location data from the search result object to local variables
    var lat = placeData.geometry.location.lat(); // latitude from the place service
    var lon = placeData.geometry.location.lng(); // longitude from the place service
    var name = placeData.formatted_address; // name of the place from the place service
    var bounds = window.mapBounds; // current boundaries of the map window

    // marker is an object with additional data about the pin for a single location
    var marker = new google.maps.Marker({
      map: map,
      position: placeData.geometry.location,
      title: name
    });

    // infoWindows are the little helper windows that open when you click
    // or hover over a pin on a map. They usually contain more information
    // about a location.
    var infoWindow = new google.maps.InfoWindow({
      content: name
    });

    // hmmmm, I wonder what this is about...
    google.maps.event.addListener(marker, 'click', function() {
      // your code goes here!
    });

    // this is where the pin actually gets added to the map.
    // bounds.extend() takes in a map location object
    bounds.extend(new google.maps.LatLng(lat, lon));
    // fit the map to the new marker
    map.fitBounds(bounds);
    // center the map
    map.setCenter(bounds.getCenter());
  }

  /*
  callback(results, status) makes sure the search returned results for a location.
  If so, it creates a new map marker for that location.
  */
  function callback(results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
      createMapMarker(results[0]);
    }
  }

  /*
  pinPoster(locations) takes in the array of locations created by locationFinder()
  and fires off Google place searches for each location
  */
  function pinPoster(locations) {

    // creates a Google place search service object. PlacesService does the work of
    // actually searching for location data.
    var service = new google.maps.places.PlacesService(map);

    // Iterates through the array of locations, creates a search object for each location
    locations.forEach(function(place) {
      // the search request object
      var request = {
        query: place
      };

      // Actually searches the Google Maps API for location data and runs the callback
      // function with the search results after each search.
      service.textSearch(request, callback);
    });
  }

  // Sets the boundaries of the map based on pin locations
  window.mapBounds = new google.maps.LatLngBounds();

  // locations is an array of location strings returned from locationFinder()
  locations = locationFinder();

  // pinPoster(locations) creates pins on the map for each location in
  // the locations array
  pinPoster(locations);

}
// Calls the initializeMap() function when the page loads
window.addEventListener('load', initializeMap);
// Vanilla JS way to listen for resizing of the window
// and adjust map bounds
window.addEventListener('resize', function(e) {
  // Make sure the map bounds get updated on page resize
  map.fitBounds(mapBounds);
});
