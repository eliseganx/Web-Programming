function init() {
  map_center = {lat: 42.877742, lng: -97.380979}; //{lat: 42.352271, lng: -71.05524200000001};
  infowindow = new google.maps.InfoWindow();
  map_options = {
    zoom: 4, //11,
    center: map_center,
    mapTypeId: 'roadmap'
  };
  map = new google.maps.Map(document.getElementById("final_map"), map_options);
  setRedLine();

//set up geolocation
  var mypng = {url: "youarehere.png", scaledSize: new google.maps.Size(23,34)};
  mypos = new google.maps.LatLng(0,0);
  mymarker = [];

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      mymarker = new google.maps.Marker({position: {lat: position.coords.latitude, lng: position.coords.longitude}, title: "You Are Here", icon: mypng});
      mymarker.setMap(map);
    });
  }
  else {
    alert("Geolocation is not supported by your web browser.");
  }
  ClosestStationToMePolyline(mymarker.position);
}

function setRedLine() {
  var red_image = {url: "RedT.png", scaledSize: new google.maps.Size(23,34)};
  var red_orange_image = {url: "RedOrangeT.png",scaledSize: new google.maps.Size(23,34)};

  //Define and place Red Line stations on Map
  //Also add listener where info window pops up when mousing over icon
  Alewife = new google.maps.Marker ( {position: {lat: 42.395428, lng: -71.142483}, title: "Alewife", icon: red_image});
  Alewife.setMap(map);

  Davis = new google.maps.Marker ( {position: {lat: 42.39674, lng: -71.121815}, title: "Davis", icon: red_image});
  Davis.setMap(map);

  Porter = new google.maps.Marker ( {position: {lat: 42.3884, lng: -71.11914899999999}, title: "Porter Square", icon: red_image});
  Porter.setMap(map);
  
  Harvard = new google.maps.Marker ( {position: {lat: 42.373362, lng: -71.118956}, title: "Harvard Square", icon: red_image});
  Harvard.setMap(map);
  
  Central = new google.maps.Marker ( {position: {lat: 42.365486, lng: -71.103802}, title: "Central Square", icon: red_image});
  Central.setMap(map);
  
  Kendall = new google.maps.Marker ( {position: {lat: 42.36249079, lng: -71.08617653}, title: "Kendall/MIT", icon: red_image});
  Kendall.setMap(map);
 
  Charles = new google.maps.Marker ( {position: {lat: 42.361166, lng: -71.070628}, title: "Charles/MGH", icon: red_image});
  Charles.setMap(map);

  Park = new google.maps.Marker ( {position: {lat: 42.35639457, lng: -71.0624242}, title: "Park Street", icon: red_image});
  Park.setMap(map);

  //Global variable because station is on both Red and Orange Lines.
  DowntownCrossing = new google.maps.Marker ( {position: {lat: 42.355518, lng: -71.060225}, title: "Downtown Crossing", icon: red_orange_image});
  DowntownCrossing.setMap(map);
 
  SouthStation = new google.maps.Marker({position: {lat: 42.352271, lng: -71.05524200000001}, title: "South Station", icon: red_image});
  SouthStation.setMap(map);
  
  Broadway = new google.maps.Marker ( {position: {lat: 42.342622, lng: -71.056967}, title: "Broadway", icon: red_image});
  Broadway.setMap(map);
  
  Andrew = new google.maps.Marker ( {position: {lat: 42.330154, lng: -71.057655}, title: "Andrew", icon: red_image});
  Andrew.setMap(map);
  
  JFK = new google.maps.Marker ( {position: {lat: 42.320685, lng: -71.052391}, title: "JFK/UMass", icon: red_image});
  JFK.setMap(map);
  
  SavinHill = new google.maps.Marker ( {position: {lat: 42.31129, lng: -71.053331}, title: "Savin Hill", icon: red_image});
  SavinHill.setMap(map);
  
  FieldsCorner = new google.maps.Marker ( {position: {lat: 42.300093, lng: -71.061667}, title: "Fields Corner", icon: red_image});
  FieldsCorner.setMap(map);
  
  Shawmut = new google.maps.Marker ( {position: {lat: 42.29312583, lng: -71.06573796000001}, title: "Shawmut", icon: red_image});
  Shawmut.setMap(map);
  
  Ashmont = new google.maps.Marker ( {position: {lat: 42.284652, lng: -71.06448899999999}, title: "Ashmont", icon: red_image});
  Ashmont.setMap(map);
 
  NorthQuincy = new google.maps.Marker ( {position: {lat: 42.275275, lng: -71.029583}, title: "North Quincy", icon: red_image});
  NorthQuincy.setMap(map);
 
  Wollaston = new google.maps.Marker ( {position: {lat: 42.2665139, lng: -71.0203369}, title: "Wollaston", icon: red_image});
  Wollaston.setMap(map);
  
  QuincyCenter = new google.maps.Marker ( {position: {lat: 42.251809, lng: -71.005409}, title: "Quincy Center", icon: red_image});
  QuincyCenter.setMap(map);
 
  QuincyAdams = new google.maps.Marker ( {position: {lat: 42.233391, lng: -71.007153}, title: "Quincy Adams", icon: red_image});
  QuincyAdams.setMap(map);
 
  Braintree = new google.maps.Marker ( {position: {lat: 42.2078543, lng: -71.0011385}, title: "Braintree", icon: red_image});
  Braintree.setMap(map);
  
  AddRedPolylines();
  ShowClosestRedLineStation();
}

function AddRedPolylines() {
  //Create and place Red Line polylines
  var BeforeBranchCoordinates = [Alewife.position, Davis.position, Porter.position, Harvard.position, Central.position, Kendall.position, Charles.position, Park.position, DowntownCrossing.position, SouthStation.position, Broadway.position, Andrew.position, JFK.position];
  
  var BeforeBranch = new google.maps.Polyline ({path: BeforeBranchCoordinates, geodesic: true, strokeColor: "#FF0000"});
  BeforeBranch.setMap(map);

  var QuincyStartCoordinates = [JFK.position, NorthQuincy.position, Wollaston.position, QuincyCenter.position, QuincyAdams.position, Braintree.position];

  var QuincyStart = new google.maps.Polyline ({path: QuincyStartCoordinates, geodesic: true, strokeColor: "#FF0000"});
  QuincyStart.setMap(map);

  var SavinStartCoordinates = [JFK.position, SavinHill.position, FieldsCorner.position, Shawmut.position, Ashmont.position];

  var SavinStart = new google.maps.Polyline ({path: SavinStartCoordinates, geodesic: true, strokeColor: "#FF0000"});
  SavinStart.setMap(map);
}

function ShowClosestRedLineStation() {
  
  Alewife.addListener("mouseover", function() {infowindow.setContent("<center>" + Alewife.title + "</br> Click for more info" + "</center>"); infowindow.open(map, Alewife);});
  Alewife.addListener("click", function() {
    var distmeter = google.maps.geometry.spherical.computeDistanceBetween(Alewife.position, Davis.position);
    var distmile = distmeter * 0.000621371192;
    infowindow.setContent("<center> Closest MBTA Red Line Station: " + Davis.title + "</br> Miles away: " + distmile + "</center>"); 
    infowindow.open(map, Alewife);
  });

  Davis.addListener("mouseover", function() {infowindow.setContent("<center>" + Davis.title + "</br> Click for more info" + "</center>"); infowindow.open(map, Davis);});
  Davis.addListener("click", function() {
    var dist1 = google.maps.geometry.spherical.computeDistanceBetween(Alewife.position, Davis.position);
    var dist2 = google.maps.geometry.spherical.computeDistanceBetween(Davis.position, Porter.position);
    if (dist1 < dist2) {
      var distmeter = dist1 * 0.000621371192;
      infowindow.setContent("<center> Closest MBTA Red Line Station: " + Alewife.title + "</br> Miles away: " + distmeter + "</center>"); 
      infowindow.open(map, Davis);
    }
    else if (dist2 < dist1) {
      var distmeter = dist2 * 0.000621371192;
      infowindow.setContent("<center> Closest MBTA Red Line Station: " + Porter.title + "</br> Miles away: " + distmeter + "</center>"); 
      infowindow.open(map, Davis);
    }
  });

  Porter.addListener("mouseover", function() {infowindow.setContent("<center>" + Porter.title + "</br> Click for more info" + "</center>"); infowindow.open(map, Porter);});
  Porter.addListener("click", function() {
    var dist1 = google.maps.geometry.spherical.computeDistanceBetween(Porter.position, Harvard.position);
    var dist2 = google.maps.geometry.spherical.computeDistanceBetween(Davis.position, Porter.position);
    if (dist1 < dist2) {
      var distmeter = dist1 * 0.000621371192;
      infowindow.setContent("<center> Closest MBTA Red Line Station: " + Harvard.title + "</br> Miles away: " + distmeter + "</center>"); 
      infowindow.open(map, Porter);
    }
    else if (dist2 < dist1) {
      var distmeter = dist2 * 0.000621371192;
      infowindow.setContent("<center> Closest MBTA Red Line Station: " + Davis.title + "</br> Miles away: " + distmeter + "</center>"); 
      infowindow.open(map, Porter);
    }
  });

  Harvard.addListener("mouseover", function() {infowindow.setContent("<center>" + Harvard.title + "</br> Click for more info" + "</center>"); infowindow.open(map, Harvard);});
  Harvard.addListener("click", function() {
    var dist1 = google.maps.geometry.spherical.computeDistanceBetween(Porter.position, Harvard.position);
    var dist2 = google.maps.geometry.spherical.computeDistanceBetween(Harvard.position, Central.position);
    if (dist1 < dist2) {
      var distmeter = dist1 * 0.000621371192;
      infowindow.setContent("<center> Closest MBTA Red Line Station: " + Porter.title + "</br> Miles away: " + distmeter + "</center>"); 
      infowindow.open(map, Harvard);
    }
    else if (dist2 < dist1) {
      var distmeter = dist2 * 0.000621371192;
      infowindow.setContent("<center> Closest MBTA Red Line Station: " + Central.title + "</br> Miles away: " + distmeter + "</center>"); 
      infowindow.open(map, Harvard);
    }
  });

  Central.addListener("mouseover", function() {infowindow.setContent("<center>" + Central.title + "</br> Click for more info" + "</center>"); infowindow.open(map, Central);});
  Central.addListener("click", function() {
    var dist1 = google.maps.geometry.spherical.computeDistanceBetween(Central.position, Harvard.position);
    var dist2 = google.maps.geometry.spherical.computeDistanceBetween(Central.position, Kendall.position);
    if (dist1 < dist2) {
      var distmeter = dist1 * 0.000621371192;
      infowindow.setContent("<center> Closest MBTA Red Line Station: " + Harvard.title + "</br> Miles away: " + distmeter + "</center>"); 
      infowindow.open(map, Central);
    }
    else if (dist2 < dist1) {
      var distmeter = dist2 * 0.000621371192;
      infowindow.setContent("<center> Closest MBTA Red Line Station: " + Kendall.title + "</br> Miles away: " + distmeter + "</center>"); 
      infowindow.open(map, Central);
    }
  });

  Kendall.addListener("mouseover", function() {infowindow.setContent("<center>" + Kendall.title + "</br> Click for more info" + "</center>"); infowindow.open(map, Kendall);});
  Kendall.addListener("click", function() {
    var dist1 = google.maps.geometry.spherical.computeDistanceBetween(Kendall.position, Central.position);
    var dist2 = google.maps.geometry.spherical.computeDistanceBetween(Kendall.position, Charles.position);
    if (dist1 < dist2) {
      var distmeter = dist1 * 0.000621371192;
      infowindow.setContent("<center> Closest MBTA Red Line Station: " + Central.title + "</br> Miles away: " + distmeter + "</center>"); 
      infowindow.open(map, Kendall);
    }
    else if (dist2 < dist1) {
      var distmeter = dist2 * 0.000621371192;
      infowindow.setContent("<center> Closest MBTA Red Line Station: " + Charles.title + "</br> Miles away: " + distmeter + "</center>"); 
      infowindow.open(map, Kendall);
    }
  });

  Charles.addListener("mouseover", function() {infowindow.setContent("<center>" + Charles.title + "</br> Click for more info" + "</center>"); infowindow.open(map, Charles);});
  Charles.addListener("click", function() {
    var dist1 = google.maps.geometry.spherical.computeDistanceBetween(Charles.position, Kendall.position);
    var dist2 = google.maps.geometry.spherical.computeDistanceBetween(Charles.position, Park.position);
    if (dist1 < dist2) {
      var distmeter = dist1 * 0.000621371192;
      infowindow.setContent("<center> Closest MBTA Red Line Station: " + Kendall.title + "</br> Miles away: " + distmeter + "</center>"); 
      infowindow.open(map, Charles);
    }
    else if (dist2 < dist1) {
      var distmeter = dist2 * 0.000621371192;
      infowindow.setContent("<center> Closest MBTA Red Line Station: " + Park.title + "</br> Miles away: " + distmeter + "</center>"); 
      infowindow.open(map, Charles);
    }
  });

  Park.addListener("mouseover", function() {infowindow.setContent("<center>" + Park.title + "</br> Click for more info" + "</center>"); infowindow.open(map, Park);});
  Park.addListener("click", function() {
    var dist1 = google.maps.geometry.spherical.computeDistanceBetween(Park.position, Charles.position);
    var dist2 = google.maps.geometry.spherical.computeDistanceBetween(Park.position, DowntownCrossing.position);
    if (dist1 < dist2) {
      var distmeter = dist1 * 0.000621371192;
      infowindow.setContent("<center> Closest MBTA Red Line Station: " + Charles.title + "</br> Miles away: " + distmeter + "</center>"); 
      infowindow.open(map, Park);
    }
    else if (dist2 < dist1) {
      var distmeter = dist2 * 0.000621371192;
      infowindow.setContent("<center> Closest MBTA Red Line Station: " + DowntownCrossing.title + "</br> Miles away: " + distmeter + "</center>"); 
      infowindow.open(map, Park);
    }
  });

  DowntownCrossing.addListener("mouseover", function() {infowindow.setContent("<center>" + DowntownCrossing.title + "</br> Click for more info" + "</center>"); infowindow.open(map, DowntownCrossing);});
  DowntownCrossing.addListener("click", function() {
    var dist1 = google.maps.geometry.spherical.computeDistanceBetween(DowntownCrossing.position, Park.position);
    var dist2 = google.maps.geometry.spherical.computeDistanceBetween(DowntownCrossing.position, SouthStation.position);
    if (dist1 < dist2) {
      var distmeter = dist1 * 0.000621371192;
      infowindow.setContent("<center> Closest MBTA Red Line Station: " + Park.title + "</br> Miles away: " + distmeter + "</center>"); 
      infowindow.open(map, DowntownCrossing);
    }
    else if (dist2 < dist1) {
      var distmeter = dist2 * 0.000621371192;
      infowindow.setContent("<center> Closest MBTA Red Line Station: " + SouthStation.title + "</br> Miles away: " + distmeter + "</center>"); 
      infowindow.open(map, DowntownCrossing);
    }
  });

  SouthStation.addListener("mouseover", function() {infowindow.setContent("<center>" + SouthStation.title + "</br> Click for more info" + "</center>"); infowindow.open(map, SouthStation);});
  SouthStation.addListener("click", function() {
    var dist1 = google.maps.geometry.spherical.computeDistanceBetween(SouthStation.position, DowntownCrossing.position);
    var dist2 = google.maps.geometry.spherical.computeDistanceBetween(SouthStation.position, Broadway.position);
    if (dist1 < dist2) {
      var distmeter = dist1 * 0.000621371192;
      infowindow.setContent("<center> Closest MBTA Red Line Station: " + DowntownCrossing.title + "</br> Miles away: " + distmeter + "</center>"); 
      infowindow.open(map, SouthStation);
    }
    else if (dist2 < dist1) {
      var distmeter = dist2 * 0.000621371192;
      infowindow.setContent("<center> Closest MBTA Red Line Station: " + Broadway.title + "</br> Miles away: " + distmeter + "</center>"); 
      infowindow.open(map, SouthStation);
    }
  });

  Broadway.addListener("mouseover", function() {infowindow.setContent("<center>" + Broadway.title + "</br> Click for more info" + "</center>"); infowindow.open(map, Broadway);});
  Broadway.addListener("click", function() {
    var dist1 = google.maps.geometry.spherical.computeDistanceBetween(Broadway.position, SouthStation.position);
    var dist2 = google.maps.geometry.spherical.computeDistanceBetween(Broadway.position, Andrew.position);
    if (dist1 < dist2) {
      var distmeter = dist1 * 0.000621371192;
      infowindow.setContent("<center> Closest MBTA Red Line Station: " + SouthStation.title + "</br> Miles away: " + distmeter + "</center>"); 
      infowindow.open(map, Broadway);
    }
    else if (dist2 < dist1) {
      var distmeter = dist2 * 0.000621371192;
      infowindow.setContent("<center> Closest MBTA Red Line Station: " + Andrew.title + "</br> Miles away: " + distmeter + "</center>"); 
      infowindow.open(map, Broadway);
    }
  });

  Andrew.addListener("mouseover", function() {infowindow.setContent("<center>" + Andrew.title + "</br> Click for more info" + "</center>"); infowindow.open(map, Andrew);});
  Andrew.addListener("click", function() {
    var dist1 = google.maps.geometry.spherical.computeDistanceBetween(Andrew.position, Broadway.position);
    var dist2 = google.maps.geometry.spherical.computeDistanceBetween(Andrew.position, JFK.position);
    if (dist1 < dist2) {
      var distmeter = dist1 * 0.000621371192;
      infowindow.setContent("<center> Closest MBTA Red Line Station: " + Broadway.title + "</br> Miles away: " + distmeter + "</center>"); 
      infowindow.open(map, Andrew);
    }
    else if (dist2 < dist1) {
      var distmeter = dist2 * 0.000621371192;
      infowindow.setContent("<center> Closest MBTA Red Line Station: " + JFK.title + "</br> Miles away: " + distmeter + "</center>"); 
      infowindow.open(map, Andrew);
    }
  });

  JFK.addListener("mouseover", function() {infowindow.setContent("<center>" + JFK.title + "</br> Click for more info" + "</center>"); infowindow.open(map, JFK);});
  JFK.addListener("click", function() {
    var dist1 = google.maps.geometry.spherical.computeDistanceBetween(JFK.position, Andrew.position);
    var dist2 = google.maps.geometry.spherical.computeDistanceBetween(JFK.position, NorthQuincy.position);
    var dist3 = google.maps.geometry.spherical.computeDistanceBetween(JFK.position, SavinHill.position);
    if ((dist1 < dist2) && (dist1 < dist3)) {
      var distmeter = dist1 * 0.000621371192;
      infowindow.setContent("<center> Closest MBTA Red Line Station: " + Andrew.title + "</br> Miles away: " + distmeter + "</center>"); 
      infowindow.open(map, JFK);
    }
    else if ((dist2 < dist1) && (dist2 < dist3)) {
      var distmeter = dist2 * 0.000621371192;
      infowindow.setContent("<center> Closest MBTA Red Line Station: " + NorthQuincy.title + "</br> Miles away: " + distmeter + "</center>"); 
      infowindow.open(map, JFK);
    }
    else if ((dist3 < dist1) && (dist3 < dist2)) {
      var distmeter = dist3 * 0.000621371192;
      infowindow.setContent("<center> Closest MBTA Red Line Station: " + SavinHill.title + "</br> Miles away: " + distmeter + "</center>"); 
      infowindow.open(map, JFK);
    }
  });

  SavinHill.addListener("mouseover", function() {infowindow.setContent("<center>" + SavinHill.title + "</br> Click for more info" + "</center>"); infowindow.open(map, SavinHill);});
  SavinHill.addListener("click", function() {
    var dist1 = google.maps.geometry.spherical.computeDistanceBetween(SavinHill.position, JFK.position);
    var dist2 = google.maps.geometry.spherical.computeDistanceBetween(SavinHill.position, FieldsCorner.position);
    if (dist1 < dist2) {
      var distmeter = dist1 * 0.000621371192;
      infowindow.setContent("<center> Closest MBTA Red Line Station: " + JFK.title + "</br> Miles away: " + distmeter + "</center>"); 
      infowindow.open(map, SavinHill);
    }
    else if (dist2 < dist1) {
      var distmeter = dist2 * 0.000621371192;
      infowindow.setContent("<center> Closest MBTA Red Line Station: " + FieldsCorner.title + "</br> Miles away: " + distmeter + "</center>"); 
      infowindow.open(map, SavinHill);
    }
  });

  FieldsCorner.addListener("mouseover", function() {infowindow.setContent("<center>" + FieldsCorner.title + "</br> Click for more info" + "</center>"); infowindow.open(map, FieldsCorner);});
  FieldsCorner.addListener("click", function() {
    var dist1 = google.maps.geometry.spherical.computeDistanceBetween(FieldsCorner.position, SavinHill.position);
    var dist2 = google.maps.geometry.spherical.computeDistanceBetween(FieldsCorner.position, Shawmut.position);
    if (dist1 < dist2) {
      var distmeter = dist1 * 0.000621371192;
      infowindow.setContent("<center> Closest MBTA Red Line Station: " + SavinHill.title + "</br> Miles away: " + distmeter + "</center>"); 
      infowindow.open(map, FieldsCorner);
    }
    else if (dist2 < dist1) {
      var distmeter = dist2 * 0.000621371192;
      infowindow.setContent("<center> Closest MBTA Red Line Station: " + Shawmut.title + "</br> Miles away: " + distmeter + "</center>"); 
      infowindow.open(map, FieldsCorner);
    }
  });

  Shawmut.addListener("mouseover", function() {infowindow.setContent("<center>" + Shawmut.title + "</br> Click for more info" + "</center>"); infowindow.open(map, Shawmut);});
  Shawmut.addListener("click", function() {
    var dist1 = google.maps.geometry.spherical.computeDistanceBetween(Shawmut.position, FieldsCorner.position);
    var dist2 = google.maps.geometry.spherical.computeDistanceBetween(Shawmut.position, Ashmont.position);
    if (dist1 < dist2) {
      var distmeter = dist1 * 0.000621371192;
      infowindow.setContent("<center> Closest MBTA Red Line Station: " + FieldsCorner.title + "</br> Miles away: " + distmeter + "</center>"); 
      infowindow.open(map, Shawmut);
    }
    else if (dist2 < dist1) {
      var distmeter = dist2 * 0.000621371192;
      infowindow.setContent("<center> Closest MBTA Red Line Station: " + Ashmont.title + "</br> Miles away: " + distmeter + "</center>"); 
      infowindow.open(map, Shawmut);
    }
  });

  Ashmont.addListener("mouseover", function() {infowindow.setContent("<center>" + Ashmont.title + "</br> Click for more info" + "</center>"); infowindow.open(map, Ashmont);});
  Ashmont.addListener("click", function() {
    var distmeter = google.maps.geometry.spherical.computeDistanceBetween(Ashmont.position, Shawmut.position);
    var distmile = distmeter * 0.000621371192;
    infowindow.setContent("<center> Closest MBTA Red Line Station: " + Shawmut.title + "</br> Miles away: " + distmile + "</center>"); 
    infowindow.open(map, Ashmont);
  });

  NorthQuincy.addListener("mouseover", function() {infowindow.setContent("<center>" + NorthQuincy.title + "</br> Click for more info" + "</center>"); infowindow.open(map, NorthQuincy);});
  NorthQuincy.addListener("click", function() {
    var dist1 = google.maps.geometry.spherical.computeDistanceBetween(NorthQuincy.position, JFK.position);
    var dist2 = google.maps.geometry.spherical.computeDistanceBetween(NorthQuincy.position, Wollaston.position);
    if (dist1 < dist2) {
      var distmeter = dist1 * 0.000621371192;
      infowindow.setContent("<center> Closest MBTA Red Line Station: " + JFK.title + "</br> Miles away: " + distmeter + "</center>"); 
      infowindow.open(map, NorthQuincy);
    }
    else if (dist2 < dist1) {
      var distmeter = dist2 * 0.000621371192;
      infowindow.setContent("<center> Closest MBTA Red Line Station: " + Wollaston.title + "</br> Miles away: " + distmeter + "</center>"); 
      infowindow.open(map, NorthQuincy);
    }
  });

  Wollaston.addListener("mouseover", function() {infowindow.setContent("<center>" + Wollaston.title + "</br> Click for more info" + "</center>"); infowindow.open(map, Wollaston);});
  Wollaston.addListener("click", function() {
    var dist1 = google.maps.geometry.spherical.computeDistanceBetween(Wollaston.position, NorthQuincy.position);
    var dist2 = google.maps.geometry.spherical.computeDistanceBetween(Wollaston.position, QuincyCenter.position);
    if (dist1 < dist2) {
      var distmeter = dist1 * 0.000621371192;
      infowindow.setContent("<center> Closest MBTA Red Line Station: " + NorthQuincy.title + "</br> Miles away: " + distmeter + "</center>"); 
      infowindow.open(map, Wollaston);
    }
    else if (dist2 < dist1) {
      var distmeter = dist2 * 0.000621371192;
      infowindow.setContent("<center> Closest MBTA Red Line Station: " + QuincyCenter.title + "</br> Miles away: " + distmeter + "</center>"); 
      infowindow.open(map, Wollaston);
    }
  });

  QuincyCenter.addListener("mouseover", function() {infowindow.setContent("<center>" + QuincyCenter.title + "</br> Click for more info" + "</center>"); infowindow.open(map, QuincyCenter);});
  QuincyCenter.addListener("click", function() {
    var dist1 = google.maps.geometry.spherical.computeDistanceBetween(QuincyCenter.position, Wollaston.position);
    var dist2 = google.maps.geometry.spherical.computeDistanceBetween(QuincyCenter.position, QuincyAdams.position);
    if (dist1 < dist2) {
      var distmeter = dist1 * 0.000621371192;
      infowindow.setContent("<center> Closest MBTA Red Line Station: " + Wollaston.title + "</br> Miles away: " + distmeter + "</center>"); 
      infowindow.open(map, QuincyCenter);
    }
    else if (dist2 < dist1) {
      var distmeter = dist2 * 0.000621371192;
      infowindow.setContent("<center> Closest MBTA Red Line Station: " + QuincyAdams.title + "</br> Miles away: " + distmeter + "</center>"); 
      infowindow.open(map, QuincyCenter);
    }
  });

  QuincyAdams.addListener("mouseover", function() {infowindow.setContent("<center>" + QuincyAdams.title + "</br> Click for more info" + "</center>"); infowindow.open(map, QuincyAdams);});
  QuincyAdams.addListener("click", function() {
    var dist1 = google.maps.geometry.spherical.computeDistanceBetween(QuincyAdams.position, QuincyCenter.position);
    var dist2 = google.maps.geometry.spherical.computeDistanceBetween(QuincyAdams.position, Braintree.position);
    if (dist1 < dist2) {
      var distmeter = dist1 * 0.000621371192;
      infowindow.setContent("<center> Closest MBTA Red Line Station: " + QuincyCenter.title + "</br> Miles away: " + distmeter + "</center>"); 
      infowindow.open(map, QuincyAdams);
    }
    else if (dist2 < dist1) {
      var distmeter = dist2 * 0.000621371192;
      infowindow.setContent("<center> Closest MBTA Red Line Station: " + Braintree.title + "</br> Miles away: " + distmeter + "</center>"); 
      infowindow.open(map, QuincyAdams);
    }
  });

  Braintree.addListener("mouseover", function() {infowindow.setContent("<center>" + Braintree.title + "</br> Click for more info" + "</center>"); infowindow.open(map, Braintree);});
  Braintree.addListener("click", function() {
    var distmeter = google.maps.geometry.spherical.computeDistanceBetween(Braintree.position, QuincyAdams.position);
    var distmile = distmeter * 0.000621371192;
    infowindow.setContent("<center> Closest MBTA Red Line Station: " + QuincyAdams.title + "</br> Miles away: " + distmile + "</center>"); 
    infowindow.open(map, Braintree);
  });


}

function ClosestStationToMePolyline(myposition)  {
  var allstations = [Alewife.position, Davis.position, Porter.position, Harvard.position, Central.position, Kendall.position, Charles.position, Park.position, DowntownCrossing.position, SouthStation.position, Broadway.position, Andrew.position, JFK.position, NorthQuincy.position, Wollaston.position, QuincyCenter.position, QuincyAdams.position, Braintree.position, SavinHill.position, FieldsCorner.position, Shawmut.position, Ashmont.position];
  var shortestdist = 1000000000; 
  for (var i = 0; i < allstations.length; i++) {
    var teststation = allstations[i];
    var testdist = google.maps.geometry.spherical.computeDistanceBetween(myposition, teststation);
    if (testdist < shortestdist) {
      shortestdist = testdist;
    } 
    else {
      shortestdist = shortestdist;
    }
  }
  var coordinates = [myposition, shortestdist];
  var polyline = new google.maps.Polyline ({path: coordinates, geodesic: true, strokeColor: "#000000"});
  polyline.setMap(map);
}

  
